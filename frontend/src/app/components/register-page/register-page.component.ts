import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserRegister } from 'src/app/shared/interfaces/UserRegister';
import { passwordMatchingValidatior } from './validator';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  registerForm!: FormGroup;
  isSubmitted = false;
  returnUrl='';
  constructor(private formbuilder: FormBuilder, private userService: UserService, private activatedRoute:ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10),
        ]],
      confirmPassword: [
        '',
        [
          Validators.required,
        ]],
        address: ['', [Validators.required, Validators.minLength(5)]],
    }, { validators: passwordMatchingValidatior('password', 'confirmPassword') });

    // latest value using snapshot, queryparams is everything after question mark
    this.returnUrl= this.activatedRoute.snapshot.queryParams['returnUrl'];
  }


  //to get formcontrol values easily
  get fc() {
    return this.registerForm.controls;
  };

  submit() {
    this.isSubmitted = true;
    if (this.registerForm.invalid) return;

    const formvalue= this.registerForm.value
    const user: UserRegister={
      name: formvalue.name,
      email: formvalue.email,
      password:formvalue.password,
      confirmPassword: formvalue.confirmPassword,
      address:formvalue.address
    }
    this.userService.register(user).subscribe(()=>{
      this.router.navigateByUrl(this.returnUrl)
    })


  }
}
