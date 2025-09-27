import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Rental } from '../models/rental.model';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  private apiUrl = 'http://localhost:8080/api/rentals';

  constructor(private http: HttpClient) {}

  getUserRentals(userId: number): Observable<Rental[]> {
    return this.http.get<Rental[]>(`${this.apiUrl}/user/${userId}`);
  }

  createRental(rental: Partial<Rental>): Observable<Rental> {
    return this.http.post<Rental>(this.apiUrl, rental);
  }
}
