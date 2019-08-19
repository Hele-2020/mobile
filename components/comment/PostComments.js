import React, { Component } from 'react';
import BlocHeader from './header/BlocHeader';
import BodyComplete from './body/BodyComplete.js';
import PostNewComment from './footer/PostNewComment.js';
import { View, StyleSheet} from 'react-native';

export default class PostComments extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.view}>
        <BlocHeader />
        <BodyComplete />
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