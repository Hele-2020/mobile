import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
// import LogoHele from './LogoHele.js';

export default class BlocHeader extends Component {
  render() {
    return (
      <View style={styles.view}>
       
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
    marginLeft: 40,
    marginTop: 20,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white"
  }
});
 // <LogoHele />