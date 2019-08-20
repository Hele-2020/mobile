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
                <Button title="Map" onPress={this._MapAsync} />
                <Button title="PostPro" onPress={this._PostProAsync} />
                <Button title="PostCommentsPsy" onPress={this._PostCommentsProAsync} />
            </View>
        );
    }
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };

    _MapAsync = async () => {
        this.props.navigation.navigate('Map');
    };

    _PostProAsync = async () => {
        this.props.navigation.navigate('PostPro');
    };

    _PostCommentsProAsync = async () => {
        this.props.navigation.navigate('PostCommentsPsy');
    };
}