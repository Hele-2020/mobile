import React, { Component } from 'react';
import axios from 'axios';
import Api from '../config/Api';

import { AsyncStorage, StyleSheet, Button, View, TouchableOpacity, Text } from 'react-native';

export default class HomeScreen extends Component {
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

    

    render() {
        return (
            <View>
            <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
            {this.state.chats.map((index) =>
                // <View key={index}>
                //     <Button title="Chat"/>
                // </View>
                <TouchableOpacity key={index.id} onPress={(event) => this._chat(event, index)}>
                    <Text>Conversation {(index.users.map((username) => 
                    username.username).join(", "))}</Text>
                </TouchableOpacity>
            )}
                <Button title='Ouvrir un Créneau' onPress={this._SlotAsync} />
                <Button title="Map" onPress={this._MapAsync} />
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
}
