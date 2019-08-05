import React, { Component } from 'react'

import { AsyncStorage, StyleSheet, Button, View } from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return (
            <View>
            <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
            </View>
        );
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}
