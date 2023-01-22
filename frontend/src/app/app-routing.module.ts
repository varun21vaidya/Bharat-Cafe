import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodpageComponent } from './components/foodpage/foodpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'search/:searchTerm', component: HomepageComponent },
  { path: 'food/:id', component: FoodpageComponent },
  { path: 'tag/:tag', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
