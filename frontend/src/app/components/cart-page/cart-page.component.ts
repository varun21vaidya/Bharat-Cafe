import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/cartItem';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cart!:Cart;

  constructor(private cartservice: CartService){
    this.cartservice.getCartObservable().subscribe((cart)=>{
      this.cart=cart;
    })
  }
  removeItem(cartItem:CartItem){
    this.cartservice.removeFromCart(cartItem.food.id)
  }

  changeQuantity(cartItem:CartItem,quantityString:string){
    this.cartservice.ChangeQuantity(cartItem.food.id, parseInt(quantityString)
      )
  }
}
