import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';
import { Router } from '@angular/router';
import { Tag } from 'src/app/shared/models/tag';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  keyword = 'name';
  foods!: Food[];
  constructor(private foodservice: FoodService, private router: Router) {
    // this.foods = this.foodservice.getAll();
    this.foodservice.getAll().subscribe((serverfoods) => {
      this.foods = serverfoods;
    });
  }
  selectEvent(term: any) {
    // console.log('this term is selected', term);
    // do something with selected item

    // show the searched food on page ie created in food.service with getAllFoodsBySearchTerm
    this.router.navigateByUrl('/api/foods/search/' + term.name);
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e: any) {
    // do something
  }

  ngOnInit() {}
}
