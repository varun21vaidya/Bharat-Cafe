import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { Order } from 'src/app/shared/models/order';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  order: Order = new Order();
  checkoutForm!: FormGroup;
  constructor(
    cartservice: CartService,
    private formbuilder: FormBuilder,
    private userservice: UserService,
    private toastrservice: ToastrService
  ) {
    const cart = cartservice.getCart();
    this.order.items=cart.items;
    this.order.totalPrice=cart.totalPrice;

  }

  ngOnInit():void{
    let {name,address} = this.userservice.currentUser;
    this.checkoutForm= this.formbuilder.group({
      name:[ name, Validators.required],
      address:[address, Validators.required]
    })
  }


  get fc(){
    return this.checkoutForm.controls;
  }

  createOrder(){
    if (this.checkoutForm.invalid){
      this.toastrservice.warning("Please fill the inputs", "Invalid Inputs");
      return;
    }
    this.order.name= this.fc['name'].value;
    this.order.address= this.fc['address'].value


    console.log(this.order)
  }


}
