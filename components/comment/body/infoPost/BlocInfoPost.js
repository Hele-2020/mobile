import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ProfilPicturePost from  './ProfilPicturePost.js';
import NamePsy from './NamePsy.js';
import DatePost from './DatePost.js';
import BlocPost from './BlocPost.js';

export default class BlocInfoPost extends Component {
  render() {
    return (
      <View style={styles.view}>
        <ProfilPicturePost />
        <NamePsy />
        <DatePost />
        <BlocPost />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    flex: 0.8,
    alignContent: "space-around",
    alignItems: "center",
    // justifyContent: "flex-start",
    marginLeft: 40,
    marginTop: 20,
    flexDirection: "column",
    width: "100%",
    backgroundColor: "red"
  }
});