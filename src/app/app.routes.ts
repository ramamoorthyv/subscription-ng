import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Plan } from './plan/plan';
import { isAuthenticated } from './auth-guard-guard';
import { isPublicGuard } from './is-public-guard';


export const routes: Routes = [
    {   path: '', redirectTo: 'home', pathMatch: 'full' },
    {   path: 'home', component: Home, canActivate: [isAuthenticated] },
    {   path: 'login', component: Login },
    {   path: 'signup', component: Signup},
    {   path: 'plan', component: Plan, canActivate: [isAuthenticated] }
];
