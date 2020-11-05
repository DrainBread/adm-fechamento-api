import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InjetaSqlService {

  constructor() { }

  executaComando(comando : String){

    //stub
    return ([{"pMens":"Linhas alteradas: 0","pErr":""}]);
  }

}
