import Ws from '@adonisjs/websocket-client'

const ws = Ws('ws://0.tcp.ngrok.io:14585')

ws
    .withJwtToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImlhdCI6MTU2NTAwOTgyNH0.gIcTxtRItxTSlyuJQ1UPDLUtR87j_mjiUYHqkMtHros')
    .connect()


    
const chat = ws.subscribe('chat:*')

export default chat;