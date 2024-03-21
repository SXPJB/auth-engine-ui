import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export const PasswordValidator: ValidatorFn = (control: AbstractControl) => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  const errors: ValidationErrors = confirmPassword?.errors || {};
  if (password?.value !== confirmPassword?.value) {
    confirmPassword?.setErrors({ passwordMismatch: true });
  } else {
    if (!errors) {
      confirmPassword?.setErrors(null);
    }
  }
  return null;
};
