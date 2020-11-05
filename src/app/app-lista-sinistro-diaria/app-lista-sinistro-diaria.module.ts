import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppListaSinistroDiariaComponent } from './app-lista-sinistro-diaria.component';
import { ListaSinistroDiariaService } from './lista-sinistro-diaria-service.service';
import { ContabilizaService } from './contabiliza-service.service';
import { SalvarAlteracoesService } from './salvar-alteracoes-service.service';

@NgModule({
  declarations: [
    AppListaSinistroDiariaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  exports: [
    AppListaSinistroDiariaComponent
  ],
  providers: [
    ListaSinistroDiariaService,
    ContabilizaService,
    SalvarAlteracoesService
  ]
})
export class AppListaSinistroDiariaModule { 
  
}
