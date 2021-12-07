import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screens/HomeScreen';
import TaskFromScreen from './src/screens/TaskFromScreen';
import SignInScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UpdateImage from './src/screens/UpdateImage';
import Sidebar from './src/components/Sidebar';


type RootStackParamList = {
  Home: undefined;
  TaskFromScreen:undefined,
  Login:undefined,
  SignUpScreen:undefined,
  UpdateImage:undefined,
};

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  // const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
      >
        <Stack.Screen 
        name="Home" 
        component={Sidebar}
        options={({navigation})=>({
        headerShown:false,
        title:'Task App',
        headerStyle:{backgroundColor:'#333'},
        headerTitleStyle:{color:'#ffffff'},
        headerRight:()=>(
          <TouchableOpacity onPress={()=>{
            AsyncStorage.clear(),
            navigation.replace('Login')
          }}>
          <Text style={{color:'#fff',marginRight:20,fontSize:15}}>R</Text>
          </TouchableOpacity>
        )
      })} />
        <Stack.Screen 
        name="TaskFromScreen"
        component={TaskFromScreen}
        options={{
          title:'Agregar Producto',
          headerStyle:{
            backgroundColor:'#333'
          },
          headerTitleStyle:{
            color:'#fff'
          },
          headerTintColor:'#fff',
        }}
        />
        <Stack.Screen 
        name="Login"
        component={SignInScreen}
        options={{
          headerShown:false,
          headerStyle:{
            backgroundColor:'#333'
          },
          headerTitleStyle:{
            color:'#fff'
          },
          headerTintColor:'#fff',
        }}
        />
        <Stack.Screen 
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          headerShown:false,
          headerStyle:{
            backgroundColor:'#333'
          },
          headerTitleStyle:{
            color:'#fff'
          },
          headerTintColor:'#fff',
        }}
        />
        <Stack.Screen 
        name="UpdateImage"
        component={UpdateImage}
        options={{
          // headerShown:false,
          headerStyle:{
            backgroundColor:'#333'
          },
          headerTitleStyle:{
            color:'#fff'
          },
          headerTintColor:'#fff',
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  principal:{
    color: '#fff'
  }
});
