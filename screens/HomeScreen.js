import React, { Component } from 'react';
import axios from 'axios';
import Api from '../config/Api';
import { AsyncStorage, StyleSheet, Button, View, TouchableOpacity, Text } from 'react-native';
import ThreeAxisSensor from 'expo-sensors/build/ThreeAxisSensor';
import AdviceCard from '../components/AdviceCard'

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

    constructor(props) {
        super(props);
        this.state = {
            chats: [],
            id: "",
        };        
    }

    componentDidMount(){ 
        this.setState( { Roles : await AsyncStorage.getItem('userRoles')});
        this._userToken();
    };

    _userToken = async () => {
        const token = await AsyncStorage.getItem("userToken");
        const headers = {
            'Authorization': "bearer " + token
        };
        axios({
            method: 'GET',
            url: (Api.url('/chat')),
            headers: headers,
        }).then((response) => {
            //console.log(response)
            this.setState({
                chats: response.data
            });
            //console.log(this.state.chats)
        }).catch((error) => {
            console.log(error);
        });

    };

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
            {this.state.chats.map((index) =>
                <TouchableOpacity key={index.id} onPress={(event) => this._chat(event, index)}>
                    <Text>Conversation {(index.users.map((username) => 
                    username.username).join(", "))}</Text>
                </TouchableOpacity>
            )}
                <Button title='Ouvrir un Créneau' onPress={this._SlotAsync} />
                <AdviceCard/>
                <Button title="Actually, sign me out :)" onPress={this._signOutAsync} /> 
                {this.displayButtonPro()}
                <Button title="Map" onPress={this._MapAsync} />
                {this.displayButtonYoung()}
                <Button title="Listes des Articles" onPress={this._ArticleAsync} />
                <Button title="PostPro" onPress={this._PostProAsync} />
            </View>
        );
    }
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };

    _chat = async (event, index) => {
        let username = (index.users.map((username) => 
        username.username).join(", "));
        //console.log(username)
        let cle = index.id;
        this.props.navigation.navigate('Chat', {
            Id: cle,
            users: username
        });
    }
    
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

    _ArticleAsync = async () => {
        this.props.navigation.navigate('Articles')
    }
    _PostProAsync = async () => {
        this.props.navigation.navigate('PostPro');
    };
}
