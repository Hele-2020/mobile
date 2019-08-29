import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import BlocPost from '././infoPost/BlocPost';
import Connexion from '../../SocketConn';

export default class BodyComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    }
    Connexion().then(({ post }) => {
      post.on('send', (message) => {
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
    fetch('https://api.hélé.fr/v1/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        this.updateMessage(responseJson, true)
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    const NewPost = this.state.dataSource.map((message, key) => (
      <BlocPost {...this.props} key={key} id={message.id} message={message.content} date={message.created_at} name={message.user.username} />)
    )

    return (
      <View style={styles.view}>
        <FlatList
          data={[{ key: 'key', NewPost }]}
          renderItem={({ item }) =>
            <View style={styles.view} key={item.key} >{item.NewPost}</View>}
        />
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
    alignItems: 'stretch',
    alignContent: "flex-start",
  }
});