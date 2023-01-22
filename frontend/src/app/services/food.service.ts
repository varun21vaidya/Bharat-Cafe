import { Injectable } from '@angular/core';
import { sample_foods } from 'src/data';
import { Food } from '../shared/models/food';
import { Tag, taglist } from '../shared/models/tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}
  // get all the foods from data.ts
  // further this service should get data from backend
  getAll(): Food[] {
    return sample_foods;
  }

  // method for search
  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.getAll().filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // get food by Id so we can use it for search
  getFoodById(Id: string) {
    return this.getAll().filter((food) => food.id === Id);
  }

  // get tag list and count with Tag[]
  getAllTags() {
    return taglist;
  }

  getFoodByTag(tag: string) {
    // if user wants all tags return all foods
    return tag === 'All'
      ? // else if specific tag is selected return those foods
        this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tag));
  }
}
