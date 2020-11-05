import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

import { DialogModel, DialogComponent } from '../dialog/dialog.component'
import { MatDialog } from '@angular/material/dialog';

import { ListaSinistroDiariaService } from './lista-sinistro-diaria-service.service';
import { ContabilizaService } from './contabiliza-service.service';
import { SalvarAlteracoesService } from './salvar-alteracoes-service.service';


@Component({
  selector: 'app-lista-sinistro-diaria',
  templateUrl: './app-lista-sinistro-diaria.component.html',
  styleUrls: ['./app-lista-sinistro-diaria.component.css'],
  
})
export class AppListaSinistroDiariaComponent implements OnInit {
  
  lstTipoErro : any[] = [
    {value: 'ACSELX'},
    {value: 'BASE'},
    {value: 'CIR'},
    {value: 'CONTABIL'},
    {value: 'NÃO INFORMADO'},
    {value: 'ONLINE'},
    {value: 'REGRA'}
  ];

  lstSituacao : any[] = [
    {value: 'AGUARDANDO CIR'},
    {value: 'AGUARDANDO USUÁRIO'},
    {value: 'AGUARDANDO PAGTO'},
    {value: 'CONTABILIZADO'},
    {value: 'VERIFICANDO'},
    {value: 'AGUARDANDO ACSELX'}
  ];

  lstAnalista : any[] = [
    {value: 'FISCH'},
    {value: 'LEO'},
    {value: 'R. ABAMBRES'},
    {value: 'MARCIO'}
  ];
  
  lstSinisDiaria : any[] = [];

  indVisivel : any[] = [];

  animExpandir : string;

  paginacao : number = 0;

  constructor(private listaSinistroDiariaService : ListaSinistroDiariaService, 
              private contabilizaService : ContabilizaService,
              private salvarAlteracoesService : SalvarAlteracoesService,
              private dialog : MatDialog) {
    this.animExpandir = 'close';
  }

  expandirElemento(index : number){
    this.animExpandir = (this.animExpandir == 'open') ? 'close' : 'open';
  }

  refresh(){
    window.location.reload();
  }

  carregarMais(){
    this.lstSinisDiaria.concat(this.listaSinistroDiariaService.getLista(this.paginacao++));
  }
  
  exibeSalvar(index : Number){
    if(this.indVisivel.indexOf(index) == -1){
      this.indVisivel.push(index);
    }
  }
  escondeSalvar(index : number){
    if(this.indVisivel.indexOf(index) > -1){
      this.indVisivel.splice(this.indVisivel.indexOf(index),1);
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

  async salvar(sinistro : String, index : number){
    if(await this.confirmar("Deseja salvar as alterações no Sinistro " + sinistro + " ?","Salvar")){
      //await serviço update
      this.salvarAlteracoesService.putSalvarAlteracao();
      this.escondeSalvar(index);
    }
  }

  async contabilizar( p_cd_letra_sinistro           : String,
                      p_cd_local_contabil           : Number,
                      p_cd_tipo_bem_segurado        : Number,
                      p_cd_caracteristica_bem_segur : Number,
                      p_cd_ramo                     : Number,
                      p_cd_sinistro                 : Number){
    
    if(await this.confirmar("Confirmar contabilização? Alterações não salvas serão perdidas.","Contabilizar")){

      console.log("confirmou");

      let p_id_desfazer_contabilizacao  : String;

      if(await this.confirmar("Deseja desfazer a contabilização?",
                              p_cd_letra_sinistro        + "-" + 
                              p_cd_local_contabil        + "-" +
                              p_cd_ramo                  + "-" +
                              p_cd_sinistro)){
        p_id_desfazer_contabilizacao = 'S'  ;
      }else{
        p_id_desfazer_contabilizacao = 'N'  ;
      }

      //await
      this.contabilizaService.putDiariaContabil(p_cd_letra_sinistro           ,
                                                p_cd_local_contabil           ,
                                                p_cd_tipo_bem_segurado        ,
                                                p_cd_caracteristica_bem_segur ,
                                                p_cd_ramo                     ,
                                                p_cd_sinistro                 ,
                                                p_id_desfazer_contabilizacao);

      this.refresh();
    }else{
      console.log("cancelou");
    }
  }

  ngOnInit(){
    this.lstSinisDiaria = (this.listaSinistroDiariaService.getLista(this.paginacao++));
  }

}
