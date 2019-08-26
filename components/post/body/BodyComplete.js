import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import BlocPost from '././infoPost/BlocPost';
//import post from '../../SocketConn.js';
// import Api from '../../../config/Api.js'

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
<<<<<<< Updated upstream
      return fetch('http://d990dc07.ngrok.io/v1/posts')
=======
      fetch('https://422476ac.ngrok.io/v1/posts')
>>>>>>> Stashed changes
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson
      })
    }).catch((error) =>{
        console.error(error);
      });
    }

  render() {
    const HttpPost = this.state.dataSource.map((message, key) => (
      <BlocPost {...this.props} key={key} message={message.content} date={message.created_at} name={message.user.username} />)
    )
    // const NewPost = this.state.messages.map((message, key) => (
    //   <BlocPost {...this.props} key={key} message={message.message} date={message.date} name={message.name} />)
    // ) 
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