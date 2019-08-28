import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, TextInput, Button, View, KeyboardAvoidingView, Text } from 'react-native';

import axios from 'axios';
import Api from '../../config/Api';
import LoginScreen from './LoginScreen';

export default class Welcome extends Component {
  render() {
        return (
            <KeyboardAvoidingView style={{flex: 1, justifyContent: 'center', alignItems: 'stretch', margin: 20}} behavior='padding'>
           <Text>Welcome Hélé</Text> 
           <View style = {styles.buttonLogin}>
            <Button  color='white' style={styles.buttonLogin} title="Login" onClick={this.setRedirect}  />
            </View>
            </KeyboardAvoidingView>
        );
       
    };
}
    const styles = StyleSheet.create({
        buttonLogin:{
            backgroundColor: '#59358B',
            borderRadius: 20,
            marginBottom: 10,
            top: '30%',
            padding: 7
        },
    })