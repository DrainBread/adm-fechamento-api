import { TestBed } from '@angular/core/testing';

import { ContabilizaService } from './contabiliza-service.service';

describe('ContabilizaService', () => {
  let service: ContabilizaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContabilizaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
