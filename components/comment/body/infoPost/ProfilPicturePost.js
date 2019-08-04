import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class ProfilPicturePost extends Component {
    render() {
    return (
        <View style={styles.view}>
        <Image style={styles.stretchImg}
        source={require('../../../../assets/logohele.png')} />
        </View>
        );
    }
}
const styles = StyleSheet.create({
    view: {
        // flex: 1,
        alignItems: "flex-start",
        // alignContent: "stretch",
        position: "relative",
        // alignContent: "space-around",
        justifyContent: "center",

        alignContent: "flex-start",
        // width: "20%",
        // alignItems: "flex-start",
        // flexDirection: "row",
        // justifyContent: "space-around",
        height: "40%",
        backgroundColor: "white"
    },
    stretchImg: {
        resizeMode:"contain",
        // alignContent: "flex-start",

        width: 35,
        
    },
  });

