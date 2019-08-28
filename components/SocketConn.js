import { AsyncStorage } from 'react-native'
import Ws from '@adonisjs/websocket-client'
import Api from '../config/Api.js'

export default async function Connexion(){
    const token = await AsyncStorage.getItem('userToken');
    const ws = Ws('ws://api.hélé.fr')
    ws.withJwtToken(token).connect()
    const post = ws.subscribe('post')
    const comment = ws.subscribe('replies')
    post.on('error', (e)=>{
        console.log('error is', e)
    })
    comment.on('error', (e)=>{
        console.log('error is', e)
    })
    return {post,comment}
}