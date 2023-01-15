import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';
@Component({
  selector: 'app-homepage',
  template:`{{name}}`,
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


    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) {
        this.foods = this.foodService.getAllFoodsBySearchTerm(
          params['searchTerm']
        );

        if (this.foods.length == 0) {
          this.message = 'Item is not Available';
          this.foods = foodService.getAll();
        }
      } else this.foods = foodService.getAll();
    });
  }
  ngOnInit(): void {}
}
