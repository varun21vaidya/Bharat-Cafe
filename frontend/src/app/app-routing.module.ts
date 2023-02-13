import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { FoodpageComponent } from './components/foodpage/foodpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'api/foods/search/:searchTerm', component: HomepageComponent },
  { path: 'api/foods/:id', component: FoodpageComponent },
  { path: 'api/foods/tag/:tag', component: HomepageComponent },
  { path: 'cart-page', component: CartPageComponent },
  { path: 'checkout', component: CartPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
