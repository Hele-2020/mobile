import React, { Component } from 'react'
import { AsyncStorage, Button, View } from 'react-native';
import ThreeAxisSensor from 'expo-sensors/build/ThreeAxisSensor';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return (
            <View>
                <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
                <Button title='Ouvrir un Créneau' onPress={this._SlotAsync} />
                <Button title="Map" onPress={this._MapAsync} />
                <Button title="Voir les créneaux" onPress={this._SlotSelectorAsync} />
            </View>
        );
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
    
    _SlotAsync = async () => {
        this.props.navigation.navigate('Slotform');
    }
    
    _MapAsync = async () => {
        this.props.navigation.navigate('Map');
    };
    _SlotSelectorAsync = async => {
        this.props.navigation.navigate('SelectSlot')
    };
}
