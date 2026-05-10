import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from '../services/jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

   constructor() {}

   readonly router = inject(Router);
   readonly jwtService = inject(JwtService);

  loginData = {
    email: '',
    password: ''
  };
    
  onSubmit() {
    this.jwtService.login(this.loginData).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        this.jwtService.saveToken(response.token); // Save the token
        this.router.navigate(['/home']); // Navigate to home page
      },
      error: (error) => {
        console.error('Login failed:', error);
        alert('Login failed. Please check your credentials and try again.');
      }
    });
  }  

     singup() {
    this.router.navigate(['/singup']);
  }

  
}