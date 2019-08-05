import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

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
        alignItems: "flex-start",
        height: "25%",
        justifyContent: "center",
        alignContent: "flex-start",
        // backgroundColor: "white"
    },
    stretchImg: {
        resizeMode:"contain",
        width: 35,
    },
});