import { createContext } from 'react';
interface Usuario{
    correo:   string,
    password: string
}

export const AuthContext = createContext<Usuario>({
    correo: '',
    password: '',
});