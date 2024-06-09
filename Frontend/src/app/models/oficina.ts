export class Oficina {
    _id?: string;
    idEncargado: string;
    nombre: string;
    direccion: string;
    telefono: string;
    correo: string;
    zona: string;
  
    constructor(
      idEncargado: string,
      nombre: string,
      direccion: string,
      telefono: string,
      correo: string,
      zona: string
    ) {
      this.idEncargado = idEncargado;
      this.nombre = nombre;
      this.direccion = direccion;
      this.telefono = telefono;
      this.correo = correo;
      this.zona = zona;
    }
  }
  