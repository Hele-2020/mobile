import Ws from '@adonisjs/websocket-client'

const ws = Ws('ws://0.tcp.ngrok.io:13858')

ws.connect()
    
const chat = ws.subscribe('chat')

export default chat;