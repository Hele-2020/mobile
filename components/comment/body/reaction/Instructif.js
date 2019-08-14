import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

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
    constructor(props) {
        super(props);
        this.state = {
          
        };
      }
  render() {
    return (
      <View style={styles.view}>
        <TouchableOpacity onPress={this.HandleClick} style={styles.touchableReturnPost}>
          <Text style={styles.text}>{this.state.count} Instructif</Text>
        <TouchableOpacity style={styles.touchableInstructif}>
          <Text style={styles.text} >
            <Image style={styles.stretchImg}
            source={require('../../../../assets/logoInstructif.png')} />instructif
          </Text>
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
    },
  touchableInstructif: {
    paddingBottom: 10,
    paddingTop: 10
  },
  text: {
    fontSize: 12,
    color: "#59358B",
  }
    },
  stretchImg: {
    backgroundColor: "red",
      resizeMode:"contain",
      width: 15,
      height: 15,
  }
});