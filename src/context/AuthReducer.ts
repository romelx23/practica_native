import { Usuario } from '../../interfaces/UserInterface';
type AuthAction =
    | { type: 'REQUEST_LOGIN' }
    | { type: 'LOGIN_SUCCESS', payload: { user: string, auth_token: string } }
    | { type: 'LOGOUT' }
    | { type: 'LOGIN_ERROR', error: string }

export const authReducer = (initialState: Usuario, action: AuthAction) => {

    switch (action.type) {
        case "REQUEST_LOGIN":
            return {
                ...initialState,
                // loading: true
            };
        case "LOGIN_SUCCESS":
            return {
                ...initialState,
                user: action.payload.user,
                token: action.payload.auth_token,
                // loading: false
            };
        case "LOGOUT":
            return {
                ...initialState,
                user: "",
                token: ""
            };

        case "LOGIN_ERROR":
            return {
                ...initialState,
                // loading: false,
                errorMessage: action.error
            };

        default:
            throw new Error(`No se encontro la accion de tipo: ${action}`);
    }
}