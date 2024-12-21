import { Component } from '@angular/core';

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

    public acao(): void {
      this.titulo = 'Botão clicado carai'
    }

}
