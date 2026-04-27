import { inject, Injectable,signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse, LoginRequest } from './interface/login';
import { Plan } from './interface/plan';

const API_BASE_URL = 'http://localhost:5281/api';

@Injectable({
  providedIn: 'root',
})
export class PlanService {
  private http = inject(HttpClient); 
  myplans = signal<Plan[]>([]); 

  getPlans(): Observable<Plan[]> {
    return this.http.get<Plan[]>(`${API_BASE_URL}/plans`);
  }
  ListPlans(): typeof this.myplans {
    this.http.get<Plan[]>(`${API_BASE_URL}/list-plans`).subscribe(plans => {
      this.myplans.set(plans);
    });
    return this.myplans;
  }
}