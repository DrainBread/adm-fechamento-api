import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppListaErroComponent } from './app-lista-erro.component';
import { ListaErroService } from './lista-erro-service.service';


@NgModule({
  declarations: [
    AppListaErroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppListaErroComponent
  ],
  providers: [
    ListaErroService
  ]
})
export class AppListaErroModule { }
