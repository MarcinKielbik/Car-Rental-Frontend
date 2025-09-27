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

  // ADMIN
  getAllRentals(): Observable<Rental[]> {
    return this.http.get<Rental[]>(this.apiUrl);
  }

  // ADMIN + USER
  getRentalById(id: number): Observable<Rental> {
    return this.http.get<Rental>(`${this.apiUrl}/${id}`);
  }

  // USER
  getUserRentals(userId: number): Observable<Rental[]> {
    return this.http.get<Rental[]>(`${this.apiUrl}/user/${userId}`);
  }

  // USER
  createRental(rental: Partial<Rental>): Observable<Rental> {
    return this.http.post<Rental>(this.apiUrl, rental);
  }

  // ADMIN
  updateRental(id: number, rental: Partial<Rental>): Observable<Rental> {
    return this.http.put<Rental>(`${this.apiUrl}/${id}`, rental);
  }

  // ADMIN
  deleteRental(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
