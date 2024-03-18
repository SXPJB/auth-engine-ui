import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AuthContainerComponent} from "../auth-container/auth-container.component";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {RegistrationService} from "./registration.service";
import {GenderResponse} from "../../types/responses";

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
export class RegistrationComponent implements OnInit {

  constructor(private registrationService: RegistrationService) { }

  genders: GenderResponse[] | undefined

  userInfo = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50)
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    gender: new FormControl('', [
      Validators.required
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(50)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
  },)

  onSubmit() {
    console.log(this.userInfo.value);
    if (!this.isPasswordMatch()) {
      console.log("Password does not match")
      return;
    }
  }

  isPasswordMatch() {
    return this.userInfo.controls.password.value === this.userInfo.controls.confirmPassword.value;
  }

  ngOnInit() {
    this.registrationService.findAllGenders()
      .subscribe(res => {
        this.genders = res.data.map(g => ({code: g.code, display: g.display}));
      })
  }

}
