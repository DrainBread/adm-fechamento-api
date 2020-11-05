import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaErroService {

  constructor() { }

  getListaErro(
              p_cd_letra_sinistro   : String,
              p_cd_local_contabil   : Number,
              p_cd_ramo             : Number,
              p_cd_sinistro         : Number
              ){
    //stub
    return ([{"dsCompleto":"Sin; V1021000875;Rec;1;Sav;;Diferença entre a Reserva de Indenização Acsel-X e Plataforma;Plataforma;.55;ADM.Acsel/X;0;JUR.Acsel/X;0;"}]);
  }
}
