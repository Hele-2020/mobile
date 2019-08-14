import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ReturnPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: " BlaBlablaBlaBlablaBlaBlablaBlaBlablaBlaBlablaBlaBlablaBlaBlablaBlaBlablaBlaBlablaBlaBlablaBlaBlabla"
    };
  }
  render() {
    return (
      <View style={styles.view}>
        {/* Utilisation de la base de donnée pour recuperer le Post */}
        <Text style={styles.text} >{this.state.titleText}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    backgroundColor: "orange",
    flexWrap: "wrap",
    width: "100%",
    flexDirection: "row"
  },
  text: {
    fontSize: 15,
    color: "#59358B",
  }
});