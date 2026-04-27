import { HttpClient } from '@angular/common/http';
import { Injectable,signal } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse, LoginRequest } from './interface/login';

const API_BASE_URL = 'http://localhost:5281/api';

type AuthInfo = {
  isLoggedIn: boolean;
  token: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
   
  private _isLoggedIn = signal<boolean >(false); 
  isLoggedIn = this._isLoggedIn.asReadonly();
  authInfo: AuthInfo = ({ isLoggedIn: this.isLoggedIn(), token: '' });

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    const loginRequest: LoginRequest = { email, password };
     return this.http.post<LoginResponse>(`${API_BASE_URL}/login`, loginRequest);
  }

  setAuthInfo(token: string) {
    this._isLoggedIn.set(true);    
    this.authInfo = ({ isLoggedIn: true, token });
    localStorage.setItem('authToken', token);
  } 


  
  logout() {
    this._isLoggedIn.set(false);
    this.authInfo = ({ isLoggedIn: this._isLoggedIn(), token: '' });
    localStorage.removeItem('authToken');
    console.log(this._isLoggedIn());
    console.log(this.authInfo);
  }  
  



}
