//
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
//
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//
import { AceEditorModule } from 'ng2-ace-editor';
//
import { RouterModule } from '@angular/router';
//
import { HttpClientModule } from '@angular/common/http';
//
import { AppComponent } from './app.component';
import { AppListaSinistroDiariaComponent } from './app-lista-sinistro-diaria/app-lista-sinistro-diaria.component'
import { AppListaErroComponent } from './app-lista-erro/app-lista-erro.component';
import { AppInjecaoSqlComponent } from './app-injecao-sql/app-injecao-sql.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AppListaErroComponent,
    AppListaSinistroDiariaComponent,
    AppInjecaoSqlComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDialogModule,
    AceEditorModule,
    RouterModule.forRoot([
      {path: '', component: AppListaSinistroDiariaComponent},
      {path: 'comandos', component: AppInjecaoSqlComponent},
    ])
  ],
  entryComponents: [
    DialogComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
