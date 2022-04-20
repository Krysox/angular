import { Component, OnInit } from '@angular/core';
import {CarService} from "../../services/car.service";
import {Car} from "../../models/car";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  cars : Car[] = [];
  sortByPrice: string = "ASC";

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.fetchAll()
      .subscribe({
        next: cars => {
          this.cars = cars;
          console.log(cars)
        },
        error: err => {
          console.log(err);
        },
        complete: () => {
          console.log("completed");
        }
      });
  }

  sortOrder() {
    this.sortByPrice = this.sortByPrice === "ASC" ? "DESC" : "ASC";
  }

}
