import { inject, Injectable } from '@angular/core';
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

  getPlans(): Observable<Plan[]> {
    return this.http.get<Plan[]>(`${API_BASE_URL}/plans`);
  }
}