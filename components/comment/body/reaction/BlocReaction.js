import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Instructif from './Instructif.js';
import ActionComments from './ActionComments.js';
import AllComments from './AllComments.js';

export default class BlocReaction extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Instructif />
        <ActionComments />
        <AllComments />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    borderTopColor: "#FBBA00",
    borderBottomColor: "#FBBA00",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-around",
    backgroundColor: "yellow",
    height: "auto",
    }
});