import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../../interface/types';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {

  private baseUrl = "http://localhost:8080/api/movie";

  constructor(private http: HttpClient) { }

  token = localStorage.getItem('token');

  createMovie(data: Movie): Observable<any> {

    if (!this.token) {
      return throwError(() => new Error('No authentication token found'));
    }

    const headers = new HttpHeaders({
      'Authorization': this.token,
      'Content-Type': 'application/json' // Optional: To specify that the content is JSON
    });

    return this.http.post(`${this.baseUrl}/create`, data, { headers: headers }).pipe(
      catchError(this.handleError)
    )
  }

  getAllMovie(): Observable<any> {

    if (!this.token) {
      return throwError(() => new Error('No authentication token found'));
    }

    const headers = new HttpHeaders({
      'Authorization': this.token,
      'Content-Type': 'application/json' // Optional: To specify that the content is JSON
    });

    return this.http.get(`${this.baseUrl}/get`, { headers: headers }).pipe(
      catchError(this.handleError)
    )
  }

  getAllMovieForCard(): Observable<any> {
    return this.http.get(`${this.baseUrl}/card-movie`).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => error);
  }

  getMovieByTitle(title: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/get/${title}`).pipe(
      catchError(this.handleError)
    )
  }

}

