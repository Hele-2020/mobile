import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Instructif from './Instructif.js';
import ActionComments from './ActionComments.js';
import AllComments from './AllComments.js';

export default class BlocReaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    return (
      <View style={styles.view}>
        <Instructif />
        <ActionComments {...this.props}/>
        <AllComments />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    paddingLeft: 10,
    paddingRight: 10,
    borderTopColor: "#FBBA00",
    borderBottomColor: "#FBBA00",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-around",
    // backgroundColor: "yellow",
    height: "auto",
    marginTop: 10,
    marginBottom: 10,
    }
});