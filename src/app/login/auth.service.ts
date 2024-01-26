import { Injectable } from '@angular/core';
import {map, Observable, of} from 'rxjs';
import { delay } from 'rxjs/operators';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Users} from "../users/users";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiBaseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  // login(loginData: Users): Observable<Users> {
  //   const params = new HttpParams()
  //     .set('username', loginData.userName.toString())
  //     .set('password', loginData.password.toString());
  //
  //   return this.http.get<Users>(`${this.apiBaseUrl}/users/auth`, {params});
  // }
  // login(loginData: Users): Observable<Users> {
  //   return this.http.post<Users>(`${this.apiBaseUrl}/users/auth`, loginData);
  // }

  login(loginData: Users): Observable<Users> {
    return this.http.post<any>(`${this.apiBaseUrl}/users/auth`, loginData)
      .pipe(
        map(response => response.user as Users)
      );
  }

  // login(loginData: { userName: string, password: string }): Observable<Users> {
  //   return this.http.post<Users>(`${this.apiBaseUrl}/users/auth`, loginData);
  // }


  //
  // login(loginData: Users): Observable<Users> {
  //   return this.http.post<Users>(`${this.apiBaseUrl}/users/auth`, loginData);
  // }
}
