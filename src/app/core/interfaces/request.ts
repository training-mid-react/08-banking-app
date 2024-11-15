export type DinHeader = {
  dispositivo: string;
  idioma: string;
  uuid: string;
  ip: string;
  horaTransaccion: string;
  llaveSimetrica: string;
  vectorInicializacion: string;
};

export type DinError = {
  tipo: string;
  fecha: string;
  origen: string;
  codigo: string;
  codigoErrorProveedor: string;
  mensaje: string;
  detalle: string;
};