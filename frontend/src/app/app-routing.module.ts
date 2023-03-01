import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FoodpageComponent } from './components/foodpage/foodpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'api/foods/search/:searchTerm', component: HomepageComponent },
  { path: 'api/foods/:id', component: FoodpageComponent },
  { path: 'api/foods/tag/:tag', component: HomepageComponent },
  { path: 'cart-page', component: CartPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'checkout', component: CheckoutComponent, canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
