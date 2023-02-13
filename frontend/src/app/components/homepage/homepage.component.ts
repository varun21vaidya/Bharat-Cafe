import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';
@Component({
  selector: 'app-homepage',
  template: `{{ name }}`,
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  foods: Food[] = [];
  message: string = '';
  @Input()
  name!: string;
  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute
  ) {
    let foodsObservable:Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      // console.log("params are", params);
      // get food item from search bar
      if (params['searchTerm']) {
        // this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
        foodsObservable=this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
      }

      // get foods by specific tags
      else if (params['tag']) {
        // console.log('the tag is', params['tag']);
        // this.foods = this.foodService.getFoodByTag(params['tag']);
        foodsObservable=this.foodService.getFoodByTag(params['tag']);
      }
      else{
        // this.foods = this.foodService.getAll();
        foodsObservable= this.foodService.getAll();
      }

      // subscibe to observable foods to get foods locally.
      foodsObservable.subscribe((serverFoods)=>{
        this.foods=serverFoods;
      })
    });
  }
  ngOnInit(): void {}
}
