import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{
  foods:Food[]=[];
  constructor(private foodservice: FoodService){
    this.foods=foodservice.getAll();
  }

  ngOnInit(): void {

  }
}
