import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    activatedRoute.params.subscribe((params) => {
      // get food item from search bar
      if (params['searchTerm']) {
        this.foods = this.foodService.getAllFoodsBySearchTerm(
          params['searchTerm']
        );
      }

      // get foods by specific tags
      else if (params['tag']) {
        // console.log('the tag is', params['tag']);
        this.foods = this.foodService.getFoodByTag(params['tag']);
      } else this.foods = this.foodService.getAll();
    });
  }
  ngOnInit(): void {}
}
