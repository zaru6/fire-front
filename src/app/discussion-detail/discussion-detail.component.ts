import { Component } from '@angular/core';
import { Topic } from '../topic.model';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-discussion-detail',
  templateUrl: './discussion-detail.component.html',
  styleUrl: './discussion-detail.component.css'
})
export class DiscussionDetailComponent {

  topic: Topic | undefined;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchTopic(id);
    }
  }

  fetchTopic(id: string): void {
    this.http.get<Topic>(`http://localhost:4200/api/discussion/topic-replies/${id}`)
      .subscribe(
        (data) => {
          this.topic = data;
        },
        (error) => {
          console.error('Error fetching topic:', error);
        }
      );
  }
}
