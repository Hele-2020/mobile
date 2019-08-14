// import {AsyncStorage} from 'react-native'
// import Ws from '@adonisjs/websocket-client'
import Ws from '@adonisjs/websocket-client'


// const token = await AsyncStorage.getItem('userToken');
const ws = Ws('ws://0.tcp.ngrok.io:11699')
// ws.withJwtToken(token).connect()
ws.connect()
// const id_user = await AsyncStorage.getItem('userId');
// console.log("token: " + token)
// console.log("id: " + id_user)

const chat = ws.subscribe('chat')

chat.on('error', (e) => {
    console.log('error is', e);
})
export default chat;