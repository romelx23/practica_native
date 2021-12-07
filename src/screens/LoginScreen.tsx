import React, { useContext, useState,useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { useTheme } from 'react-native-paper';
import { AuthProvider } from '../context/authProvider';

import * as GoogleSignIn from 'expo-google-sign-in';

import { LoginUsuarios, Usuario } from '../../services/apiUsers';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
    navigation: Navigation
}
interface Navigation {
    navigate: (routeName: string) => void;
    replace:(routeName: string)=>{}
}

const SignInScreen = ({ navigation }: Props) => {

    const [data, setData] = useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const { colors } = useTheme();

    // const { signIn } = useContext(AuthContext);

    // const textInputChange = (val) => {
    //     if( val.trim().length >= 4 ) {
    //         setData({
    //             ...data,
    //             username: val,
    //             check_textInputChange: true,
    //             isValidUser: true
    //         });
    //     } else {
    //         setData({
    //             ...data,
    //             username: val,
    //             check_textInputChange: false,
    //             isValidUser: false
    //         });
    //     }
    // }

    // const handlePasswordChange = (val) => {
    //     if( val.trim().length >= 8 ) {
    //         setData({
    //             ...data,
    //             password: val,
    //             isValidPassword: true
    //         });
    //     } else {
    //         setData({
    //             ...data,
    //             password: val,
    //             isValidPassword: false
    //         });
    //     }
    // }

    // const updateSecureTextEntry = () => {
    //     setData({
    //         ...data,
    //         secureTextEntry: !data.secureTextEntry
    //     });
    // }

    // const handleValidUser = (val) => {
    //     if( val.trim().length >= 4 ) {
    //         setData({
    //             ...data,
    //             isValidUser: true
    //         });
    //     } else {
    //         setData({
    //             ...data,
    //             isValidUser: false
    //         });
    //     }
    // }

    // const loginHandle = (userName, password) => {

    //     const foundUser = Users.filter( item => {
    //         return userName == item.username && password == item.password;
    //     } );

    //     if ( data.username.length == 0 || data.password.length == 0 ) {
    //         Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
    //             {text: 'Okay'}
    //         ]);
    //         return;
    //     }

    //     if ( foundUser.length == 0 ) {
    //         Alert.alert('Invalid User!', 'Username or password is incorrect.', [
    //             {text: 'Okay'}
    //         ]);
    //         return;
    //     }
    //     signIn(foundUser);
    // }
    const handleChange=(name:any,value:any)=>
    setUsuario({...usuario,[name]:value})

    const [usuario, setUsuario] = useState<Usuario>({
        correo:"romel2@gmail.com",
        password:"1234567",
    })

    const handleLogin=()=>{
        LoginUsuarios(usuario)
        ValidateLogin()
    }

    const ValidateLogin=()=>{
        const token=AsyncStorage.getItem('x-token')
        console.log(token);
        if(!!token){
          navigation.replace('Login')
        } 
          navigation.replace('Home')
    }
    // // INITIALIZE GOOGLE SIGN IN
    // useEffect(()=>{
    //     initAsync();
    // })

    // const handleMessage=(message:string,type='FILED')=>{
        
    // }

    // const persistLogin=(credentials:string,message:string,status:string)=>{
    //     AsyncStorage.setItem('arquiCredentials',JSON.stringify(credentials))
    //     .then(()=>{

    //     })
    // }

    // const getUserDetails= async()=>{
    //     const user=await GoogleSignIn.signInSilentlyAsync();
    //     return user;
    // }

    // const androidClientId='938419071147-dapv5gtn2o7je09moihlgdlopj811fqj.apps.googleusercontent.com';
    // const iosClientId='938419071147-d68253a5uhdbu7sr3uj16tvifpal9u5n.apps.googleusercontent.com';
    // const webClientId='938419071147-mv1dv8flos4iscuiaq88ofhqitoan8rb.apps.googleusercontent.com';

    // const PlatformString=()=>{
    //     if(Platform.OS==='android'){
    //         return androidClientId;
    //     }if(Platform.OS==='ios'){
    //         return iosClientId;
    //     }if(Platform.OS==='web'){
    //         return webClientId;
    //     }
    // }

    // const initAsync=()=>{
    //     try {
    //         GoogleSignIn.initAsync({
    //             clientId:PlatformString()
    //         })
    //         getUserDetails();
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // const handleGoogleSignIn=async()=>{
    //     try {
    //         const resp=await GoogleSignIn.askForPlayServicesAsync();
    //         const signIn=await GoogleSignIn.signInAsync();
    //         getUserDetails();
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return (
        // <AuthProvider>
            <View style={styles.container}>
                <StatusBar backgroundColor='#009387' barStyle="light-content" />
                <View style={styles.header}>
                    <Text style={styles.text_header}>Welcom a Teca . . .</Text>
                </View>
                <Animatable.View
                    animation="fadeInUpBig"
                    style={[styles.footer]}
                >
                    <Text style={[styles.text_footer]}>Username</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color={'#fff'}
                            size={20}
                        />
                        <TextInput
                            placeholder="Your Username"
                            placeholderTextColor="#ffffff8b"
                            style={[styles.textInput]}
                            autoCapitalize="none"
                            onChangeText={text=>handleChange('correo',text)}
                        // onChangeText={(val) => textInputChange(val)}
                        // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                        />
                        {data.check_textInputChange ?
                            <Animatable.View
                                animation="bounceIn"
                            >
                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View>
                            : null}
                    </View>
                    {data.isValidUser ? null :
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
                        </Animatable.View>
                    }


                    <Text style={[styles.text_footer, {
                        color: '#fff',
                        marginTop: 35
                    }]}>Password</Text>
                    <View style={styles.action}>
                        <Feather
                            name="lock"
                            color={"#fff"}
                            size={20}
                        />
                        <TextInput
                            placeholder="Your Password"
                            placeholderTextColor="#ffffff7f"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={[styles.textInput]}
                            autoCapitalize="none"
                            onChangeText={text=>handleChange('password',text)}
                        // onChangeText={(val) => handlePasswordChange(val)}
                        />
                        <TouchableOpacity
                        // onPress={updateSecureTextEntry}
                        >
                            {data.secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="grey"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
                    </View>
                    {data.isValidPassword ? null :
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
                        </Animatable.View>
                    }


                    <TouchableOpacity>
                        <Text style={{ color: '#009387', marginTop: 15 }}>Forgot password?</Text>
                    </TouchableOpacity>
                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.signIn}
                            onPress={()=>handleLogin()}
                        // onPress={() => {loginHandle( data.username, data.password )}}
                        >
                            <LinearGradient
                                colors={['#08d4c4', '#01ab9d']}
                                style={styles.signIn}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#fff'
                                }]}>Sign In</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('SignUpScreen')}
                            style={[styles.signIn, {
                                borderColor: '#009387',
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                        >
                            <Text style={[styles.textSign, {
                                color: '#009387'
                            }]}>Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={
                                () => {
                                    // handleGoogleSignIn();
                                    navigation.navigate('SignUpScreen');
                                }
                            }
                            style={[styles.signIn, {
                                borderColor: '#009387',
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                        >
                            <View
                            style={{
                                width: '100%',
                                height: '100%',
                                display:'flex',
                                flexDirection: 'row',
                                justifyContent:'center',
                                alignItems:'center',
                                backgroundColor:'#77b0d6',
                                borderRadius:10
                            }}
                            >
                            <Image source={{
                                uri:'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
                            }}
                            style={{width:20,height:20,marginRight:20}}
                            />
                            <Text style={[styles.textSign, {
                                color: '#ffffff'
                            }]}>Login con Google
                            </Text>                            
                            </View>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </View>
        // </AuthProvider>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387',
        paddingHorizontal: 20
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#2f2c2c',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#ffffff',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        paddingTop: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        marginHorizontal: 10,
        color: '#ffffff',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});