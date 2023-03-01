import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
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
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InputContainerComponent } from './components/partials/input-container/input-container.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoadingComponent } from './components/partials/loading/loading.component';
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderItemsListComponent } from './components/partials/order-items-list/order-items-list.component';
import { MapComponent } from './components/partials/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    SearchComponent,
    FoodpageComponent,
    TaggerComponent,
    CartPageComponent,
    NotFoundComponent,
    LoginPageComponent,
    InputContainerComponent,
    RegisterPageComponent,
    LoadingComponent,
    CheckoutComponent,
    OrderItemsListComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxStarsModule,
    AutocompleteLibModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(
      {
        timeOut:3000,
        positionClass:'toast-bottom-right',
        newestOnTop:false
      }
    ),
    BrowserAnimationsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:LoadingInterceptor, multi:true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
