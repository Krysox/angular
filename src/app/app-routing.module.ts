import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateCarComponent} from "./components/create-car/create-car.component";
import {CarsComponent} from "./components/cars/cars.component";
import {CarDetailsComponent} from "./components/car-details/car-details.component";

const routes: Routes = [
  {
    path: '',
    component: CarsComponent
  },
  {
    path: 'create-car',
    component: CreateCarComponent
  },
  {
    path: 'car-details/:carId',
    component: CarDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
