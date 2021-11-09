const API='https://rest-server-cafe-romel.herokuapp.com/api/productos';

export const getProducts = async() => {
  const res = await fetch(API);
  const data=await res.json();
  return data;
};
