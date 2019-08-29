import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Commenter from '../../../../assets/logoCommenter.svg';

export default class ActionComments extends Component {
  static navigationOptions = {
    title: 'PostComments',
  };
  render() {
    return (
      <View style={styles.view}>
        <TouchableOpacity style={styles.touchableComment} >
        <View style={styles.viewRow}><Commenter width={20} height={12}/>
        <Text style={styles.text}>commenter</Text>
        </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    backgroundColor: "white",
    display: "flex",

    },
    viewRow: {
      display: "flex",
      flexDirection: "row",
      alignItems:'center',
      },
  touchableComment: {
    paddingBottom: 10,
    paddingTop: 10
    },
  text: {
    paddingLeft:'1%',
    fontSize: 12,
    color: "#59358B",
    }
});