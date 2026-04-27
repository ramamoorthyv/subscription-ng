import { Component } from '@angular/core';
import { AuthApiService } from '../auth-api-service';
import { Router, RouterLink } from '@angular/router';
import { signal, inject, Injector, effect } from '@angular/core'; 

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink], // <--- 2. Register it here!
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {

  protected readonly title = signal('subscription');
  auth = inject(AuthApiService);    
  router = inject(Router);
  isAuthenticated = this.auth.isLoggedIn;
  
  handleLogout(event: Event) {
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['login']); 
  }

}
