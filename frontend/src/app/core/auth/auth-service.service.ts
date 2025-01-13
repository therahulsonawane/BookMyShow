import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserLogin, UserRegistration } from '../../interface/types';

@Injectable({
  providedIn: 'root'
})


export class AuthServiceService {
  private baseUrl = "http://localhost:8080/api";

  constructor(private http: HttpClient) {}

  login(data: UserLogin): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, data).pipe(
      catchError(this.handleError)
    );
  }

  register(data: UserRegistration

  ): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/register`, data).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => error);
  }
}
