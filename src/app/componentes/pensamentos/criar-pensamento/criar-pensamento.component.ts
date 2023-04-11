import { Router, RouterModule } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent {
  // Esse "Pensamento" com o P maiúsculo é o modelo a ser seguido, isso ajuda a não ter confusão com o front entre o Back
  // pensamento: Pensamento = {
  //   //id: 1,
  //   conteudo: '',
  //   autoria: '',
  //   modelo: 'modelo1'
  // }

  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router, // É preciso importar isso pra funcionar a rota
    private formBuilder: FormBuilder //para o formulário, subir essa linha
  ) {}
  // Esse é o modelo criado logo quando clica em "novo"
  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ], //Esse "Validators" serve igual o HTML para campos como o "type".
      autoria: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      modelo: ['modelo1', [Validators.required]],
      favorito: [false],
    });
  }

  criarPensamento() {
    console.log(this.formulario.get('autoria')?.errors);

    if (this.formulario.valid) {
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento']); //É um jeito de ao clicar ser redirecionado para outro componente.
      });
    }
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
    // alert("Cancelado!")
  }

  // Se estiver tudo ok, vai aparecer o texto "botao", que é o nome da classe do Css.
  habilitarBotao(): string {
    if (this.formulario.valid) {
      return 'botao';
    } else {
      return 'botao__desabilitado';
    }
  }
}
