import { AsyncStorage } from 'react-native'
import Ws from '@adonisjs/websocket-client'
import Api from '../config/Api.js'


const token = AsyncStorage.getItem('userToken');
const ws = Ws('ws://api.hélé.fr', {
    reconnected: false,
    reconnection: false
})
ws.withJwtToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTU2NjQ3ODAxM30.OtZmXwTRM6QYOfh75IzokKl3t4XMW6J5E7rJ8NLt2K0').connect()
ws.connect()

const id_user = AsyncStorage.getItem('userId');
console.log("token: " + token)
console.log("id: " + id_user)

const post = ws.subscribe('post')
const comment = ws.subscribe('replies')

post.on('error', (e) => {
    console.log('error is', e);
})
comment.on('error', (e) => {
    console.log('error is', e);
})


export default {post , comment};
