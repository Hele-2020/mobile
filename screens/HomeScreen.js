import React, { Component } from 'react'
import { AsyncStorage, Button, View,Text } from 'react-native';
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
    }

    displayButtonPro() {
        if (this.state.Roles === 'PROFESSIONAL') {
            return  (<><Button title='Crée un Créneaux' onPress={this._SlotAsync} />
                    <View><Button title='Mes Créneaux' onPress={this._SlotindexAsync} /></View>
                   </> )
        }
    }

    displayButtonYoung() {
        if (this.state.Roles === 'YOUNG') {
            return  <Button title="Voir les créneaux disponibles" onPress={this._SlotSelectorAsync} />
        }
    }

    render() {
        return (
            <View>
                <Button title="Actually, sign me out :)" onPress={this._signOutAsync} /> 
                {this.displayButtonPro()}
                <Button title="Map" onPress={this._MapAsync} />
                {this.displayButtonYoung()}
                <Button title="PostPro" onPress={this._PostProAsync} />
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
    _SlotindexAsync = async =>{
        this.props.navigation.navigate('IndexSlot')
    }

    _PostProAsync = async () => {
        this.props.navigation.navigate('PostPro');
    };
}
