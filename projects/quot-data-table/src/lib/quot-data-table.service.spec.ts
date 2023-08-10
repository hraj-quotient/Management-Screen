import { TestBed } from '@angular/core/testing';

import { QuotDataTableService } from './quot-data-table.service';

describe('QuotDataTableService', () => {
  let service: QuotDataTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuotDataTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
