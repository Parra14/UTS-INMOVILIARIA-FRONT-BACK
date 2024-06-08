export class User {
    _id?:number;
    DNI: string;
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    telefono: string;
    rol: string;



    constructor(DNI: string, nombre: string, apellido: string, email: string, password: string, telefono: string, rol: string){
        this.DNI = DNI;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.telefono = telefono;
        this.rol = rol;

    }

}