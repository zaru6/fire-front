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
    const token = this.getToken();
    const headers = new HttpHeaders().append('Authorization', `Bearer ${token}`);
    console.log("LPOGOUTTTT" + token);
    if (token) {
      console.log("LPOGOUTTTT STARTED");
      return this.http.post<any>('http://localhost:8080/auth/logout', {}, { headers })
        .pipe(
          switchMap(() => {
            localStorage.removeItem('token');
            console.log("LPOGOUTTTT SUCCESS AND TOKEN ERASED");
            return of(null);
          })
        );
    } else {
      console.log("LPOGOUTTTT FAIL");
      return of(null);
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