import { Component } from '@angular/core';
import { RentalService } from '../../services/rental.service';
import { Rental } from '../../models/rental.model';

@Component({
  selector: 'app-dashboard-admin',
  standalone: false,
  templateUrl: './dashboard-admin.component.html',
  styleUrl: './dashboard-admin.component.css'
})
export class DashboardAdminComponent {
    rentals: Rental[] = [];

  constructor(private rentalService: RentalService) {}

  ngOnInit(): void {
    this.loadAllRentals();
  }

  loadAllRentals(): void {
    this.rentalService.getAllRentals().subscribe({
      next: (data) => this.rentals = data,
      error: (err) => console.error('Error fetching rentals:', err)
    });
  }

  deleteRental(id: number): void {
    this.rentalService.deleteRental(id).subscribe(() => {
      this.rentals = this.rentals.filter(r => r.id !== id);
    });
  }
}
