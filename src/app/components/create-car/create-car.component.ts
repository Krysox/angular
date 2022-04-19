import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Car} from "../../models/car";
import {CarService} from "../../services/car.service";

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.scss']
})
export class CreateCarComponent implements OnInit {

  submitted: boolean = false;
  car?: Car;

  createCarForm: FormGroup = this.formBuilder.group({
    title: [this.car?.title, [Validators.required]],
    address: [this.car?.address, [Validators.required]],
    brand: [this.car?.brand, [Validators.required]],
    model: [this.car?.model, [Validators.required]],
    model_year: [this.car?.model_year, [Validators.required]],
    issuance: [this.car?.issuance, [Validators.required]],
    mileage: [this.car?.mileage, [Validators.required]],
    fuel: [this.car?.fuel, [Validators.required]],
    color: [this.car?.color, [Validators.required]],
    numbers_doors: [this.car?.numbers_doors, [Validators.required]],
    horse_power: [this.car?.horse_power, [Validators.required]],
    price: [this.car?.price, [Validators.required]],
    pictures: [this.car?.pictures, [Validators.required]],
    sold: [this.car?.sold, [Validators.required]],
  })

  constructor(private formBuilder: FormBuilder, private carService: CarService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;

    if (this.createCarForm.invalid) {
      return;
    }
    let car: Car = {
      title: this.createCarForm.value.title,
      address: this.createCarForm.value.address,
      brand: this.createCarForm.value.brand,
      model: this.createCarForm.value.model,
      model_year: this.createCarForm.value.model_year,
      issuance: this.createCarForm.value.issuance,
      mileage: this.createCarForm.value.mileage,
      fuel: this.createCarForm.value.fuel,
      color: this.createCarForm.value.color,
      numbers_doors: this.createCarForm.value.numbers_doors,
      horse_power: this.createCarForm.value.horse_power,
      price: this.createCarForm.value.price,
      pictures: this.createCarForm.value.pictures,
      sold: this.createCarForm.value.sold,
    }

    this.carService.create(car)
      .subscribe({
        next: ok => {}
      })
  }

  get f() {
    return this.createCarForm.controls;
  }

}
