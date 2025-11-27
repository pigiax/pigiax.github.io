import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Riddle } from './riddle/riddle';

export const routes: Routes = [
    { path: '', component: Login },
    { path: 'riddle', component: Riddle }
];
