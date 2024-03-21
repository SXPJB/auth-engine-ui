import { Component, type OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthContainerComponent } from '../auth-container/auth-container.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RegistrationService } from './registration.service';
import { GenderResponse, HttpResponse } from '../../types/responses';
import { NgClass } from '@angular/common';
import { PasswordValidator } from '../../utils/costumeValidators';
import { UserRequest } from '../../types/requests';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    RouterOutlet,
    AuthContainerComponent,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    NgClass,
  ],
  templateUrl: './registration.component.html',
})
export class RegistrationComponent implements OnInit {
  constructor(
    private readonly registrationService: RegistrationService,
    private router: Router,
  ) {}

  genders: GenderResponse[] | undefined;

  userInfo = new FormGroup(
    {
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      gender: new FormControl('', [Validators.required]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmPassword: new FormControl('', {
        validators: [Validators.required, Validators.minLength(8)],
      }),
    },
    [PasswordValidator],
  );

  onSubmit(): void {
    console.log(this.userInfo.controls.password.errors?.['minlength']);
    if (this.userInfo.invalid) {
      this.userInfo.markAllAsTouched();
      return;
    }

    this.registrationService
      .registerUser(this.userInfo.value as UserRequest)
      .subscribe({
        next: () => {
          this.userInfo.reset();
          this.router.navigate(['/auth']).then(async () => {
            await Swal.fire({
              title: 'Success!',
              text: 'User registered successfully! You will receive an email to confirm your account.',
              icon: 'success',
            });
          });
        },
        error: async ({ error }: HttpErrorResponse) => {
          const dataError: HttpResponse<Error> = error;
          await Swal.fire({
            title: 'Error!',
            text: dataError.data.message,
            icon: 'error',
          });
        },
      });
  }

  ngOnInit(): void {
    this.registrationService.findAllGenders().subscribe((res) => {
      this.genders = res.data.map((g) => ({
        code: g.code,
        display: g.display,
      }));
    });
  }
}
