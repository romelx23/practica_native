import React, { useState,useEffect } from 'react'
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native'
import { SaveProducts } from '../../services/apiProducts';
import { Layout } from '../components/Layout';
import DropDownPicker from 'react-native-dropdown-picker';
import { Dropdown } from 'react-native-element-dropdown';
import { getCategories } from '../../services/apiCategories';
import { Categoria } from '../../interfaces/ProductsInterface';
import { ImagePickerButton } from '../components/ImagePickerButton';
export interface Productos {
    nombre: string,
    precio: number,
    categoria: string,
    descripcion: string,
    img:string
}

interface Props {
    navigation: Navigation
}
interface Navigation {
    navigate: (routeName: string) => void;
}

const TaskFromScreen = ({ navigation }: Props) => {
    const [product, setProduct] = useState<Productos>({
        nombre: '',
        precio: 0,
        categoria: '',
        descripcion: '',
        img:''
    })
    const [cate, setCate] = useState<Categoria[]>([]);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: '', value: '' },
    ]);
    const handleChange = (name: any, value: any) =>{
        setProduct({ ...product, [name]: value })
        // console.log(product);
    }

    const handleSubmit = () => {
        console.log(product);
        SaveProducts(product).then(()=>{
            navigation.navigate('Home')
        });
    }
    const SetCategories=async()=>{
        const categorias= await getCategories();
        setCate(categorias);
    }

    const ChargeCategories=()=>{
        // cate.map((categoria:Categoria)=>{
        //     const {nombre,uid}=categoria;
        //     console.log(uid+" so");

        //     setItems([...items,{
        //         label:nombre,
        //         value:uid,
        //     }])
        // })
        const item=cate.map(({nombre:label,uid:value})=>{
            return {
                label,
                value
            }
        })
        setItems(item);
    }

    useEffect(() => {
        SetCategories();
    }, [])
    useEffect(() => {
        ChargeCategories()
    }, [cate])

    return (
        <Layout>
            <TextInput
                style={style.input}
                placeholder='Escriba el nombre'
                placeholderTextColor='#ffffffc1'
                onChangeText={text => handleChange('nombre', text)}
            />
            <TextInput
                style={style.input}
                placeholder='Escriba el precio'
                placeholderTextColor='#ffffff97'
                onChangeText={text => handleChange('precio', text)}
            />
            <DropDownPicker
                placeholder="Categoria"
                textStyle={{
                    fontSize:20,
                    color: '#fff'
                }}
                badgeStyle={{borderColor:'#444'}}
                dropDownContainerStyle={{
                    marginVertical:10,
                    alignSelf:'center',
                    width: '90%',
                    backgroundColor: "#3cb1ff",
                }}
                style={style.dropdown}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                autoScroll={true}
                onChangeValue={()=>handleChange('categoria', value)}
            />
            <TextInput
                style={style.input}
                placeholder='Escriba la description'
                placeholderTextColor='#ffffff97'
                onChangeText={text => handleChange('descripcion', text)}
            />
            <ImagePickerButton 
                action={"create"}
                saveImage={setProduct}
                products={product}
            />
            <TouchableOpacity
                style={style.buttonProduct}
                // disabled
                onPress={handleSubmit}
            >
                <Text style={style.buttonText}>Save Product</Text>
            </TouchableOpacity>
        </Layout>
    )
}

const style = StyleSheet.create({
    input: {
        width: '90%',
        backgroundColor: '#7171ff',
        fontSize: 14,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#66faffd1',
        height: 35,
        color: '#fff',
        borderRadius: 5,
        padding: 5,
        textAlign: 'center'
    },
    dropdown: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#7171ff',
        fontSize: 14,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#66faffd1',
        height: 40,
        color: '#fff',
        borderRadius: 5,
        padding: 5,
        textAlign: 'center'
    },
    buttonProduct: {
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: '#10ac84',
        width: '90%'
    },
    icon: {
        marginRight: 5,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center'
    }
})

export default TaskFromScreen
