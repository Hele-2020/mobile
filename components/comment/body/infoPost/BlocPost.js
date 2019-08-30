import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import BlocReaction from '../reaction/BlocReaction.js';

export default class BlocPost extends Component {
  render() {
    const {post_name, post_date, post_message} = this.props
    return (
      <View style={styles.view}>
        <View style={styles.flexRow}>
          <Image style={styles.stretchImg}
          source={require('../../../../assets/logohele.png')} />
            <View style={styles.flexColumn}> 
              <Text style={styles.textBold} >{ post_name }</Text>
              <Text style={styles.textBold} >{ post_date }</Text>
            </View> 
          </View>
          <Text style={styles.text} >{ post_message }</Text>
          <BlocReaction {...this.props}/>
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