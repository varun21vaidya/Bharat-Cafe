import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent {
  food!:Food[];
  constructor(private foodservice: FoodService,private route: ActivatedRoute){
  }

  ngOnInit(){
    this.route.params.subscribe((param:Params)=>{
      this.food=this.foodservice.getFoodById(param['id'])
      console.log(this.food)
    })
  }
}
