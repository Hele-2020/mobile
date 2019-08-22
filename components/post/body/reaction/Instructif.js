import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class Instructif extends Component {
  constructor(props){
    super(props);
  }
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
        <TouchableOpacity style={styles.touchableReturnPost} onPress={this.HandleClick}> 
        <Text style={styles.text} ><Image style={styles.stretchImg}
        source={require('../../../../assets/logoInstructif.png')} /> {this.state.count} instructif</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    backgroundColor: "white",
    },
  touchableReturnPost: {
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