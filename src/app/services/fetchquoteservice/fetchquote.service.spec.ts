import { TestBed } from '@angular/core/testing';

import { FetchquoteService } from './fetchquote.service';

describe('FetchquoteService', () => {
  let service: FetchquoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchquoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
