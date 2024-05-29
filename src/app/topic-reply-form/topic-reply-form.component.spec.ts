import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicReplyFormComponent } from './topic-reply-form.component';

describe('TopicReplyFormComponent', () => {
  let component: TopicReplyFormComponent;
  let fixture: ComponentFixture<TopicReplyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopicReplyFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopicReplyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
