import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { DialogModel, DialogComponent } from '../dialog/dialog.component'
import { MatDialog } from '@angular/material/dialog';

import 'brace';
import 'brace/mode/sql';
import 'brace/mode/html';

import { InjetaSqlService } from './injeta-sql-service.service';

@Component({
  selector: 'app-injecao-sql',
  templateUrl: './app-injecao-sql.component.html',
  styleUrls: ['./app-injecao-sql.component.css']
})
export class AppInjecaoSqlComponent implements OnInit {

  @ViewChild('editor') editor;

  codigo  : string;
  output  : any = {pMens:'',pErr:''};

  constructor(private service : InjetaSqlService, private dialog : MatDialog) {
  }

  ngAfterViewInit() {

    this.editor.getEditor().setOptions({
      showLineNumbers: true,
      tabSize: 8
    });

    this.editor.mode = "sql";

    this.editor.getEditor().commands.addCommand({
      name: "showOtherCompletions",
      bindKey: "Ctrl-.",
      exec: function (editor) {
      }
    })
  }

  preparaComando(){
    this.codigo = this.editor.value;
  }

  async enviaComando(cmd : String){
    if(await this.confirmar("Realizar commit do comando?","Enviar")){
      //await
      this.output = this.service.executaComando(cmd)[0];
    }    
  }

  async confirmar(msg : string, ttl : string) : Promise<boolean>{
    let mensagem : string = msg;
    let dadosDialogo : DialogModel = new DialogModel(ttl, mensagem);

    let dialogRef : any = this.dialog.open(DialogComponent, {
      width: "400px",
      data: dadosDialogo
    });
    
    return await dialogRef.afterClosed().toPromise();
  }

  ngOnInit(): void {
  }
}
