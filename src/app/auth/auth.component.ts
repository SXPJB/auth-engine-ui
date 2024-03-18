import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink, RouterOutlet} from "@angular/router";
import {AuthContainerComponent} from "../auth-container/auth-container.component";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FormsModule,
    RouterOutlet,
    AuthContainerComponent,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  credentials = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    rememberMe: new FormControl(''),

  })

  onSubmit() {
    console.log('Submitting...');

    console.log(this.credentials.value);
  }
}
