import React, { Component } from 'react'
import { AsyncStorage, Button, View } from 'react-native';
import ThreeAxisSensor from 'expo-sensors/build/ThreeAxisSensor';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Roles:'',
        }
    }
    
    static navigationOptions = {
        title: 'Home',
    };

    async componentDidMount() {

        this.setState( { Roles : await AsyncStorage.getItem('userRoles')});
        console.log(this.state.Roles)
    }

    displayButtonPro() {
        if (this.state.Roles === 'PROFESSIONAL') {
            return  <Button title='Crée un Créneau' onPress={this._SlotAsync} />
        }
    }

    displayButtonYoung() {
        if (this.state.Roles === 'YOUNG') {
            return <Button title="Voir les créneaux disponibles" onPress={this._SlotSelectorAsync} />
        }
    }

    render() {
        return (
            <View>
                <Button title="Actually, sign me out :)" onPress={this._signOutAsync} /> 
                {this.displayButtonPro()}
                <Button title="Map" onPress={this._MapAsync} />
                {this.displayButtonYoung()}
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
