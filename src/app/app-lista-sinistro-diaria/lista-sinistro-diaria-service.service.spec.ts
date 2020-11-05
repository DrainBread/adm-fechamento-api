import { TestBed } from '@angular/core/testing';

import { ListaSinistroDiariaService } from './lista-sinistro-diaria-service.service';

describe('ListaSinistroDiariaService', () => {
  let service: ListaSinistroDiariaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaSinistroDiariaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
