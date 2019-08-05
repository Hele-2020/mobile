import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
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
            <BlocPost />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    paddingLeft: 10,
    paddingRight: 10,
    flexWrap: "wrap",
    // backgroundColor: "red",
},
viewInfoProfil: {
    flexWrap: "wrap",
    flexDirection: "row",
    width: "100%",
},
viewInfo: {
  flexWrap: "wrap",
    flexDirection: "column",
    width: "90%",
    height: "40%"
    },
});