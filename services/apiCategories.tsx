import { RespCategoria } from '../interfaces/ProductsInterface';
const base_url = 'https://rest-server-cafe-romel.herokuapp.com/';

interface Categories {
  nombre: string,
  uid:string,
}

export const getCategories = async () => {
  const res  = await fetch(`${base_url}api/categorias`);
  const data:RespCategoria = await res.json();
  console.log(data.categorias);
  return data.categorias;
};