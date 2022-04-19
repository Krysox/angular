import { Component, OnInit } from '@angular/core';
import {CarService} from "../../services/car.service";
import {Car} from "../../models/car";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  cars: Car[] = [];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.fetchAll()
      .subscribe({
        next: cars => {
          this.cars = cars;
        },
        error: err => {
          console.log(err);
        },
        complete: () => {
          console.log("completed");
        }
      });

  }

  deleteCar(id: number) {
    this.carService.delete(id)
      .subscribe({
        next: ok => {
        }
    })
  }

}
