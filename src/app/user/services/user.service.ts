import { Injectable } from '@angular/core';
import { enviroment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Login } from '../interfaces/login';
import { Observable } from 'rxjs';
import { Session } from '../interfaces/session';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl: string = enviroment.apiUrl + 'user/';

  constructor(private http: HttpClient) {}

  initSession(request: Login): Observable<Session> {
    return this.http.post<Session>(`${this.baseUrl}login`, request);
  }
}
