import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import BlocPost from '././infoPost/BlocPost.js';
import BackgroundComment from './comments/BackgroundComment.js';
// import comment from '../../SocketConn.js';
// import Api from '../../../config/Api.js'
export default class BodyComplete extends Component {
  constructor(props){
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
    return fetch('http://e6ad13e6.ngrok.io/v1/replies')
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
    const NewComment = this.state.messages.map((message, key) => (
      <BackgroundComment key={key} message={message.message} date={message.date} name={message.name} />)
    )
    return (
      
      <View style={styles.view}>
        <BlocPost {...this.props} />
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
