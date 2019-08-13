import Ws from '@adonisjs/websocket-client'
import {AsyncStorage} from 'react-native';



export default async function Connexion(){
    const token = await AsyncStorage.getItem('userToken');

    const ws = Ws('ws://0.tcp.ngrok.io:15938')    
    ws.withJwtToken(token).connect()
    
    const id_user = await AsyncStorage.getItem('userId');
    console.log("token: " + token)
    console.log("id: " + id_user)
    
    const chat = ws.subscribe('chat:1')
    
    chat.on('error', (e) => {
        console.log('error is', e);
    })

    return chat
}