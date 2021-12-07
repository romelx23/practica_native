export interface ApiResponse{
    total:     number;
    productos: Producto[];
}

export interface Producto {
    precio:       number;
    disponible:   boolean;
    _id:          string;
    nombre:       string;
    descripcion?: string;
    usuario:      Categoria;
    categoria:    Categoria;
    img?:         string;
}

export interface RespCategoria{
    total:number,
    categorias:Categoria[]
}

export interface Categoria {
    nombre: string;
    uid:    string;
}

