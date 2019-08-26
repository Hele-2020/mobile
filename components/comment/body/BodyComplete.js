import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import BlocPost from '../../post/body/infoPost/BlocPost.js';
import BackgroundComment from './comments/BackgroundComment.js';
// import comment from '../../SocketConn.js';
// import Api from '../../../config/Api.js'

export default class BodyComplete extends Component {
  constructor(props) {
    super(props);
      this.state = {
        messages: [],
        dataSource: []
      };
    }
  //   comment.on('send', (messageSock) => {
  //     this.setState({ messages: [...this.state.messages, messageSock] })
  //   })
  // }
  componentDidMount(){
    return fetch('http://87abcbf4.ngrok.io/v1/post/:id')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        dataSource: responseJson,
      }, function(){

      });

    })
    .catch((error) =>{
      console.error(error);
    });
  }
  render() {
    console.log(this.state.dataSource)
    const HttpReply = this.state.dataSource.map((message, key) => (
      <BackgroundComment key={key} message={message.content} date={message.created_at} name={message.user.username} />)
    )
    const NewComment = this.state.messages.map((message, key) => (
      <BackgroundComment key={key} message={message.message} date={message.date} name={message.name} />)
    )
    return (
      <View style={styles.view}>
        <BlocPost {...this.props} />
        {HttpReply}
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
