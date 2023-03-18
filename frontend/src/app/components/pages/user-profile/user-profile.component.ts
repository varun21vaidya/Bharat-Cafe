import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserRegister } from 'src/app/shared/interfaces/UserRegister';
import { UserUpdate } from 'src/app/shared/interfaces/UserUpdate';
import { PasswordsMatchValidator } from 'src/app/shared/validators/password_match_validator';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  upadateForm!:FormGroup;
  isSubmitted = false;

  returnUrl = '';
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.upadateForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.minLength(10)]]
    });

    this.returnUrl= this.activatedRoute.snapshot.queryParams['returnUrl'];
  }

  get fc() {
    return this.upadateForm.controls;
  }

  submit(){
    this.isSubmitted = true;
    if(this.upadateForm.invalid) return;

    const fv= this.upadateForm.value;
    const user :UserUpdate = {
      name: fv.name,
      email: fv.email,
      address: fv.address
    };

    this.userService.update(user).subscribe(_ => {
      this.router.navigateByUrl(this.returnUrl);
    })
  }
}
