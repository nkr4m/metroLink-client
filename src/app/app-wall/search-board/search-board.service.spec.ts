import { TestBed } from '@angular/core/testing';

import { SearchBoardService } from './search-board.service';

describe('SearchBoardService', () => {
  let service: SearchBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
