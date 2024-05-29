import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TopicService } from '../topic.service';
import { Topic } from '../topic.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TopicFormComponent } from '../topic-form/topic-form.component';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrl: './discussion.component.css'
})
export class DiscussionComponent {
  @Output() closeButtonClick = new EventEmitter();

  topics: Topic[] = [];
  newTopic: Topic = {
    id: 0,
    title: '',
    description: "",
    createdBy: 0,
    createdAt: new Date,
    updatedAt: new Date
  };

  constructor(private http: HttpClient, private topicService: TopicService, private modalService: NgbModal) { }

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

  openTopicForm(): void {
    const modalRef = this.modalService.open(TopicFormComponent);
    modalRef.componentInstance.closeButtonClick.subscribe(() => {
      modalRef.close();
    });
    modalRef.result.then(
      result => {
        console.log('Closed with:', result);
      },
      reason => {
        console.log('Dismissed', reason);
      }
    );
  }

  closeModal() {
    this.closeButtonClick.emit();
  }
}
