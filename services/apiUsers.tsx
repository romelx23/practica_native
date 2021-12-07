import { UsuarioRespuesta } from "../interfaces/UserInterface";
import AsyncStorage from '@react-native-async-storage/async-storage';

const base_url='https://rest-server-cafe-romel.herokuapp.com/';

export interface newUsuario{
    nombre:     string,
    correo:     string,
    password:   string,
    rol:        string
}

export interface Usuario{
    correo:     string,
    password:   string,
}

export const getUsuariobyId = async() => {
  const res = await fetch(`${base_url}api/productos?limite=10`);
  const data:UsuarioRespuesta=await res.json();
  const {token,usuario:{uid}}=data;
  return {
    token,
    uid
  };
};

export const SaveUsuarios=async(newUsuario:newUsuario)=>{
  try {
    console.log(JSON.stringify(newUsuario));
    const resp=await fetch(`${base_url}api/usuarios`,{
      method:'POST',
      body:JSON.stringify(newUsuario),
      headers:{
        'Content-Type': 'application/json',
      }
    })
    if(resp.status===400){
      return {
        message:'No se registro el usuario'
      }
    }
    
    const res={
      resp: await resp.json(),
      status:resp.status
    }
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
}

interface Res{
  resp:Resp,
  status:number
}

interface Resp{
  token:string,
  usuario:{
    correo:string,
    estado:boolean
  }
}

export const LoginUsuarios=async(Usuario:Usuario)=>{
  try {
    const resp=await fetch(`${base_url}api/auth/login`,{
      method:'POST',
      body:JSON.stringify(Usuario),
      headers:{
        'Content-Type': 'application/json',
      }
    })

    if(resp.status===400){
      console.log('el usuario no esta registrado')
      return {
        message:'Ese usuario no está registrado'
      }
    }
    
    const respuesta:Res={
      resp: await resp.json(),
      status:resp.status
    }
    AsyncStorage.setItem('x-token',respuesta.resp.token)
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
}