import AsyncStorage from "@react-native-async-storage/async-storage"

export const clearLogin=()=>{
    AsyncStorage.removeItem('arquiCredentials')
}