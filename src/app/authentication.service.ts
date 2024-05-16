import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private tokenUrl = 'http://localhost:8080/users/me';

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
    console.log("LPOGOUTTTT" + token);
    if (token) {
      return this.http.post('http://localhost:8080/auth/logout', {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).pipe(
        tap(() => {
          localStorage.removeItem('token');
        })
      );
    } else {
      return of(null);
    }
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string {
    return localStorage.getItem('token') ?? '';
  }
}