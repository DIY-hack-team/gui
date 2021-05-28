import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ApiAuthService } from 'src/api/auth/api-auth.service';
import { LoginResponseDTO } from 'src/api/auth/dto/login-response.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  public username: string = '';
  public password: string = '';
  public failed: boolean = false;

  constructor(private router: Router, private apiAuth: ApiAuthService) {}

  login() {
    this.failed = false;
    this.apiAuth
      .login(this.username, this.password)
      .then((res: LoginResponseDTO) => {
        console.log('login', res);
        this.router.navigateByUrl('/');
      })
      .catch((error) => {
        console.log(error);
        this.failed = true;
      });
  }
}
