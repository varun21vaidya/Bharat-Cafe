import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  //create a behavior subject with default value false
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  constructor() {}

  showLoading() {
    this.isLoadingSubject.next(true);
  }
  hideLoading() {
    this.isLoadingSubject.next(false);
  }
  // by making isLoading as observable, noone cannot change its value from outside
  get isLoading() {
    return this.isLoadingSubject.asObservable();
  }
}
