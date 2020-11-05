import { Component, Input, OnInit, Output } from '@angular/core';

import {animate, state, style, transition, trigger} from '@angular/animations';

import { ListaErroService } from './lista-erro-service.service';

@Component({
  selector: 'app-lista-erro',
  templateUrl: './app-lista-erro.component.html',
  styleUrls: ['./app-lista-erro.component.css'],
  animations: [
    trigger('expandCollapse', [
        state('open', style({
            'height': '*'
        })),
        state('close', style({
            'height': '16px',
            'white-space': 'nowrap',
            'overflow': 'hidden',
            'text-overflow': 'ellipsis'
        })),
        transition('open <=> close', animate(100))
    ])
  ]
})
export class AppListaErroComponent implements OnInit {

  dsErro : any;

  @Input() p_cd_letra_sinistro : String;
  @Input() p_cd_local_contabil : Number;
  @Input() p_cd_ramo           : Number;
  @Input() p_cd_sinistro       : Number;

  animExpandir : string;

  constructor(private service : ListaErroService) {
    
    this.dsErro = this.service.getListaErro(
                                            this.p_cd_letra_sinistro,
                                            this.p_cd_local_contabil,
                                            this.p_cd_ramo,
                                            this.p_cd_sinistro
                                            )[0];

    this.animExpandir = 'close';

  }

  expandirElemento(){
    this.animExpandir = (this.animExpandir == 'open') ? 'close' : 'open';
  }

  copiarErro(){
    let dummyElement = document.createElement("textarea");
    document.body.appendChild(dummyElement);
    dummyElement.value = this.dsErro.dsCompleto;
    dummyElement.select();
    document.execCommand("copy");
    document.body.removeChild(dummyElement);
  }

  ngOnInit(): void {
  }

}
