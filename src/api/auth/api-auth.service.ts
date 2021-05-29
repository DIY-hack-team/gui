import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { LoginResponseDTO } from './dto/login-response.dto';

@Injectable()
export class ApiAuthService {
  curUser: LoginResponseDTO | null = null;

  constructor(private router: Router, private http: HttpClient) {
    let lcItem = localStorage.getItem('curUser');
    if (lcItem) {
      this.curUser = JSON.parse(lcItem);
    }
  }

  async login(username: string, password: string): Promise<LoginResponseDTO> {
    const value = await this.http
      .post(`${environment.basePath}/auth/login`, {
        username: username,
        password: password,
      })
      .toPromise();
    this.curUser = value as LoginResponseDTO;
    localStorage.setItem('curUser', JSON.stringify(this.curUser));
    return this.curUser;
  }

  async auth(): Promise<Object> {
    return this.http
      .post(`${environment.basePath}/auth`, {})
      .toPromise()
      .catch((err) => {
        this.router.navigateByUrl('/login');
        return err;
      });
  }
}
