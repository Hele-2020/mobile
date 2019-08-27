import React, { Component } from 'react';
import BodyComplete from '../../components/comment/body/BodyComplete.js';
import PostNewComment from '../../components/comment/footer/PostNewComment.js';
import { View, StyleSheet} from 'react-native';

export default class PostCommentsScreen extends Component {
  static navigationOptions = {
    title : 'PostComments',
  };
  render() {
    const { navigation } = this.props
    const post_id = navigation.getParam('post_id');

    return (
      <View style={styles.view}>
        <BodyComplete {...this.props}/>
        <PostNewComment id={post_id} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    view: {
      flex: 1,
      width: "100%",
      alignItems: 'center',
      justifyContent: 'center',
    }
});