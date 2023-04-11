// Esse é o modelo a ser seguido pelos elementos do pensamento

export interface Pensamento {
  id?: number; //Isso de colocar o "?" é para deixar o campo Opcional
  conteudo: string;
  autoria: string;
  modelo: string;
  favorito: boolean;
}
