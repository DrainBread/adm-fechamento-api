import { TestBed } from '@angular/core/testing';

import { SalvarAlteracoesService } from './salvar-alteracoes-service.service';

describe('SalvarAlteracoesService', () => {
  let service: SalvarAlteracoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalvarAlteracoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
