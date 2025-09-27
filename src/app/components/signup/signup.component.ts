import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
firstName = '';
  lastName = '';
  email = '';
  password = '';
  message = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
  const user = {
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    password: this.password
  };

  this.authService.register(user).subscribe({
    next: () => {
      this.message = 'Konto utworzone! Możesz się zalogować';
      this.router.navigate(['/login']);
    },
    error: () => this.message = 'Błąd rejestracji'
  });
}

}
