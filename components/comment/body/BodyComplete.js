import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import BlocPost from '././infoPost/BlocPost.js';
import BackgroundComment from './comments/BackgroundComment.js';
<<<<<<< Updated upstream
// import comment from '../../SocketConn.js';
// import Api from '../../../config/Api.js'
=======
import response from '../../SocketConn.js';
>>>>>>> Stashed changes
export default class BodyComplete extends Component {
  constructor(props) {
    super(props);
<<<<<<< Updated upstream
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
    return fetch('http://d990dc07.ngrok.io/v1/post/:id')
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
=======
    this.state = {
      comments: [],
      dataComments: []
    }
    // response.on('send', (messageSock) => {
    //   this.setState({ comments: [...this.state.comments, messageSock] })
    // })
  }
  componentDidMount() {
    fetch('https://422476ac.ngrok.io/v1/response')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataComments: responseJson
        })
      }).catch((error) => {
        console.error(error);
      });
  }
  render() {
    const NewComment = this.state.comments.map((response, key) => (
      <BackgroundComment key={key} message={response.content} date={response.created_at} name={response.user.username} />)
>>>>>>> Stashed changes
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
