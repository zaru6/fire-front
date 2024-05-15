import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private tokenUrl = 'http://localhost:8080/users/me';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<void> {
    const credentials = { username, password };
    return this.http.post<{ token: string }>(this.tokenUrl, credentials).pipe(
      map(response => {
        localStorage.setItem('token', response.token);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string {
    return localStorage.getItem('token') ?? '';
  }
}