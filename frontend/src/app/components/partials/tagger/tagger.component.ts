import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Tag } from 'src/app/shared/models/tag';

@Component({
  selector: 'app-tagger',
  templateUrl: './tagger.component.html',
  styleUrls: ['./tagger.component.css'],
})
export class TaggerComponent {
  taglist?: Tag[];
  constructor(foodservice: FoodService) {
    // show all tags
    this.taglist = foodservice.getAllTags();
  }
  ngOnInit() {}
}
