import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import NamePsyComment from './NamePsyComment.js';
import BackgroundComment from './BackgroundComment.js';
import ProfilPictureComments from './ProfilPictureComments.js';

export default class BlocComments extends Component {
  render() {
    return (
      <View style={styles.viewG}>
            <ProfilPictureComments />
            <BackgroundComment />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    viewG: {
      paddingLeft: 10,
      paddingRight: 10,
      flexDirection: "row",
      height: "20%",
      backgroundColor: "orange",
    }
});