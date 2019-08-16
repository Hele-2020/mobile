import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import BlocPost from '././infoPost/BlocPost';
import chat from '../../SocketConn.js';

export default class BodyComplete extends Component {
  constructor(props){
    super(props);
      this.state = {
        messages: []
      }
    chat.on('send', (messageSock) => {
      this.setState({ messages: [...this.state.messages, messageSock] })
    })
  }
  render() {
    const NewPost = this.state.messages.map((message, key) => (
      <BlocPost key={key} message={message.message} date={message.date} name={message.name} />)
    )


    return (
      <View style={styles.view}>
        {NewPost}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    flex: 5,
    // backgroundColor: "blue",
    width: "100%",
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    alignContent: "flex-start",
  }
});