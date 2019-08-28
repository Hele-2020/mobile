import React, { Component } from 'react'
import { AsyncStorage, StyleSheet, TextInput, Button, View, KeyboardAvoidingView, Text, TouchableOpacity, Image} from 'react-native';
import {Platform} from 'react-native';

import axios from 'axios';

import Api from '../../config/Api';
import Hele from './LogoHele300.png';



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
            <KeyboardAvoidingView style={{flex: 1, justifyContent: 'center', alignItems: 'stretch', margin: 20, }} behavior='padding' >
            <View>
            <Image
            style={styles.stretch}
            source={require('./LogoHele300.png')}/>
            </View> 
            <Text style= {styles.Text} >Connexion </Text>    
            <TextInput  style={styles.TextInput} value={this.state.phone} onChangeText={text => this.setState({phone: text})} textContentType='telephoneNumber' placeholder="Phone" />
            <TextInput  style={styles.TextInput} value={this.state.password} onChangeText={text => this.setState({password: text})} textContentType='password' secureTextEntry={true} placeholder="Password" />
            <TouchableOpacity
            style = {styles.buttonLogin}
            onPress={this._loginAsync} >
            <Text  style = {styles.Login}> Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonRegister}
            onPress={this._redirectRegister}  style={styles.buttonRegister} >
            <Text  style = {styles.Register}> Register</Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
            );
        };
        
        _loginAsync = () => {
            axios.post(Api.url('/auth/login'), this.state)
            .then(async response => {
                
                await AsyncStorage.setItem('userToken', response.data.access_token.token);
                await AsyncStorage.setItem('userId', response.data.user.id.toString());
                await AsyncStorage.setItem('userUsername', response.data.user.username.toString());
                
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
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            ...Platform.select({
              ios: {
                backgroundColor: 'red',
              },
              android: {
                backgroundColor: 'blue',
              },
            }),
          },
    
        buttonLogin:{
            backgroundColor: '#59358B',
            borderRadius: 20,
            marginBottom: 10,
            bottom: '20%',
            padding: 7, 
            height: '6%'
        },
        buttonRegister:{
            backgroundColor: '#FBBA00',
            borderRadius: 20,
            bottom: '20%',
            padding: 7,
            height: '6%'
        },
        TextInput:{
            backgroundColor: 'white',
            width: 250,
            height: 38,
            fontSize: 15,
            color: '#59358B',
            left: '20%',
            bottom: '25%',
            borderBottomColor: '#FBBA00',
            borderBottomWidth: 1,
            
        },
        Text:{
            color: '#59358B',
            fontSize: 30,
            textAlign: 'center',
            bottom: '30%',
           
        },
        placeholder:{
            color: 'black'
        },
        Login:{
            textAlign: 'center',
            color: 'white',
            marginTop: '1%',
        },
        Register:{
            textAlign: 'center',
            color: 'white',
            marginTop: '1%'
        },
        stretch:{
            resizeMode: 'contain',
            width: '55%',
            height: '50%',
            bottom: '10%',
            left: '20%', 
            // backgroundColor: 'red'
        }
    })