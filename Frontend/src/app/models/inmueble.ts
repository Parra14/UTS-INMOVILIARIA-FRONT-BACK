// src/app/models/inmueble.model.ts
export class Estancia {
    cantidad: number;
    descripcion: string;
  
    constructor(cantidad: number, descripcion: string) {
      this.cantidad = cantidad;
      this.descripcion = descripcion;
    }
  }
  
  export class Caracteristica {
    descripcion: string;
  
    constructor(descripcion: string) {
      this.descripcion = descripcion;
    }
  }
  
  export class Visita {
    nombreInteresado: string;
    telefonoInteresado: string;
    emailInteresado: string;
    fechaYHora: string;
    comentario: string;
  
    constructor(
      nombreInteresado: string,
      telefonoInteresado: string,
      emailInteresado: string,
      fechaYHora: string,
      comentario: string
    ) {
      this.nombreInteresado = nombreInteresado;
      this.telefonoInteresado = telefonoInteresado;
      this.emailInteresado = emailInteresado;
      this.fechaYHora = fechaYHora;
      this.comentario = comentario;
    }
  }
  
  export class Inmueble {
    _id?: string;
    area: number;
    direccion: string;
    estancias: Estancia[];
    caracteristicas: Caracteristica[];
    zona: string;
    oferta: string;
    valor: string;
    nombrePropietario: string;
    telefonoPropietario: string;
    llaves: string;
    visitas: Visita[];
  
    constructor(
      area: number,
      direccion: string,
      estancias: Estancia[],
      caracteristicas: Caracteristica[],
      zona: string,
      oferta: string,
      valor: string,
      nombrePropietario: string,
      telefonoPropietario: string,
      llaves: string,
      visitas: Visita[]
    ) {
      this.area = area;
      this.direccion = direccion;
      this.estancias = estancias;
      this.caracteristicas = caracteristicas;
      this.zona = zona;
      this.oferta = oferta;
      this.valor = valor;
      this.nombrePropietario = nombrePropietario;
      this.telefonoPropietario = telefonoPropietario;
      this.llaves = llaves;
      this.visitas = visitas;
    }
  }
  