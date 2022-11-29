import { TestBed } from '@angular/core/testing';

import { DetailedSearchService } from './detailed-search.service';

describe('DetailedSearchService', () => {
  let service: DetailedSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailedSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
