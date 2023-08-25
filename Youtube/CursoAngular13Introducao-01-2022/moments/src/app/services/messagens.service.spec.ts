import { TestBed } from '@angular/core/testing';

import { MessagensService } from './messagens.service';

describe('MessagensService', () => {
  let service: MessagensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
