import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ProfilPicturePost from  './ProfilPicturePost.js';
import NamePsy from './NamePsy.js';
import DatePost from './DatePost.js';
import BlocPost from './BlocPost.js';

export default class BlocInfoPost extends Component {
  render() {
    return (
      <View style={styles.view}>
        <View style={styles.viewInfoProfil}>  
        <ProfilPicturePost />
            <View style={styles.viewInfo}>
                <NamePsy />
                <DatePost />
            </View>
        </View>
        <BlocPost />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    alignItems: "stretch",
    // flexDirection: "column",
    backgroundColor: "red",
    height: "auto",
    
},
viewInfoProfil: {
    flexWrap: "wrap",
    flexDirection: "row",
    // flexWrap: "nowrap"
},
viewInfo: {
    flexDirection: "column",
    width: "90%",
    height: "40%"
    },
});