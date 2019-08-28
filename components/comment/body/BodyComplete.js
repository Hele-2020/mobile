import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import BlocPost from './infoPost/BlocPost.js';
import BackgroundComment from './comments/BackgroundComment.js';

// import Api from '../../../config/Api.js'

export default class BodyComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      dataSource: []
    };
  }
  
  componentDidMount() {
    comment.on('send', (messageSock) => {
      this.setState({ messages: [...this.state.messages, messageSock] })
    })
    const { navigation } = this.props
    const post_id = navigation.getParam('post_id');
    console.log(post_id)
    fetch('https://api.hélé.fr/v1/post/' + post_id)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson,
        })
      }).catch((error) => {
        console.error(error);
      });
  }
  render() {
    
  
    // const { navigation } = this.props
    const post_name = navigation.getParam('post_name');
    const post_date = navigation.getParam('post_date');
    const post_message = navigation.getParam('post_message');

    const HttpReply = this.state.dataSource.map((message, key) => (
      <BackgroundComment {...this.props} key={key} message={message.content} date={message.created_at} name={message.user.username} />)
    )
    const NewComment = this.state.messages.map((message, key) => (
      <BackgroundComment key={key} message={message.message} date={message.date} name={message.name} />)
    )
    return (
      <View style={styles.view}>
        <BlocPost
          post_name={post_name}
          post_date={post_date}
          post_message={post_message} />
        {HttpReply}
      </View>,
      <View style={styles.view}>
        <BlocPost
          post_name={post_name}
          post_date={post_date}
          post_message={post_message} />
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
