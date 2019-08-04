import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class ProfilPicturePost extends Component {
    render() {
    return (
        <View>
        <Image style={styles.stretchImg}
        source={require('../../../../assets/logohele.png')} />
        </View>
        );
    }
}
const styles = StyleSheet.create({
    stretchImg: {
        resizeMode:"contain",
        width: 35,
    }
  });

