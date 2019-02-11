import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  login(emailHtmlElement, passwordHtmlElement) {
    this.authService
    .login(emailHtmlElement.value, passwordHtmlElement.value)
    .subscribe((succesRes) => {
      console.log(succesRes);
      this.router.navigate(["member"]);
    }, (errorRes) => {
      console.log(errorRes);
      emailHtmlElement.value = '';
      passwordHtmlElement.value = '';
    });
  }
}
