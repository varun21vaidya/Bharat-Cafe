import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { USER_LOGIN_URL,USER_REGISTER_URL } from '../shared/constants/env';
import { UserLogin } from '../shared/interfaces/UserLogin';
import { User } from '../shared/models/User';
import { ToastrService } from 'ngx-toastr';
import { UserRegister } from '../shared/interfaces/UserRegister';
const USER_KEY = 'User';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(
    this.getUserFromLocalStorage()
  );
  public userObservable!: Observable<User>;

  constructor(private http: HttpClient, private toastrService: ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }

  register(userRegister:UserRegister):Observable<User>{
    return this.http.post<User>(USER_REGISTER_URL, userRegister).pipe(
      tap({
        next: (user) => {
          // after successfull register store that user to local storage
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome to Bharat Cafe,  ${user.name}!`,
            `Registration Successful`
          );
        },
        error: (errorResponse) => {
          this.toastrService.error('Register Failed, Please Try Again');
        },
      })
    );
  }

  login(userLogin: UserLogin): Observable<User> {
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          // after successfull login store that user to local storage
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome to Bharat Cafe,  ${user.name}!`,
            `Login Successful`
          );
        },
        error: (errorResponse) => {
          this.toastrService.error('Login Failed, Please Try Again');
        },
      })
    );
  }

  // add log out functionality
  logout() {
    //show as new empty user
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
  }

  // to store logged in user
  private setUserToLocalStorage(user: User) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage(): User {
    const userJson = localStorage.getItem(USER_KEY);
    if (userJson) return JSON.parse(userJson) as User;
    // if there is no user return new user
    return new User();
  }
}
