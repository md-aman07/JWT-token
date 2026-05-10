import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from '../services/jwt.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
 styleUrls: ['./sing-up.component.scss']
})
export class SingUPComponent {

  signupData = {
    name: '',
    email: '',
    password: ''
  };

  constructor() {}

  readonly router = inject(Router);
  readonly jwtService = inject(JwtService);

  onSubmit() {

    console.log(this.signupData);

    this.jwtService.signup(this.signupData).subscribe({
      next: (response: any) => {
        console.log('Signup successful:', response);

        alert('Signup successful! Please login with your credentials.');

        this.router.navigate(['/login']);
      },

      error: (error: any) => {
        console.error('Signup failed:', error);

        alert('Signup failed. Please try again.');
      }
    });
  }
}