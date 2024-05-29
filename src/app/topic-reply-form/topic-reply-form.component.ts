import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TopicReplyService } from '../topic-reply.service';
import { TopicReply } from '../topic-reply.model';
import { TopicService } from '../topic.service';
import { Topic } from '../topic.model';
import { ModelService } from '../model.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topic-reply-form',
  templateUrl: './topic-reply-form.component.html',
  styleUrl: './topic-reply-form.component.css'
})
export class TopicReplyFormComponent {

  @Input()
  topic!: Topic; // Input property to receive the product

  @Output() closeButtonClick = new EventEmitter();
  topicReply: TopicReply = {
    id: 0,
    replyText: '',
    topicId: 0,
    replyOrder: 0,
    createdBy: 0,
    createdAt: new Date,
    updatedAt: new Date
  };
  productMessage: string = '';

  ngOnInit(): void {
    this.topicReply.topicId = this.topic.id;
  }

  constructor(
    private topicService: TopicService, 
    private topicReplyService: TopicReplyService, 
    private modelService: ModelService, 
    private router: Router) { }

  addTopicReply(topicReply: TopicReply) {
    if (topicReply.replyText === '') {
      console.log('Topic title is required');
      return;
    }
    console.log("SAVING REPLYY");
    this.topicReplyService.addTopicReply(topicReply)
      .subscribe(response => {
        this.productMessage = 'Object insertion successful';
        //this.router.navigate(['/products']);
      }, error => {
        this.productMessage = 'Object insertion failed';
      });
    location.reload(); // Refresh the page
  }

  closeModal() {
    this.closeButtonClick.emit();
  }

}
