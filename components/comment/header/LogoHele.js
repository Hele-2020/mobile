import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class LogoHele extends Component {
    render() {
    return (
        <View>
        <Image style={styles.stretch}
        source={require('../../../assets/logohele.png')} />
        </View>
        );
    }
}
const styles = StyleSheet.create({
    stretch: {
    resizeMode:"contain",
      width: 55,
    //   height: 70
    }
  });

