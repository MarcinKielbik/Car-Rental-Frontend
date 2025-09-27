import { Component } from '@angular/core';
import { RentalService } from '../../services/rental.service';
import { CarService } from '../../services/car.service';
import { Rental } from '../../models/rental.model';

@Component({
  selector: 'app-dashboard-user',
  standalone: false,
  templateUrl: './dashboard-user.component.html',
  styleUrl: './dashboard-user.component.css'
})
export class DashboardUserComponent {
  rentals: Rental[] = [];
  userId = 1; // TODO: pobierać z logowania/autoryzacji

  constructor(private rentalService: RentalService) {}

  ngOnInit(): void {
    this.loadUserRentals();
  }

  loadUserRentals(): void {
    this.rentalService.getUserRentals(this.userId).subscribe({
      next: (data) => this.rentals = data,
      error: (err) => console.error('Error fetching rentals:', err)
    });
  }
}
