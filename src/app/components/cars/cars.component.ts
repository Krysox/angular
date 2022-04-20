import {Component, Input, OnInit} from '@angular/core';
import {CarService} from "../../services/car.service";
import {Car} from "../../models/car";
import { Router } from "@angular/router"

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  @Input()
  car!:Car;

  constructor(private carService: CarService, private router: Router) { }

  ngOnInit(): void {
  }

  deleteCar(id: number) {
    this.carService.delete(id)
      .subscribe({
        next: ok => {
        },
        error : err => {
          console.log(err)
        },
        complete:() => {
          this.router.navigate(['/']);
        }
    })
  }

}
