import { AsyncStorage } from 'react-native'
import Ws from '@adonisjs/websocket-client'


//const token = AsyncStorage.getItem('userToken');
const ws = Ws('ws://ba28864f.ngrok.io')
ws.withJwtToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU2NjQ2NTQyOH0.Lv9sKBISUsWYSdlEFxF9PacAeG0Tlz3F3NTzP1PBa2o").connect()
const id_user = AsyncStorage.getItem('userId');
// console.log("token: " + token)
// console.log("id: " + id_user)

const chat = ws.subscribe('post')
const post = ws.subscribe('postpsy')
// const comment = ws.subscribe('comment')

chat.on('error', (e) => {
    console.log('error is', e);
})
// post.on('error', (e) => {
//     console.log('error is', e);
// })
// comment.on('error', (e) => {
//     console.log('error is', e);
// })
export default chat;
// export default {chat , post , comment};
