import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  LoginRequestDto,
  LoginResponseDto,
  RegistrationRequestDto,
} from '../model/user';
import { Path } from '../constant/path.enum';
import { Observable, tap } from 'rxjs';
import { ServiceResponse } from '../model/service-response';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  register(user: RegistrationRequestDto): Observable<any | null> {
    return this.http.post<ServiceResponse>(Path.Register, user);
  }

  login(user: LoginRequestDto): Observable<LoginResponseDto | null> {
    return this.http.post<LoginResponseDto>(Path.Login, user).pipe(
      tap((result) => {
        localStorage.setItem('token', result.token);
        localStorage.setItem('role', result.user.role);
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }
}
