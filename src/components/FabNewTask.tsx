import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface Props {
    navigation: Navigation
}
interface Navigation {
    navigate: (routeName: string) => void;
}

export default function FabNewTask({navigation}:Props) {
    return (
        <TouchableOpacity 
            onPress={()=>navigation.navigate('TaskFromScreen')}
            activeOpacity={.46}
            style={styles.button}>
            <FontAwesome
                name="plus"
                color={'#fff'}
                size={25}
            />
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    button:{
        width: 60,
        height: 60,
        backgroundColor: '#444',
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        position: 'absolute',
        bottom: 30,
        right: 30
    }
})