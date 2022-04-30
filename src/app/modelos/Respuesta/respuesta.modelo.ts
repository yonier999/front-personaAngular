export class RespuestaModelo<T>{
  data:T;
  mensaje: MensajeModelo;

}

export class MensajeModelo{
  error: boolean;
  mensaje:string;
}
