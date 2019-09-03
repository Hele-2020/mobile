import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
export default class BlocComments extends Component {
  render() {
    const { message, date, name } = this.props
    return (
      <View style={styles.view}>
        <View style={styles.flexColumn}> 
          <Text style={styles.textBold} >{ name }</Text>
          <Text style={styles.textBold} >{ date }</Text>
        </View>
        <Text style={styles.text} >{ message }</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    marginLeft: "3%",
    marginRight: "3%",
    // backgroundColor:"white",
  },
  stretchImg: {
    resizeMode:"contain",
    width: 35,
    height: 35,
    marginRight: '2%',
    },
  textBold: {
    fontWeight : "bold",
    color: "#59358B",
    
  },
  flexColumn: {
    display: "flex",
    flexDirection:"column",
  }
});