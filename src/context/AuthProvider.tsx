import React, { ReactNode, useReducer } from 'react'
import { AuthContext } from './AuthContext';
import { authReducer } from './AuthReducer';
// import { Usuario } from '../../services/apiUsers';

interface Props{
    children: ReactNode
}

const initialState={
    correo:'',
    password:'',
}

export const AuthProvider = ({children}:Props) => {

    // const [authState, dispatch] = useReducer(authReducer, initialState)

    return (
        <AuthContext.Provider value={initialState}>
            {children}
        </AuthContext.Provider>
    )
}
