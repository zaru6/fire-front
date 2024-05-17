import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private tokenUrl = 'http://localhost:8080/users/me';
  private token: string | undefined;

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string): Observable<string> {
    const credentials = { username, password };
    return this.http.post<{ token: string }>(this.tokenUrl, credentials).pipe(
      map(response => {
        localStorage.setItem('token', response.token);
        return response.token;
      }),
      catchError(error => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  logout(): Observable<any> {
    const token = localStorage.getItem("token") ?? '';
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    };
    if (token) {
      return this.http.post<string>('http://localhost:8080/auth/logout', {}, httpOptions)
        .pipe(
          tap(response => console.log(response)),
          switchMap(() => {
            localStorage.removeItem('token');
            return of(null);
          })
        );
    } else {
      return throwError(() => new Error('No token found.'));
    }
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string {
    return localStorage.getItem('token') ?? '';
  }

  setToken(token: string): void {
    this.token = token;
  }

}