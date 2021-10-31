import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CARS } from './cars';

interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cars: Car[] = CARS;
  car!: FormGroup;

  editCar(car: Car) {
    this.car = new FormGroup({
      id: new FormControl(car.id),
      brand: new FormControl(car.brand),
      model: new FormControl(car.model),
      year: new FormControl(car.year),
    });
  }

  DeleteCar(i: any) {
    this.cars.splice(i, 1);
  }

  save() {
    let index = this.cars.findIndex((car) => car.id === this.car.value.id);
    this.cars[index] = this.car.value;
    this.car.reset()
  }

  cancel() {
    this.car == null;
  }
}
