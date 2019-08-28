import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import BlocPost from '././infoPost/BlocPost';
import post from '../../SocketConn';
import Api from '../../../config/Api.js'
console.log(post)

export default class BodyComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      dataSource: []
    }
    // post.on('send', (messageSock) => {
    //   this.setState({ messages: [...this.state.messages, messageSock] })
    // })
  }
    componentDidMount(){
      fetch('https://api.hélé.fr/v1/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson,
        }, function () {

        });
      })
      .catch((error) => {
        console.error(error);
      });
    }
    

  render() {
    const HttpPost = this.state.dataSource.map((message, key) => (
      <BlocPost {...this.props} key={key} id={message.id} message={message.content} date={message.created_at} name={message.user.username} />)
    )
    const NewPost = this.state.messages.map((message, key) => (
      <BlocPost {...this.props.post} key={key} message={message.message} date={message.date} name={message.name} />)
    ) 
    return (
      <View style={styles.view}>
        <FlatList
          data={[{ key: 'key', HttpPost }]}
          renderItem={({ item }) =>
            <View style={styles.view} key={item.key} >{item.HttpPost}</View>}
        />
      </View>,
      <View style={styles.view}>
        <FlatList 
        data={[{key: 'key', NewPost}]}
        renderItem={({item}) => 
        <View style={styles.view} key={item.key} >{item.NewPost}</View>}
        />
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