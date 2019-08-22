import React, { Component } from 'react';
import BodyComplete from '../../components/comment/body/BodyComplete.js';
import PostNewComment from '../../components/comment/footer/PostNewComment.js';
import { View, StyleSheet} from 'react-native';

export default class PostCommentsScreen extends Component {
  static navigationOptions = {
    title : 'PostComments',
  };
  constructor(props) {
    super(props);
  }
  render() {
    
    return (
      <View style={styles.view}>
        <BodyComplete {...this.props}/>
        <PostNewComment />
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