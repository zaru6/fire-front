import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Topic } from './topic.model';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  private discussionApiUrl = 'http://localhost:8080/api/discussion/topics';

  constructor(private http: HttpClient) { }

  getTopics(): Observable<Topic[]> {
    const token = localStorage.getItem("token");
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token // Add the token here
      })
    };
    return this.http.get<Topic[]>(this.discussionApiUrl, httpOptions);
  }

  getTopic(id: number): Observable<Topic> {
    const token = localStorage.getItem("token");
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token // Add the token here
      })
    };
    return this.http.get<Topic>(`${this.discussionApiUrl}/${id}`, httpOptions);
  }

}
