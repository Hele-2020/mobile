import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default class ProfilPictureComment extends Component {
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
        position: "relative",
        justifyContent: "center",
        alignContent: "flex-start",
        height: "40%",
    },
    // backgroundColor: "pink"
    stretchImg: {
        resizeMode:"contain",
        width: 35,
    },
});