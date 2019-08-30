import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ReturnPost from './ReturnPost';

export default class BlocHeader extends Component {
  render() {
    return (
      <View style={styles.view}>
        <ReturnPost />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    flex: 1.2,
    alignContent: "space-around",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: "3%",
    marginTop: "3%",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white"
  }
});
 