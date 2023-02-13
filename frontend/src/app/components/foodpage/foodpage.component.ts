import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css'],
})
export class FoodpageComponent {
  food!: Food;
  constructor(
    private foodservice: FoodService,
    private activatedroute: ActivatedRoute,
    private cartservice: CartService,
    private router: Router
  ) {
    this.activatedroute.params.subscribe((param: Params) => {
      if (param['id']) this.food = this.foodservice.getFoodById(param['id']);
      // console.log(this.food)
    });
  }

  ngOnInit() {}

  addToCart() {
    this.cartservice.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
