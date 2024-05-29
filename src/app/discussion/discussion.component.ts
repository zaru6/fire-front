import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DiscussionService } from '../discussion.service';
import { Topic } from '../topic.model';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrl: './discussion.component.css'
})
export class DiscussionComponent {

  topics: Topic[] = [];

  constructor(private http: HttpClient, private discussionService: DiscussionService) {}

  ngOnInit(): void {
    this.getTopics();
  }

  getTopics(): void {
    this.discussionService.getTopics().subscribe(
        (data) => {
          this.topics = data;
        },
        (error) => {
          console.error('Error fetching topics:', error);
        }
      );
  }

  

}
