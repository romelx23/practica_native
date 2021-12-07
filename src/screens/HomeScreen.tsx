import React, { useEffect, useState } from 'react'
import { Text, View, FlatList } from 'react-native'
import { getProducts } from '../../services/apiProducts'
import { Producto } from '../../interfaces/ProductsInterface';
import TaskList from '../components/TaskList';
import { Layout } from '../components/Layout';
import FabNewTask from '../components/FabNewTask';
const libros = [
    {
        id: '1',
        nombre: 'harry potter'
    },
    {
        id: '2',
        nombre: 'harry potter'
    },
    {
        id: '3',
        nombre: 'harry potter'
    },
    {
        id: '4',
        nombre: 'harry potter'
    },
    {
        id: '5',
        nombre: 'harry potter'
    },
]
interface Props {
    navigation: Navigation
}
interface Navigation {
    navigate: (routeName: string) => void;
}

const HomeScreen = ({ navigation }: Props) => {
    const [products, setProducts] = useState<Producto[]>([]);
    const loadProducts = async () => {
        const data = await getProducts() || products
        setProducts(data)
    }
    useEffect(() => {
        loadProducts()
    }, []);
    return (
        <Layout
        >
            <TaskList products={products} navigation={navigation} load={loadProducts} />
            <FabNewTask navigation={navigation} />
        </Layout>
    )
}
export default HomeScreen;

