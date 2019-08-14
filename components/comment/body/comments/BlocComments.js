import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
// import NamePsyComment from './NamePsyComment.js';
// import BackgroundComment from './BackgroundComment.js';
// import ProfilPictureComments from './ProfilPictureComments.js';

export default class BlocComments extends Component {
  render() {
    return (
      <View style={styles.view}>
        <View style={styles.viewImg}>
          <Image style={styles.stretchImg}
            source={require('../../../../assets/logohele.png')} />
        </View>
        <View style={styles.viewBackComment}>
          <View style={styles.viewNamePsy}>
            <Text style={styles.textNamePsy} >Dr Robin</Text>
          </View>
          <View style={styles.viewCommentPsy}>
            <Text style={styles.textComment}>'Oui mais non, peut être que ... '</Text>
          </View>
        </View>
        {/* <ProfilPictureComments /> */}
        {/* <BackgroundComment /> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    height: "20%",
    // backgroundColor: "orange",
  },
  viewCommentPsy: {
    alignItems: "center",
    justifyContent: "center",
  },
  viewBackComment: {
    backgroundColor: "#F1F0EF",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "80%",
    height: "auto",
    marginLeft: 15,
    padding: 7,
    borderRadius: 20,
  },
  viewName: {
    // backgroundColor: "white",
    alignItems: "flex-start",
  },
  viewImg: {
    alignItems: "flex-start",
    position: "relative",
    justifyContent: "center",
    alignContent: "flex-start",
    height: "40%",
  },
  stretchImg: {
    resizeMode: "contain",
    width: 35,
  },
  textComment: {
    color: "black",
    fontSize: 15,
  },
  viewNamePsy: {
    // backgroundColor: "white",
    alignItems: "flex-start",
  },
  textNamePsy: {
    fontSize: 15,
    fontWeight: 'bold',
    color: "black",
    // color: "#59358B",
  }
});