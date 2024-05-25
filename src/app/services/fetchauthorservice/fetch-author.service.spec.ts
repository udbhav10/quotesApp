import { TestBed } from '@angular/core/testing';

import { FetchAuthorService } from './fetch-author.service';

describe('FetchAuthorService', () => {
  let service: FetchAuthorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchAuthorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
