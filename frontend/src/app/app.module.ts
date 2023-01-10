import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { NgxStarsModule } from 'ngx-stars';
@NgModule({
  declarations: [AppComponent, HomepageComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, NgxStarsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
