import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import { StyleSheet, View } from 'react-native';
import BlocHeader from './components/comment/header/BlocHeader.js';
import BodyComplete from './components/comment/body/BodyComplete.js';
// import PostNewComment from './components/comment/footer/PostNewComment.js';
import Ws from '@adonisjs/websocket-client'


export default function App() {
  const ws = Ws('ws://0.tcp.ngrok.io:15793')
  ws.connect()
  const chat = ws.subscribe('chat')
  chat.emit('message', 'hello world')
  chat.on('send', (message) => {
    console.log('le message du server adonis',message)
  })


  // ws.on('close', () => '{
  //   isConnected = false
  // })

  return (
    <View style={styles.container}>
      <BlocHeader />
      <BodyComplete />
      {/* <PostNewComment /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
