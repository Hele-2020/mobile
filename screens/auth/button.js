import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, TextInput, Button, View, KeyboardAvoidingView } from 'react-native';

import axios from 'axios';
import Api from '../../config/Api';
import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';

export default class Buttons extends Component {
   
  render() {
        return (
            <KeyboardAvoidingView style={{flex: 1, justifyContent: 'center', alignItems: 'stretch', margin: 20}} behavior='padding'>
                 <View style = {styles.buttonLogin}>
            <Button  color='white'  title="Login" onPress={this._loginAsync}  />
            </View>
            <View style={styles.buttonRegister}>
            <Button color='white' title="Register" onPress={this._redirectRegister}  style={styles.buttonRegister}/>
            </View>
            </KeyboardAvoidingView>
        );
    };
   
}
    const styles = StyleSheet.create({
        // Valider:{
        //     backgroundColor: '#59358B',
        //     borderRadius: 20,
        //     marginBottom: 10,
        //     top: '30%'
        // },
         buttonLogin:{
        backgroundColor: '#59358B',
        borderRadius: 20,
        marginBottom: 10,
        top: '30%',
        padding: 7
    },
    buttonRegister:{
        backgroundColor: '#FBBA00',
        borderRadius: 20,
        top: '30%',
        padding: 7
    },
    })