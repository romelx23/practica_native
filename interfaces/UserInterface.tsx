export interface Usuario {
    correo:string;
    password:string
}

export interface UsuarioRespuesta {
    token:string,
    usuario:{
        correo:string,
        estado:boolean,
        google:boolean,
        img:string,
        rol:string,
        uid:string
    }
}
