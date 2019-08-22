import React, { Component } from 'react'

import {
    AsyncStorage,
    Clipboard,
    StyleSheet,
    TextInput,
    Button,
    View,
    KeyboardAvoidingView
} from 'react-native';

import axios from 'axios';

import Api from '../../config/Api';

export default class RegisterScreen extends Component {
    static navigationOptions = {
        title: 'Register',
    };

    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            username: '',
            age: '',
            region_id: ''
        };
    }

    render() {
        return (
            <KeyboardAvoidingView style={{flex: 1, justifyContent: 'center', alignItems: 'stretch', margin: 20}} behavior='padding'>

                <TextInput value={this.state.phone} onChangeText={text => this.setState({phone: text})} textContentType='telephoneNumber' placeholder="Phone" />
                <TextInput value={this.state.username} onChangeText={text => this.setState({username: text})} textContentType='username' placeholder="Username" />
                <TextInput value={this.state.age} onChangeText={text => this.setState({age: text})} placeholder="Age" />
                <TextInput value={this.state.region_id} onChangeText={text => this.setState({region_id: text})} textContentType='addressState' placeholder="Region" />

                <Button title="Register !" onPress={this._registerAsync} />
                <Button title="Login" onPress={this._redirectLogin} />

            </KeyboardAvoidingView>
        );
    };

    _registerAsync = () => {
        axios.post(Api.url('/auth/register'), this.state)
        .then(async response => {
            if (response.data.password) {
                await Clipboard.setString(response.data.password)
                alert(
                    "Mot de passe copié dans le presse papier:\n\n" +
                    response.data.password
                )
            }
            this.props.navigation.navigate('Login');
        })
        .catch(error => {
            console.log(error.response.data);
        })
    };

    _redirectLogin = () => {
        this.props.navigation.navigate('Login');
    }
}
