import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "../models/car";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private httpOptions =  {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
  };

  private BASE_URL = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  fetchAll(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.BASE_URL}/cars`);
  }
  create(car: Car): Observable<Car[]> {
    return this.http.post<Car[]>(`${this.BASE_URL}/cars`, car, this.httpOptions);
  }
  delete(id: number): Observable<Car> {
    return this.http.delete<Car>(`${this.BASE_URL}/cars/${id}`, this.httpOptions)
  }
}
