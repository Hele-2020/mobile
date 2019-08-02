import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export default class LogoHele extends Component {
    render() {
    return (
        <View>
            <Image style={{width: 50, height: 50}}
            source={require('.././assets/logohele.png')} />
        </View>
        );
    }
}