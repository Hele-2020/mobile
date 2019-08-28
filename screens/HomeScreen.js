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

    displayButton() {
        if (this.state.Roles === 'PROFESSIONAL') {
            return  <Button title='Ouvrir un Créneau' onPress={this._SlotAsync} />
        }
    }

    render() {
        return (
            <View>
                <Button title="Actually, sign me out :)" onPress={this._signOutAsync} /> 
                {this.displayButton()}
                <Button title="Map" onPress={this._MapAsync} />
                <Button title="Voir les créneaux" onPress={this._SlotuserUserRolesuserUserRolesuserUserRolesuserUserRolesuserUserRolesuserUserRolesuserUserRolesuserUserRolesSelectorAsync} />
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
