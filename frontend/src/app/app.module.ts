import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { NgxStarsModule } from 'ngx-stars';
import { SearchComponent } from './components/partials/search/search.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { FoodpageComponent } from './components/foodpage/foodpage.component';
import { TaggerComponent } from './components/partials/tagger/tagger.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    SearchComponent,
    FoodpageComponent,
    TaggerComponent,
    CartPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxStarsModule,
    AutocompleteLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
