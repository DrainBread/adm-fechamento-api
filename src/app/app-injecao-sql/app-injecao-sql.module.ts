import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AceEditorModule } from 'ng2-ace-editor';

import { AppInjecaoSqlComponent } from './app-injecao-sql.component';
import { InjetaSqlService } from './injeta-sql-service.service';

@NgModule({
  declarations: [
    AppInjecaoSqlComponent
  ],
  imports: [
    CommonModule,
    AceEditorModule
  ],
  exports: [
    AppInjecaoSqlComponent
  ],
  providers: [
    InjetaSqlService
  ]
})
export class AppInjecaoSqlModule { }
