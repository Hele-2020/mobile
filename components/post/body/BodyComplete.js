import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import BlocPost from '././infoPost/BlocPost';
//import post from '../../SocketConn.js';

export default class BodyComplete extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages: [],
      dataSource: []
    }
  }
/*    post.on('send', (messageSock) => {
      this.setState({ messages: [...this.state.messages, messageSock] })
    })*/

    componentDidMount(){
      return fetch('http://68213064.ngrok.io/v1/posts')
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
    const HttpPost = this.state.dataSource.map((message, key) => (
      <BlocPost {...this.props} key={key} message={message.content} date={message.created_at} name={message.user.username} />)
    )
    const NewPost = this.state.messages.map((message, key) => (
      <BlocPost {...this.props} key={key} message={message.message} date={message.date} name={message.name} />)
    ) 
    return (
      <View style={styles.view}>
      {HttpPost}
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