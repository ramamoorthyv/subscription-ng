import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse, LoginRequest } from './interface/login';

const API_BASE_URL = 'http://localhost:5281/api';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<LoginResponse> {
    const loginRequest: LoginRequest = { email, password };
    return this.http.post<LoginResponse>(`${API_BASE_URL}/login`, loginRequest);
  }
}
