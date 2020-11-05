import { TestBed } from '@angular/core/testing';

import { InjetaSqlService } from './injeta-sql-service.service';

describe('InjetaSqlServiceService', () => {
  let service: InjetaSqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InjetaSqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
