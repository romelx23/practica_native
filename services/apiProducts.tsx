import { useState } from "react";
import { ApiResponse } from "../interfaces/ProductsInterface";
import * as FileSystem from 'expo-file-system';
import AsyncStorage from "@react-native-async-storage/async-storage";
// const base_url = 'https://rest-server-cafe-romel.herokuapp.com/';
const base_url = 'https://arqui-pro-back.herokuapp.com/';
// const base_url = 'http://localhost:8080/';

interface Product {
  nombre: string,
  precio: number,
  categoria: string,
  descripcion: string,
  img: string
}

export const getProducts = async () => {
  try {
    const res = await fetch(`${base_url}api/productos?limite=20`);
    const data: ApiResponse = await res.json();
    const products = data.productos;
    return products;
  } catch (error) {
    console.log(error);
  }
};

export const SaveProducts = async (newProduct: Product) => {
  try {
    const filename = newProduct.img.split('/').pop()
    const match = /\.(\w+)$/.exec(filename || '');
    let type = match ? `image/${match[1]}` : `image`;
    const formdata = new FormData();
    formdata.append('nombre', newProduct.nombre)
    formdata.append('precio', newProduct.precio.toString())
    formdata.append('categoria', newProduct.categoria)
    formdata.append('descripcion', newProduct.descripcion)
    formdata.append('img', JSON.parse(JSON.stringify({
      uri: newProduct.img,
      name: 'product.jpg',
      type: 'image/jpg',
    })))
    const token = await AsyncStorage.getItem('x-token') || '';
    const resp = await fetch(`${base_url}api/productos`, {
      method: 'POST',
      headers: {
        'Accept': 'Application/json',
        'Content-Type': 'multipart/form-data',
        'x-token': token,
      },
      body: formdata
    })
    console.log(formdata);
    return await resp.json()
  } catch (error) {
    console.log(error);
  }
}


export const UploadImageProdcuts = async (uri: string, id: string) => {
  const filename = uri.split('/').pop()
  const match = /\.(\w+)$/.exec(filename || '');
  let type = match ? `image/${match[1]}` : `image`;
  try {
    // const token = localStorage.getItem('x-token') || '';
    const formdata = new FormData();
    formdata.append('archivo', JSON.parse(JSON.stringify({
      uri,
      name: filename,
      type,
    })))
    // formdata.append('archivo', uri)
    const resp = await fetch(`${base_url}api/uploads/productos/${id}`, {
      method: 'PUT',
      headers: {
        // 'x-token': token,
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      },
      body: formdata
    })
    console.log(filename);
    console.log(type);
    console.log('formdata', formdata);
    // console.log('respuesta',await resp.json());
    return await resp.json()
  } catch (error) {
    console.log(error);
  }
}