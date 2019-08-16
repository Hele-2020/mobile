import React, { Component } from 'react'
import { AsyncStorage, Button, View, Text } from 'react-native';

export default class SlotformScreen extends Component {
    static navigationOptions = {
        title: 'Crée un créneau',
    };

    render() {
        return (
            <View>
                <Text>Hello Girl</Text>
                <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
            </View>
        );
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}