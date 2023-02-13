import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/cartItem';
import { Food } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // private cart:Cart= new Cart()
  // instead of new cart get cart from localStorage
  private cart: Cart= this.getCartFromLocalStorage()

  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart)
  constructor(private http: HttpClient) { }

  // add items to cart
  addToCart(food:Food){

    // find if item is already present in cart
    let cartitem = this.cart.items.find(item=>
      item.food.id===food.id)

    // if the food item is already added to cart, dont include again
    if (cartitem)
    return;

    // othervice add it
    this.cart.items.push(new CartItem(food))

    // everytime we make changes to cart, set it in localstorage
    this.setCartLocal();
  }

  // remove item from cart
  removeFromCart(foodId:string){
    // // get index of that food item from cart then splice it
    // let ind= this.cart.items.indexOf(new CartItem(food))
    // this.cart.items.splice(ind,1)
    this.cart.items =this.cart.items.filter(item=>
      item.food.id!=foodId)

     // everytime we make changes to cart, set it in localstorage
    this.setCartLocal();
  }

  // take id and quantity as params and find product from id
  // incase (not mostly) product is not there, return
  // else change quantity and total price of product
  ChangeQuantity(foodId:string, quantity:number){
    let product= this.cart.items.find(
      item => item.food.id===foodId);

      if(!product) return;

      product.quantity=quantity;
      product.price= quantity*product.food.price;


    // everytime we make changes to cart, set it in localstorage
    this.setCartLocal();
  }

  // if we click on clear Cart button, it will reset Cart
  ClearCart(){
    this.cart=new Cart()

    // everytime we make changes to cart, set it in localstorage
    this.setCartLocal();
  }

  // now we will return our cart as observable, as if we return it as
  // subject someone can change it later, so convert to observable

  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable()
  }


  // now as we are initializing our cart before constructor
  // everytime we refresh page it will reset, to avoid that use Localstorage
  private setCartLocal(){

    // calculate totalprice
    this.cart.totalPrice= this.cart.items.reduce((sum, item)=> sum+item.price,0)

    // calculate quantity
    this.cart.totalCount= this.cart.items.reduce((sum, item)=> sum+item.quantity,0)

    const cartJson= JSON.stringify(this.cart)
    localStorage.setItem('Cart',cartJson)

    // any object listening to cart Observable should be notified
    this.cartSubject.next(this.cart)
  }

  // get cart form local storage
  private getCartFromLocalStorage():Cart{
    const cartJson= localStorage.getItem('Cart')

    // if there is item in cart parse it and return
    // else return new Cart
    return cartJson ? JSON.parse(cartJson): new Cart()
  }
}
