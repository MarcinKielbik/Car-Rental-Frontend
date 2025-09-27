import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  register(user: Partial<User>): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/register`, user);
  }

  login(credentials: { email: string; password: string }): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/login`, credentials).pipe(
      tap(user => {
        localStorage.setItem('user', JSON.stringify(user));
      })
    );
  }

  getCurrentUser(): any {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
}

isLoggedIn(): boolean {
  return !!localStorage.getItem('user');
}

logout(): void {
  localStorage.removeItem('user');
}

}
