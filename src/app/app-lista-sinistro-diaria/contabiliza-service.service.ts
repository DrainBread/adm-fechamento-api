import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContabilizaService {

  constructor() { }

  putDiariaContabil(p_cd_letra_sinistro           : String,
                    p_cd_local_contabil           : Number,
                    p_cd_tipo_bem_segurado        : Number,
                    p_cd_caracteristica_bem_segur : Number,
                    p_cd_ramo                     : Number,
                    p_cd_sinistro                 : Number,
                    p_id_desfazer_contabilizacao  : String){

    //stub
    return '';
  }

}
