import { Component, EventEmitter, Output } from '@angular/core';
import { TopicService } from '../topic.service';
import { ModelService } from '../model.service';
import { Router } from '@angular/router';
import { Topic } from '../topic.model';

@Component({
  selector: 'app-topic-form',
  templateUrl: './topic-form.component.html',
  styleUrl: './topic-form.component.css'
})
export class TopicFormComponent {

  @Output() closeButtonClick = new EventEmitter();
  topic: Topic = {
    id: 0,
    title: '',
    description: '',
    createdBy: 0,
    createdAt: new Date,
    updatedAt: new Date
  };
  productMessage: string = '';

  constructor(
    private topicService: TopicService, 
    private modelService: ModelService, 
    private router: Router) { }

  addTopic(topic: Topic) {
    if (topic.title === '') {
      console.log('Topic title is required');
      return;
    }
    this.topicService.addTopic(topic)
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
