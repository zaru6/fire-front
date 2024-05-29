import { Component } from '@angular/core';
import { Topic } from '../topic.model';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TopicReply } from '../topic-reply.model';
import { TopicService } from '../topic.service';
import { TopicReplyService } from '../topic-reply.service';

@Component({
  selector: 'app-discussion-detail',
  templateUrl: './discussion-detail.component.html',
  styleUrl: './discussion-detail.component.css'
})
export class DiscussionDetailComponent {

  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient,
    private topicService: TopicService,
    private topicReplyService: TopicReplyService) { }

  topic: Topic | undefined;
  replies: TopicReply[] = [];

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.fetchTopic(id);
      this.fetchReplies(id);
    }
  }

  fetchTopic(id: number): void {
    this.topicService.getTopic(id).subscribe(
      (data) => {
        this.topic = data;
      },
      (error) => {
        console.error('Error fetching topics:', error);
      }
    );
  }

  fetchReplies(topicId: number): void {
    this.topicReplyService.getTopicReplies(topicId)
      .subscribe(
        (data) => {
          this.replies = data;
        },
        (error) => {
          console.error('Error fetching replies:', error);
        }
      );
  }



}
