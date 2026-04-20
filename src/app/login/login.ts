import { Component } from '@angular/core';
import { AuthApiService } from '../auth-api-service';
import { FormsModule } from '@angular/forms';
import { LoginResponse } from '../interface/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email: string = 'Rama3@gmail.com';
  password: string = 'Tagse@#$';

  constructor(private authApiService: AuthApiService, private router: Router) {}

  doLogin() {
    this.authApiService.login(this.email, this.password).subscribe({
      next: (response: LoginResponse) => {
        console.log('Login successful:', response);
        localStorage.setItem('authToken', response.token || '');  
        this.router.navigate(['/user']);      
      },
      error: (err) => {
        console.error('Error during login:', err);
      }
    });
  }

}
