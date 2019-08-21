import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class ActionComments extends Component {
  static navigationOptions = {
    title: 'PostComments',
  };
    constructor(props) {
        super(props);
        this.state = {
          
        };
      }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.view}>
        <TouchableOpacity style={styles.touchableComment} onPress={() => navigate('PostCommentsPsy', {})}>
          
        <Text style={styles.text} ><Image style={styles.stretchImg}
          source={require('../../../../assets/logoCommenter.png')} />commenter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    backgroundColor: "white",
    },
  touchableComment: {
    paddingBottom: 10,
    paddingTop: 10
    },
  text: {
    fontSize: 12,
    color: "#59358B",
    },
    stretchImg: {
      // backgroundColor: "red",
        resizeMode:"contain",
        width: 15,
        height: 15,
    }
});