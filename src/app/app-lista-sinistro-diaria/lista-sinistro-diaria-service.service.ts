import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaSinistroDiariaService {

  constructor() { }

  getLista(pagina : number){
    
    //stub
    return (
      [
        {
          "dt_inclusao": "11/03/2013",
          "cd_letra_sinistro": "B",
          "cd_local_contabil": 20,
          "cd_tipo_bem_segurado": 1,
          "cd_caracteristica_bem_segur": 1,
          "cd_ramo": 31,
          "cd_sinistro": 10390,
          "ds_tipo_erro": "ACSELX",
          "ds_detalhe": "erro",
          "nm_analista_ti": "MARCIO",
          "ds_situacao": "VERIFICANDO"
        },
        {
          "dt_inclusao": "11/03/2013",
          "cd_letra_sinistro": "B",
          "cd_local_contabil": 10,
          "cd_tipo_bem_segurado": 1,
          "cd_caracteristica_bem_segur": 2,
          "cd_ramo": 53,
          "cd_sinistro": 11476,
          "ds_tipo_erro": null,
          "ds_detalhe": null,
          "nm_analista_ti": null,
          "ds_situacao": null
        },
        {
          "dt_inclusao": "11/03/2013",
          "cd_letra_sinistro": "B",
          "cd_local_contabil": 10,
          "cd_tipo_bem_segurado": 1,
          "cd_caracteristica_bem_segur": 2,
          "cd_ramo": 53,
          "cd_sinistro": 11139,
          "ds_tipo_erro": null,
          "ds_detalhe": null,
          "nm_analista_ti": null,
          "ds_situacao": null
        },
        {
          "dt_inclusao": "11/03/2013",
          "cd_letra_sinistro": "A",
          "cd_local_contabil": 10,
          "cd_tipo_bem_segurado": 1,
          "cd_caracteristica_bem_segur": 2,
          "cd_ramo": 53,
          "cd_sinistro": 25350,
          "ds_tipo_erro": null,
          "ds_detalhe": null,
          "nm_analista_ti": null,
          "ds_situacao": null
        },
        {
          "dt_inclusao": "11/03/2013",
          "cd_letra_sinistro": "Y",
          "cd_local_contabil": 20,
          "cd_tipo_bem_segurado": 1,
          "cd_caracteristica_bem_segur": 1,
          "cd_ramo": 31,
          "cd_sinistro": 3066,
          "ds_tipo_erro": null,
          "ds_detalhe": null,
          "nm_analista_ti": null,
          "ds_situacao": null
        },
        {
          "dt_inclusao": "11/03/2013",
          "cd_letra_sinistro": "A",
          "cd_local_contabil": 10,
          "cd_tipo_bem_segurado": 1,
          "cd_caracteristica_bem_segur": 2,
          "cd_ramo": 53,
          "cd_sinistro": 19927,
          "ds_tipo_erro": null,
          "ds_detalhe": null,
          "nm_analista_ti": null,
          "ds_situacao": null
        },
        {
          "dt_inclusao": "11/03/2013",
          "cd_letra_sinistro": "A",
          "cd_local_contabil": 10,
          "cd_tipo_bem_segurado": 1,
          "cd_caracteristica_bem_segur": 2,
          "cd_ramo": 53,
          "cd_sinistro": 21368,
          "ds_tipo_erro": null,
          "ds_detalhe": null,
          "nm_analista_ti": null,
          "ds_situacao": null
        },
        {
          "dt_inclusao": "11/03/2013",
          "cd_letra_sinistro": "A",
          "cd_local_contabil": 10,
          "cd_tipo_bem_segurado": 1,
          "cd_caracteristica_bem_segur": 2,
          "cd_ramo": 53,
          "cd_sinistro": 22716,
          "ds_tipo_erro": null,
          "ds_detalhe": null,
          "nm_analista_ti": null,
          "ds_situacao": null
        },
        {
          "dt_inclusao": "11/03/2013",
          "cd_letra_sinistro": "B",
          "cd_local_contabil": 24,
          "cd_tipo_bem_segurado": 1,
          "cd_caracteristica_bem_segur": 2,
          "cd_ramo": 53,
          "cd_sinistro": 10236,
          "ds_tipo_erro": null,
          "ds_detalhe": null,
          "nm_analista_ti": null,
          "ds_situacao": null
        },
        {
          "dt_inclusao": "11/03/2013",
          "cd_letra_sinistro": "B",
          "cd_local_contabil": 10,
          "cd_tipo_bem_segurado": 1,
          "cd_caracteristica_bem_segur": 1,
          "cd_ramo": 31,
          "cd_sinistro": 13017,
          "ds_tipo_erro": null,
          "ds_detalhe": null,
          "nm_analista_ti": null,
          "ds_situacao": null
        },
        {
          "dt_inclusao": "11/03/2013",
          "cd_letra_sinistro": "B",
          "cd_local_contabil": 10,
          "cd_tipo_bem_segurado": 4,
          "cd_caracteristica_bem_segur": 1,
          "cd_ramo": 71,
          "cd_sinistro": 11114,
          "ds_tipo_erro": null,
          "ds_detalhe": null,
          "nm_analista_ti": null,
          "ds_situacao": null
        },
        {
          "dt_inclusao": "11/03/2013",
          "cd_letra_sinistro": "B",
          "cd_local_contabil": 10,
          "cd_tipo_bem_segurado": 1,
          "cd_caracteristica_bem_segur": 1,
          "cd_ramo": 31,
          "cd_sinistro": 12831,
          "ds_tipo_erro": null,
          "ds_detalhe": null,
          "nm_analista_ti": null,
          "ds_situacao": null
        },
        {
          "dt_inclusao": "11/03/2013",
          "cd_letra_sinistro": "B",
          "cd_local_contabil": 10,
          "cd_tipo_bem_segurado": 1,
          "cd_caracteristica_bem_segur": 2,
          "cd_ramo": 53,
          "cd_sinistro": 11846,
          "ds_tipo_erro": null,
          "ds_detalhe": null,
          "nm_analista_ti": null,
          "ds_situacao": null
        },
        {
          "dt_inclusao": "11/03/2013",
          "cd_letra_sinistro": "B",
          "cd_local_contabil": 10,
          "cd_tipo_bem_segurado": 5,
          "cd_caracteristica_bem_segur": 21,
          "cd_ramo": 21,
          "cd_sinistro": 12360,
          "ds_tipo_erro": null,
          "ds_detalhe": null,
          "nm_analista_ti": null,
          "ds_situacao": null
        },
        {
          "dt_inclusao": "11/03/2013",
          "cd_letra_sinistro": "B",
          "cd_local_contabil": 10,
          "cd_tipo_bem_segurado": 1,
          "cd_caracteristica_bem_segur": 2,
          "cd_ramo": 53,
          "cd_sinistro": 11638,
          "ds_tipo_erro": null,
          "ds_detalhe": null,
          "nm_analista_ti": null,
          "ds_situacao": null
        },
        {
          "dt_inclusao": "11/03/2013",
          "cd_letra_sinistro": "B",
          "cd_local_contabil": 10,
          "cd_tipo_bem_segurado": 1,
          "cd_caracteristica_bem_segur": 2,
          "cd_ramo": 53,
          "cd_sinistro": 11497,
          "ds_tipo_erro": null,
          "ds_detalhe": null,
          "nm_analista_ti": null,
          "ds_situacao": null
        },
        {
          "dt_inclusao": "11/03/2013",
          "cd_letra_sinistro": "B",
          "cd_local_contabil": 10,
          "cd_tipo_bem_segurado": 1,
          "cd_caracteristica_bem_segur": 2,
          "cd_ramo": 53,
          "cd_sinistro": 10631,
          "ds_tipo_erro": null,
          "ds_detalhe": null,
          "nm_analista_ti": null,
          "ds_situacao": null
        },
        {
          "dt_inclusao": "11/03/2013",
          "cd_letra_sinistro": "B",
          "cd_local_contabil": 10,
          "cd_tipo_bem_segurado": 1,
          "cd_caracteristica_bem_segur": 2,
          "cd_ramo": 53,
          "cd_sinistro": 11277,
          "ds_tipo_erro": null,
          "ds_detalhe": null,
          "nm_analista_ti": null,
          "ds_situacao": null
        },
        {
          "dt_inclusao": "11/03/2013",
          "cd_letra_sinistro": "B",
          "cd_local_contabil": 10,
          "cd_tipo_bem_segurado": 1,
          "cd_caracteristica_bem_segur": 2,
          "cd_ramo": 53,
          "cd_sinistro": 10526,
          "ds_tipo_erro": null,
          "ds_detalhe": null,
          "nm_analista_ti": null,
          "ds_situacao": null
        },
        {
          "dt_inclusao": "11/03/2013",
          "cd_letra_sinistro": "A",
          "cd_local_contabil": 25,
          "cd_tipo_bem_segurado": 1,
          "cd_caracteristica_bem_segur": 2,
          "cd_ramo": 53,
          "cd_sinistro": 10575,
          "ds_tipo_erro": null,
          "ds_detalhe": null,
          "nm_analista_ti": null,
          "ds_situacao": null
        }
      ]
    );
  }

}
