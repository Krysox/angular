import { Component, OnInit } from '@angular/core';
import {Car} from "../../models/car";
import {ActivatedRoute} from "@angular/router";
import {CarDetailsService} from "../../services/car-details.service";

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {

  car?: Car

  constructor(private route: ActivatedRoute, private carDetailsService: CarDetailsService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const carIdFromRoute = Number(routeParams.get('carId'));

    this.carDetailsService.fetchById(carIdFromRoute)
      .subscribe({
        next: car => {
          this.car = car;
        },
        error: err => {
          console.log(err);
        },
        complete: () => {
          console.log("completed");
        }
      })
  }

}
