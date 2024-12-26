import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    public titulo: String = 'Xmen'
    public imagemRandom: String = 'https://picsum.photos/200/300'

    public atualizar(event: any): void {
      var valor = event.target.value;
      this.titulo = event.target.value
      if (valor == '') {
          this.titulo = 'Xmen'
      }
    }

    constructor(private navegacao: NavController) { }

   
    abrirBotao() {
      this.navegacao.navigateForward('botoes')
    }

    abrirLista() {
      this.navegacao.navigateForward('lista')
    }
    

}
