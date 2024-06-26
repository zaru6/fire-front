import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TopicReply } from './topic-reply.model';

@Injectable({
  providedIn: 'root'
})
export class TopicReplyService {

  private topicRepliesApiUrl = 'http://localhost:8080/api/discussion/topic-replies';
  private replyApiUrl = 'http://localhost:8080/api/discussion/replies';

  constructor(private http: HttpClient) { }

  getTopicReplies(id: number): Observable<TopicReply[]> {
    const token = localStorage.getItem("token");
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token // Add the token here
      })
    };
    return this.http.get<TopicReply[]>(`${this.topicRepliesApiUrl}/${id}`, httpOptions);
  }

  getAllTopicReplies(): Observable<TopicReply[]> {
    const token = localStorage.getItem("token");
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token // Add the token here
      })
    };
    return this.http.get<TopicReply[]>(this.replyApiUrl, httpOptions);
  }

  addTopicReply(topicReply: TopicReply) {
    const token = localStorage.getItem("token");
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token // Add the token here
      })
    };
    return this.http.post(this.replyApiUrl, topicReply, httpOptions);
  }
}
