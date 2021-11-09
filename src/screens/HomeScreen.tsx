import React, { Component, useEffect, useState } from 'react'
import { Text, View, FlatList } from 'react-native'
import {getProducts} from '../../services/api'
import { Producto, Welcome } from '../../interfaces/ProductsInterface';
const libros=[
    {
        id:'1',
        nombre:'harry potter'
    },
    {
        id:'2',
        nombre:'harry potter'
    },
    {
        id:'3',
        nombre:'harry potter'
    },
    {
        id:'4',
        nombre:'harry potter'
    },
    {
        id:'5',
        nombre:'harry potter'
    },
]

const HomeScreen =()=>{
    // <Producto[]> === <Producto[]
    const [products, setProducts] = useState<Producto[]>([]);
    const loadProducts=async()=>{
        const data=await getProducts()
        // console.log(data);
        setProducts(data)
    }
    useEffect(() => {
        // loadProducts()
        (async()=>{await loadProducts()})()
        // console.log('hola');
    }, []);
    console.log(products);
        return (
            <View
            style={{flex:1,backgroundColor:'#ff9090'}}
            >
                {products?<FlatList
                // style={{flex:1,backgroundColor:'#bebebe'}}
                data={products}
                // keyExtractor={(products)=>{
                //     return products._id
                // }}
                renderItem={({item})=>{
                    return(
                        <Text style={{color:'#000'}}>{item.nombre}</Text>
                    )
                }}
                />
            :<Text style={{color:'#000'}}>No hay productos</Text>
            }
            </View>
        )
}
export default HomeScreen;
