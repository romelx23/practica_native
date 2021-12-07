import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Producto } from '../../interfaces/ProductsInterface';

interface Props {
    product: Producto,
    navigation: Navigation
}
interface Navigation {
    navigate: (routeName: string,{}) => void;
}
export default function TaskItem({ product,navigation }: Props) {
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>{product.nombre}
            </Text>
            <Image
                source={{ uri: product.img }}
                style={styles.cardImage} />
            <TouchableOpacity
                style={styles.cardButton}
                onPress={()=>{
                    navigation.navigate('UpdateImage',{
                        itemId:product._id
                    })
                    console.log(product._id)
                }}
            >
                <Text style={styles.cardButtonTitle}>Actualizar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.cardButton}
                onPress={()=>{console.log('hola')}}
            >
                <Text style={styles.cardButtonTitle}>Eliminar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        margin: 20,
        backgroundColor: '#8578fd',
        padding: 10,
        borderRadius: 10
    },
    cardTitle: {
        color: "#ffffff",
        fontStyle: 'italic',
    },
    cardImage: {
        width: 110,
        height: 140,
        borderRadius: 7
    },
    cardButton: {
        backgroundColor: '#56ffe886',
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginVertical:5
    },
    cardButtonTitle: {
        color: '#fff'
    }
})