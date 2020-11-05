import { TestBed } from '@angular/core/testing';

import { ListaErroService } from './lista-erro-service.service';

describe('ListaErroService', () => {
  let service: ListaErroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaErroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
