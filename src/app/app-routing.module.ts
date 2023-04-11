import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';

const routes: Routes = [ //Essas rotas é para ir de Página para página
  {
    path: '', //Esse é quando o localHost esstiver vazio. Ex. http://localhost:4200/''
    redirectTo: 'listarPensamento', //Por estar vazio não vai aparecer nada... Por isso há o redirecionamento para o "listarPensamento"
    pathMatch: 'full'
  },
  {
    path: 'criarPensamento', //São páginas que já criamos.
    component: CriarPensamentoComponent //Esse é o nome do Componente que será chamado.
  },
  {
    path: 'listarPensamento',
    component: ListarPensamentoComponent
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: ExcluirPensamentoComponent
  },
  {
    path: 'pensamentos/editarPensamento/:id',
    component: EditarPensamentoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
