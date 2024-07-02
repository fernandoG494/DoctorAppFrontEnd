import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Login } from '../interfaces/login';
import { UserService } from '../services/user.service';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  formLogin: FormGroup;
  hidePassword: boolean = true;
  showLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private shareService: SharedService
  ) {
    this.formLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  initSession() {
    this.showLoading = true;

    const request: Login = {
      username: this.formLogin.value.username,
      password: this.formLogin.value.password,
    };

    this.userService.initSession(request).subscribe({
      next: (response) => {
        this.shareService.saveSession(response);
        this.router.navigate(['layout']);
      },
      complete: () => {
        this.showLoading = false;
      },
      error: (error) => {
        this.shareService.showAlert(error.error, 'Error!');
        this.showLoading = false;
      },
    });
  }
}
