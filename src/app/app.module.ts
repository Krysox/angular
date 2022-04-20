import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarsComponent } from './components/cars/cars.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateCarComponent } from './components/create-car/create-car.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SortByPricePipe } from './pipes/sort-by-price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarsComponent,
    CreateCarComponent,
    CarDetailsComponent,
    HomepageComponent,
    SortByPricePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
