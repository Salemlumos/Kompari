import NetInfo from '@react-native-community/netinfo';
import { Alert } from 'react-native';

export async function hasConnection() {
    return NetInfo.fetch().then(state => {
        // console.log('Connection type', state.type);
        // console.log('Is connected?', state.isConnected);
        if(state.isConnected==true){
            return true
        }else{
            return false
        }
    });
}