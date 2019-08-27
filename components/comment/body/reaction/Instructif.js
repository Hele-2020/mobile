import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LogoInstructif from '../../../../assets/logoInstructif.svg';

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
        <View style={styles.viewRow}><LogoInstructif width={20} height={17}/>
        <Text style={styles.text}>{this.state.count} instructif</Text>
        </View>

        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    backgroundColor: "white",
    },
    viewRow: {
      display: "flex",
      flexDirection: "row",
      alignItems:'center'

      },
  touchableReturnPost: {
    paddingBottom: 10,
    paddingTop: 10
    },
  text: {
    paddingLeft:'1%',
    fontSize: 12,
    color: "#59358B",
    },
});