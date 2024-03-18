import { Routes } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {RegistrationComponent} from "./registration/registration.component";

export const routes: Routes = [
  {
    path:'auth',
    component: AuthComponent
  },
  {
    path: 'auth/sing-up',
    component: RegistrationComponent
  },
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full'
  },
];
