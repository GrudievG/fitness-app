import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  error: string;

  ngOnInit() {}

  async loginUser(event: FormGroup) {
    const { email, password } = event.value;
    try {
      await this.authService.loginUser(email, password);
      await this.router.navigate(['/']);
    } catch (e) {
      this.error = e.message;
    }
  }

}
