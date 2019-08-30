import React, { Component } from 'react';
import {Platform} from 'react-native';
import { AsyncStorage, StyleSheet, TextInput, Button, View, KeyboardAvoidingView, Text, TouchableOpacity, Image} from 'react-native';
import axios from 'axios';
import Logo from '../../assets/LogoHele.svg';

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
            <KeyboardAvoidingView style={{flex: 1, justifyContent: 'center', margin: 20, }} behavior='padding' >
            <View style={styles.logo}>
            <Logo width={200} height={100}/>
            </View> 
            <Text style= {styles.Text} >Connexion</Text> 
            <View style={styles.input}>   
            <TextInput  style={styles.TextInput} value={this.state.phone} onChangeText={text => this.setState({phone: text})} textContentType='telephoneNumber' placeholder="Phone" />
            <TextInput  style={styles.TextInput} value={this.state.password} onChangeText={text => this.setState({password: text})} textContentType='password' secureTextEntry={true} placeholder="Password" />
            </View>
            <TouchableOpacity
            style = {styles.buttonLogin}
            onPress={this._loginAsync} >
            <Text  style = {styles.Login}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonRegister}
            onPress={this._redirectRegister}  style={styles.buttonRegister} >
            <Text  style = {styles.Register}>Register</Text>
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
                  
              },
              android: {
                backgroundColor: 'blue',
              },
            }),
          },
    
        buttonLogin:{
            ...Platform.select({
                ios: {
                backgroundColor: '#59358B',
                borderRadius: 20,
                marginBottom: 6,
                padding: 10,
                },
                android: {
                    backgroundColor: '#59358B',
                    borderRadius: 20,
                    marginBottom: 6,
                    padding: 6,
                },
              }),
            

        },
        buttonRegister:{
            
            ...Platform.select({
                ios: {
                backgroundColor: '#FBBA00',
                borderRadius: 20,
                marginBottom: 6,
                padding: 10,
                },
                android: {
                    backgroundColor: '#FBBA00',
                    borderRadius: 20,
                    marginBottom: 6,
                    padding: 6,
                },
              }),
            },
            
        TextInput:{
            ...Platform.select({
                ios: {
            backgroundColor: 'white',
            fontSize: 16,
            color: '#59358B',
            margin: 6,
            padding: 3,
            borderBottomColor: '#FBBA00',
            borderBottomWidth: 1,
                },
                android: {
            backgroundColor: 'white',
            fontSize: 15,
            margin: '1%',
            color: '#59358B',
            borderBottomColor: '#FBBA00',
            borderBottomWidth: 1,
                },
              }),
        },
        Text:{
            color: '#59358B',
            fontSize: 20,
            textAlign: 'center',
            marginBottom: '5%',
        },
        placeholder:{
            color: 'black'
        },
        Login:{
            textAlign: 'center',
            color: 'white',
        },
        Register:{
            textAlign: 'center',
            color: 'white',
        },
        logo:{
            justifyContent:"center",
            alignItems:"center",
            marginBottom:"6%"
        },
        input:{
            ...Platform.select({
                ios: {
            marginBottom:40,
            marginTop:20
                },
                android: {
            marginBottom:"10%"
                },
              }),
            }
            
    })