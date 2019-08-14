import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import { View, KeyboardAvoidingView, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import BlocHeader from './components/comment/header/BlocHeader.js';
import Tchat from './components/comment/body/Tchat.js';
// import PostNewComment from './components/comment/footer/PostNewComment.js';
import chat from './components/SocketConn.js';


export default class App extends Component {

  constructor() {
    super()
    this.state = {
      text: '',
      messages: []
    }
    console.log(chat)
    chat.on('send', (message) => {
      this.setState({ messages: [ ...this.state.messages, message] })
    })
  }

  render(){
    onPress = () => {
      const message = {
        message: this.state.text
      }
      console.log(message)
      chat.emit('message', message)
    }
    const tchat = this.state.messages.map( (message, key) => (
        <Tchat key={key} message={message.message}/>)
      )
      return (
        <View style={styles.container}>
        <BlocHeader />
        { tchat }
        {/* <PostNewComment responseMsg={this.responseMsg} /> */}
        <View style={styles.viewPost} >
          <TextInput style={styles.textInput} placeholder="votre commentaire ... "
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text} autoCorrect={false} />
           <TouchableOpacity 
            onPress={() => onPress()}
            style={styles.touchableButton}>
             <Text>Envoyer</Text> 
           </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    flex: 1,
    justifyContent: 'space-between',
  },
  viewPost: {
    flex: 0.6,
    alignContent: "space-around",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    borderStyle: "solid",
    borderTopWidth: 1,
    borderTopColor: "#FBBA00"
  },
  textInput: {
    marginBottom: 0,
    height: 37,
    borderRadius: 50,
    backgroundColor: "#F1F0EF",
    color: "grey",
    width: "60%",
    paddingLeft: 10,
    fontSize: 17,
  },
  touchableButton: {
    backgroundColor: "#59358B",
    marginLeft: 10,
    color: "white",
    textDecorationColor: "white",
    borderRadius: 50,
  }
});
