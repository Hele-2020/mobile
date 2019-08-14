import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import LogoNewPost from './LogoNewPost.js';

export default class BlocHeader extends Component {
  render() {
    return (
      <View style={styles.view}>
        <LogoNewPost />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    flex: 0.8,
    alignContent: "space-around",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 40,
    marginTop: 20,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white"
  }
});