import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import BlocPost from './infoPost/BlocPost.js';
import BackgroundComment from './comments/BackgroundComment.js';
import Connexion from '../../SocketConn.js';

export default class BodyComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
    Connexion().then(({ comment }) => {
      comment.on('send', (message) => {
        this.updateMessage(message, false)
      })
    })
  }

  updateMessage = (data, append) => {
    let array
    if (append === true) {
      array = [
        ...this.state.dataSource,
        ...data,
      ]
    } else {
      array = [
        data,
        ...this.state.dataSource,
      ]
    }
    array = array.filter((value, index, self) => index === self.findIndex(v => v.id === value.id))
    this.setState({ dataSource: array })
  }

  componentDidMount() {
    const { navigation } = this.props
    const post_id = navigation.getParam('post_id');
    fetch('https://api.hélé.fr/v1/post/' + post_id)
      .then((response) => response.json())
      .then((responseJson) => {
        this.updateMessage(responseJson, true)
      }).catch((error) => {
        console.error(error);
      });
  }
  render() {
    const post_name = navigation.getParam('post_name');
    const post_date = navigation.getParam('post_date');
    const post_message = navigation.getParam('post_message');

    const NewComment = this.state.messages.map((message, key) => (
      <BackgroundComment {...this.props} key={key} message={message.content} date={message.created_at} name={message.user.username} />)
    )
    return (
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
    width: "100%",
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: "flex-start",
  }
});
