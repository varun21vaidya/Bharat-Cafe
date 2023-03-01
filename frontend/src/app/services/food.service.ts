import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  FOODS_BY_ID_URL,
  FOODS_BY_SEARCH_URL,
  FOODS_BY_TAG_URL,
  FOODS_TAGS_URL,
  FOODS_URL,
} from '../shared/constants/env';
import { Food } from '../shared/models/food';
import { Tag } from '../shared/models/tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private http: HttpClient) {}
  // get all the foods from data.ts
  // further this service should get data from backend
  // to get from backend we make it an observable
  getAll(): Observable<Food[]> {
    // return sample_foods;
    return this.http.get<Food[]>(FOODS_URL);
  }

  // method for search
  getAllFoodsBySearchTerm(searchTerm: string): Observable<Food[]> {
    // return this.getAll().filter((food) =>
    //   food.name.toLowerCase().includes(searchTerm.toLowerCase())
    // );
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }

  // get food by Id so we can use it for search
  getFoodById(foodId: string): Observable<Food[]> {
    // return this.getAll().find((food) => food.id == foodId) ?? new Food();
    // console.log('this will be id url for current foodpage', FOODS_BY_ID_URL + foodId);
    return this.http.get<Food[]>(FOODS_BY_ID_URL + foodId);
  }

  // get tag list and count with Tag[]
  getAllTags() {
    // return taglist;
    return this.http.get<Tag[]>(FOODS_TAGS_URL);
  }

  getFoodByTag(tag: string): Observable<Food[]> {
    // if user wants all tags return all foods
    return tag === 'All'
      ? // else if specific tag is selected return those foods
        this.getAll()
      : // this.getAll().filter((food) => food.tags?.includes(tag));
        this.http.get<Food[]>(FOODS_BY_TAG_URL + tag);
  }
}
