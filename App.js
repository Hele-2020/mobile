import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
// import BlocHeader from './components/post/header/BlocHeader.js';
import BodyComplete from './components/post/body/BodyComplete.js';
import PostNewPost from './components/post/footer/PostNewPost.js';
// import { createStackNavigator,createAppContainer } from 'react-navigation';
import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import { View, KeyboardAvoidingView, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import BlocHeader from './components/comment/header/BlocHeader.js';
import Tchat from './components/comment/body/Tchat.js';
// import PostNewComment from './components/comment/footer/PostNewComment.js';
import chat from './components/SocketConn.js';

// const AppStackNavigator = createStackNavigator({
//   // Login : { screen : ConnexionPage },
//   // Register : { screen : InscriptionPage }
// });
// const AppContainer = createAppContainer(AppStackNavigator);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status:false
    };
    this.newPost = this.newPost.bind(this);
  }
    newPost() {
      console.log('newPost')
      if(this.state.status == true) {
        this.setState({status: false})
          }
      else {
        this.setState({status: true})
      }
    }
render() {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <TouchableOpacity style={styles.touchableComment} onPress={this.newPost} >
            <Image style={styles.stretchImg}
            source={require('./assets/nouveauPost.png')} />
        </TouchableOpacity>
      </View>
      <BodyComplete />
      {this.state.status ? <PostNewPost /> : null}
    </View>
  );
  }

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
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  view: {
    flex: 1,
    alignContent: "space-around",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: "3%",
    marginTop: "7%",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white"
  },
  stretchImg: {
    resizeMode:"contain",
    width: 55,
},
touchableComment: {
    paddingBottom: 10,
    paddingTop: 10
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
