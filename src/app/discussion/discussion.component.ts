import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TopicService } from '../topic.service';
import { Topic } from '../topic.model';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrl: './discussion.component.css'
})
export class DiscussionComponent {

  topics: Topic[] = [];

  constructor(private http: HttpClient, private topicService: TopicService) {}

  ngOnInit(): void {
    this.getTopics();
  }

  getTopics(): void {
    this.topicService.getTopics().subscribe(
        (data) => {
          this.topics = data;
        },
        (error) => {
          console.error('Error fetching topics:', error);
        }
      );
  }

  

}
