import { AsyncStorage } from 'react-native'
import Ws from '@adonisjs/websocket-client'


const token = AsyncStorage.getItem('userToken');
const ws = Ws('ws://0.tcp.ngrok.io:12505')
ws.withJwtToken(token).connect()
const id_user = AsyncStorage.getItem('userId');
console.log("token: " + token)
console.log("id: " + id_user)

const post = ws.subscribe('post')

post.on('error', (e) => {
    console.log('error is', e);
})
export default post;
