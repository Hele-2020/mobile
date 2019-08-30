import React, { Component } from 'react'

import { AsyncStorage, StyleSheet, TextInput, Button, View, KeyboardAvoidingView } from 'react-native';

import axios from 'axios';

import Api from '../../config/Api';

export default class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Login',
    };

    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            password: ''
        };
    }

    render() {
        return (
            <KeyboardAvoidingView style={{flex: 1, justifyContent: 'center', alignItems: 'stretch', margin: 20}} behavior='padding'>

            <TextInput value={this.state.phone} onChangeText={text => this.setState({phone: text})} textContentType='telephoneNumber' placeholder="Phone" />
            <TextInput value={this.state.password} onChangeText={text => this.setState({password: text})} textContentType='password' secureTextEntry={true} placeholder="Password" />

            <Button title="Login !" onPress={this._loginAsync} />
            <Button title="Register" onPress={this._redirectRegister} />

            </KeyboardAvoidingView>
        );
    };

    _loginAsync = () => {
        axios.post(Api.url('/auth/login'), this.state)
        .then(async response => {
            
            await AsyncStorage.setItem('userToken', response.data.access_token.token);
            await AsyncStorage.setItem('userId', response.data.user.id.toString());
            await AsyncStorage.setItem('username', response.data.user.username.toString());
            await AsyncStorage.setItem('userRoles', response.data.user.roles.toString());
            this.props.navigation.navigate('App');
            
        })
        .catch(error => {
            console.log(error);
        })
    };

    _redirectRegister = () => {
        this.props.navigation.navigate('Register');
    }
}
