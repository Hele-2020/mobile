import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import BlocReaction from '../reaction/BlocReaction.js';

export default class BlocPost extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { message, date, name } = this.props
    return (
      <View style={styles.view}>
        <View style={styles.flexRow}>
          <Image style={styles.stretchImg}
              source={require('../../../../assets/logohele.png')} />
            <View style={styles.flexColumn}> 
          <Text style={styles.textBold} >{ name }</Text>
          <Text style={styles.textBold} >{ date }</Text>
          </View> 
        </View>
        <Text style={styles.text} >{ message }</Text>
        <BlocReaction />
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
  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    marginBottom: '5%',
  },
  flexColumn: {
    display: "flex",
    flexDirection:"column",
  }
});