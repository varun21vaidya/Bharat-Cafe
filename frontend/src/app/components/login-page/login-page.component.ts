import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  loginForm!: FormGroup;
  isSubmitted = false;
  returnUrl='';
  constructor(private formbuilder: FormBuilder, private userService: UserService, private activatedRoute:ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10),
        ],
      ],
    });

    // latest value using snapshot, queryparams is everything after question mark
    this.returnUrl= this.activatedRoute.snapshot.queryParams['returnUrl'];
  }

  //to get formcontrol values easily
  get fc() {
    return this.loginForm.controls;
  }

  submit() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) return;

    this.userService.login({
      email: this.fc['email'].value,
      password: this.fc['password'].value
    }).subscribe(()=>{
      this.router.navigateByUrl(this.returnUrl)
    });
    
  }
}
