import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import BlocPost from '././infoPost/BlocPost.js';
import BackgroundComment from './comments/BackgroundComment.js';
import post from '../../SocketConn.js';
export default class BodyComplete extends Component {
  constructor(props){
    super(props);
      this.state = {
        messages: []
      }
    post.on('send', (messageSock) => {
      this.setState({ messages: [...this.state.messages, messageSock] })
    })
  }
  render() {
    const NewComment = this.state.messages.map((message, key) => (
      <BackgroundComment key={key} message={message.message} date={message.date} name={message.name} />)
    )
    return (
      
      <View style={styles.view}>
        <BlocPost /*{}*/ />
        {NewComment}
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
    alignContent: "flex-start",
  }
});
