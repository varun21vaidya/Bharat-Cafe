import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  cartquantity = 0;
  user!: User;
  constructor(
    private cartservice: CartService,
    private userservice: UserService
  ) {
    // subscibe to cartquantity items count for the cart header
    cartservice.getCartObservable().subscribe((newcart) => {
      this.cartquantity = newcart.totalCount;
    });

    // after user is logged in changed User to User's name
    userservice.userObservable.subscribe((newUser) => {
      this.user = newUser;
    });
  }

  logout() {
    this.userservice.logout();
  }

  get isLogged() {
    return this.user.name;
  }
}
