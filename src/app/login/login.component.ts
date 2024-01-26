import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import {AuthService} from "./auth.service";
import {Users} from "../users/users";
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  userName: string = '';
  password: string = '';

  constructor(private authService: AuthService,private router: Router) {}

  onSubmit(): void {
    const loginData = {
      userName: this.userName,
      password: this.password,
      id: ''
    };

    console.log("login data :", loginData);

    this.authService.login(loginData).subscribe(
      (user) => {
        console.log("successful");

        localStorage.setItem('userId', user.id);
        const loggedInUserId = user.id;
        console.log("Logged-in User ID:", loggedInUserId);
        console.log("user:", user);
        this.router.navigate(['/']);
      },
      (error) => {
        console.log("fail");
      }
    );
  }


}


