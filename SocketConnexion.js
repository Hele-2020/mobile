import Ws from '@adonisjs/websocket-client';
import {AsyncStorage} from 'react-native';

export default async function Connexion(id){
    const token = await AsyncStorage.getItem('userToken')

    const ws = Ws('ws://api.xn--hl-bjab.fr')    
    ws.withJwtToken(token).connect()

    const id_user = await AsyncStorage.getItem('userId')
    console.log("token: " + token)
    console.log("id: " + id_user)

    const chat = await ws.subscribe('chat:' + id)

    chat.on('error', (e) => {
        console.log('error is', e)
    })

    return chat
}