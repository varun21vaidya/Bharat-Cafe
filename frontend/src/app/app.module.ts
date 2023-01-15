import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { NgxStarsModule } from 'ngx-stars';
import { SearchComponent } from './components/partials/search/search.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

@NgModule({
  declarations: [AppComponent, HomepageComponent, HeaderComponent, SearchComponent],
  imports: [BrowserModule, AppRoutingModule, NgxStarsModule,AutocompleteLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
