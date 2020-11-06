import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Fechamento Contábil';

  constructor(private router : Router){
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd){
        let element;
        if(this.router.url === '/'){
          element = document.getElementById('menuComandos');
          element.classList.remove('menuAtual');
          element = document.getElementById('menuHome');
          element.classList.add('menuAtual');
        }else if(this.router.url === '/comandos'){
          element = document.getElementById('menuHome');
          element.classList.remove('menuAtual');
          element = document.getElementById('menuComandos');
          element.classList.add('menuAtual');
        }
      }
    });
    
  }

}
