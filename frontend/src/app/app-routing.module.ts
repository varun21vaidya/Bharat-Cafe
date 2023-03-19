import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { FoodpageComponent } from './components/pages/foodpage/foodpage.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { OrderTrackPageComponent } from './components/pages/order-track-page/order-track-page.component';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';
import { UserProfileComponent } from './components/pages/user-profile/user-profile.component';
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'api/foods/search/:searchTerm', component: HomepageComponent },
  { path: 'api/foods/:id', component: FoodpageComponent },
  { path: 'api/foods/tag/:tag', component: HomepageComponent },
  { path: 'cart-page', component: CartPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'user-profile', component: UserProfileComponent },
  {
    path: 'checkout',
    component: CheckoutPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'payment',
    component: PaymentPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'track/:orderId',
    component: OrderTrackPageComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
