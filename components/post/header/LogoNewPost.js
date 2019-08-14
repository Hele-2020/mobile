import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default class LogoNewPost extends Component {
    render() {
    return (
        <View>
            <Image style={styles.stretchImg}
            source={require('../../../assets/nouveauPost.png')} />
        </View>
        );
    }
}
const styles = StyleSheet.create({
    stretchImg: {
        resizeMode:"contain",
        width: 55,
    }
  });

