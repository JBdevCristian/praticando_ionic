import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


    public teste: String = ''
    public resultado: String = ''
    public titulo: String = 'Xmen' //DataBinding
    public imagemRandom: String = 'https://picsum.photos/200/300' //DataBinding

    public atualizar(event: any): void {
      var valor = event.target.value;
      this.titulo = event.target.value
      if (valor == '') {
          this.titulo = 'Xmen'
      }
    }

    constructor(private navegacao: NavController) { }

    recuperar() {
      this.resultado = this.teste
    }

    abrirBotao() {
      this.navegacao.navigateForward('botoes')
    }

    abrirLista() {
      this.navegacao.navigateForward('lista')
    }
    

}
