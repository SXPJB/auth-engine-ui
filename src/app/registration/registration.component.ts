import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AuthContainerComponent} from "../auth-container/auth-container.component";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    RouterOutlet,
    AuthContainerComponent,
    RouterLink,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './registration.component.html',
})
export class RegistrationComponent {

  userInfo = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    gender: new FormControl(''),
    email: new FormControl(''),
  })

  onSubmit() {
    console.log(this.userInfo.value);
  }
}
