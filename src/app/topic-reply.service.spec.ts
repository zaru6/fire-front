import { TestBed } from '@angular/core/testing';

import { TopicReplyService } from './topic-reply.service';

describe('TopicReplyService', () => {
  let service: TopicReplyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopicReplyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
