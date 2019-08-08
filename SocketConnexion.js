import Ws from '@adonisjs/websocket-client'


const ws = Ws('ws://0.tcp.ngrok.io:17823')

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImlhdCI6MTU2NTAwOTgyNH0.gIcTxtRItxTSlyuJQ1UPDLUtR87j_mjiUYHqkMtHros'

ws
    .withJwtToken(token)
    .connect()

const chat = ws.subscribe('chat:2')

chat.on('error', (e) => {
    console.log('error is', e);
})

export default chat;