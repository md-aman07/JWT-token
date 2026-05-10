import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  private baseUrl = 'http://localhost:5000/api/users';

  constructor(private http: HttpClient) {}

  // ✅ Signup API
  signup(data: any): Observable<any> {
    console.log('Signup Data in Service:', data);
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  // ✅ Login API
  login(data: any): Observable<any> {
    console.log('Login Data in Service:', data);
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  // ✅ Save token
  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  // ✅ Get token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // ✅ Logout
  logout() {
    localStorage.removeItem('token');
  }

  // ✅ Check login
  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}