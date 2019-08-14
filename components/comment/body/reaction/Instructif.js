import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class Instructif extends Component {
  state = {
    oneShoot: true,
    count: 0
  }
  HandleClick = (event) => {
    event.preventDefault()
    let count = this.state.count
    if(this.state.oneShoot){
      count++
      this.setState({count})
      this.setState({oneShoot: false})
    }else{
      count--
      this.setState({count})
      this.setState({oneShoot: true})
    }
  }
  render() {
    return (
      <View style={styles.view}>
        <TouchableOpacity onPress={this.HandleClick} style={styles.touchableReturnPost}>
          <Text style={styles.text}>{this.state.count} Instructif</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    backgroundColor: "white",
    justifyContent: "center",
    flexWrap: "wrap",
    alignSelf: "stretch",
  },
  touchableReturnPost: {
    paddingBottom: 10,
    paddingTop: 10
  },
  text: {
    fontSize: 12,
    color: "#59358B",
  }
});