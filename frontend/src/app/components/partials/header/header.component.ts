import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartquantity=0;
  constructor(private cartservice:CartService){
    cartservice.getCartObservable().subscribe((newcart)=>{
      this.cartquantity=newcart.totalCount;
    })
  }
}
