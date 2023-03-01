import { AbstractControl } from '@angular/forms';

export const passwordMatchingValidatior = (
  passwordName: string,
  confirmPasswordName: string
) => {
  const validator = (form: AbstractControl) => {
    const passwordControl = form.get(passwordName);
    const confirmPasswordControl = form.get(confirmPasswordName);
    console.log(passwordControl, confirmPasswordControl);
    if (!passwordControl || !confirmPasswordControl) return;
    if (passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ notMatch: true });
      console.log('confirm password error');
    } else {
      const errors = confirmPasswordControl.errors;
      if (!errors) return;
      delete errors['notMatch'];
      confirmPasswordControl.setErrors(errors);
    }
    return validator;
  };
};
