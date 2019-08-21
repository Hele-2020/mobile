import React, { Component } from 'react';
import BodyComplete from '../../components/post/body/BodyComplete.js';
import PostNewPost from '../../components/post/footer/PostNewPost.js';
import { View, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default class PostsScreen extends Component {
  static navigationOptions = {
    title : 'PostPro',
  };
  constructor(props) {
    super(props);
    this.state = {
      status: false
    };
    this.newPost = this.newPost.bind(this);
  }
  newPost() {
    if (this.state.status == true) {
      this.setState({ status: false })
    }
    else {
      this.setState({ status: true })
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view}>
          <TouchableOpacity style={styles.touchableComment} onPress={this.newPost} >
            <Image style={styles.stretchImg}
              source={require('../../assets/nouveauPost.png')} />
          </TouchableOpacity>
        </View>
        <BodyComplete {...this.props}/>
        {this.state.status ? <PostNewPost /> : null}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    flex: 1,
    alignContent: "space-around",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: "3%",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white"
  },
  stretchImg: {
    resizeMode: "contain",
    width: 55,
  },
  touchableComment: {
    paddingBottom: 10,
    paddingTop: 10
  }
});