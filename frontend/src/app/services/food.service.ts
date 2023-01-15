import { Injectable } from '@angular/core';
import { sample_foods } from 'src/data';
import { Food } from '../shared/models/food';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  // get all the foods from data.ts
  // further this service should get data from backend
  constructor() {}

  getAll(): Food[] {
    return sample_foods;
  }

  // method for search
  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.getAll().filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
