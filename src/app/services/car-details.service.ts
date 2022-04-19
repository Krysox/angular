import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Car} from "../models/car";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CarDetailsService {

  private BASE_URL = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  fetchById(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.BASE_URL}/cars/${id}`);
  }
}
