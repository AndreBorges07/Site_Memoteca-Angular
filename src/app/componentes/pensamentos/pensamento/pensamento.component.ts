import { PensamentoService } from '../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css'],
})

//Esse é o modelinho padrão
export class PensamentoComponent {
  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Nome',
    modelo: 'modelo3',
    favorito: false,
  };

  @Input() listaFavoritos: Pensamento[] = [];

  constructor(private servise: PensamentoService) {}

  // Função para o tamanho do "card" mudar de acordo com o tamanho do texto incluso
  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'; //É pra mudar a Classe para um card maior, "tamanho G".
    }
    return 'pensamento-p'; //Se o pensamento for curto, mantém a classe do tamanho original.
  }

  mudarIconeFavorito(): string {
    if (this.pensamento.favorito == false) {
      return 'inativo';
    }
    return 'ativo';
  }

  atualizarFavoritos() {
    this.servise.mudarFavorito(this.pensamento).subscribe(() => {
      this.listaFavoritos.splice(
        this.listaFavoritos.indexOf(this.pensamento),
        1
      );
    });
  }
}
