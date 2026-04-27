import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Plan } from './plan/plan';
import { isAuthenticated } from './auth-guard-guard';
import { isPublicGuard } from './is-public-guard';
import { MyPlans } from './my-plans/my-plans';


// export const routes: Routes = [
//     {   path: '', redirectTo: 'home', pathMatch: 'full' },
//     {   path: 'home', component: Home },
//     {   path: 'login', component: Login },
//     {   path: 'logout', redirectTo: 'login',   },
//     {   path: 'signup', component: Signup},    
//     {   path: 'plan', component: Plan},
//     {   path: 'myplans', component: MyPlans },
// ];



export const routes: Routes = [
    {   path: '', redirectTo: 'home', pathMatch: 'full' },
    {   path: 'signup', component: Signup },
    {   path: 'plan', component: Plan},
    {   path: 'myplans', component: MyPlans },
    {   path: 'login', component: Login },
];
