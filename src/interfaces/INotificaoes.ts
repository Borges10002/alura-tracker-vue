export enum TipoNotificacao {
  SUCESSO,
  FALHA,
  ATENCAO,
}

export interface INotificaoes {
  titulo: string;
  texto: string;
  tipo: TipoNotificacao;
  id: number;
}
