import React, { Component, useEffect, useState, Dispatch, SetStateAction } from 'react'
import { Text, View, Button, Image, Platform } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { UploadImageProdcuts } from '../../services/apiProducts';
import { Productos } from '../screens/TaskFromScreen';

interface Props {
    itemId?: string,
    action: string,
    products?: Productos,
    saveImage?: Dispatch<SetStateAction<Productos>>
}
// {itemId}:Props
export const ImagePickerButton = ({ itemId, action, saveImage, products }: Props) => {
    const [image, setImage] = useState("https://i2.wp.com/atrilco.com/wp-content/uploads/2017/11/ef3-placeholder-image.jpg");

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
                base64: false
            });
            console.log(result);

            if (!result.cancelled) {
                // UploadImageProdcuts(image,itemId)
                if (action === "update") {
                    setImage(result.uri);
                }
                else if(action === "create" && saveImage && products){
                    setImage(result.uri);
                    saveImage({...products, img: result.uri })
                }
                console.log(image);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const updateImage = async () => {
        await UploadImageProdcuts(image, itemId || '')
        alert("Se subio la imagen Correactamente")
    }
    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20
        }}>
            <Button title={"Ingrese su Imagen"} onPress={pickImage} />
            <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200, marginTop: 20 }}
            />
            {
                action === "update" ?
                    <Button title={"Subir Imagen"} onPress={() => { updateImage() }} />
                    : null
            }
        </View>
    )
}

export default ImagePicker
