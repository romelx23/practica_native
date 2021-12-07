import React from 'react'
import { View, Text } from 'react-native'
import { Layout } from '../components/Layout'
import { ImagePickerButton } from '../components/ImagePickerButton';
interface Props{
    navigation: Navigation,
    route:{
        params:{
          itemId:string  
        }
    }
}

interface Navigation {
    navigate: (routeName: string) => void;
}
const UpdateImage = ({route}:Props) => {
    const {itemId}=route.params;
    return (
        <Layout>
            <ImagePickerButton itemId={itemId} action={"update"}/>
        </Layout>
    )
}

export default UpdateImage
