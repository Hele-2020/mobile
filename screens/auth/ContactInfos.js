import React, { Component } from 'react'
import { AsyncStorage, StyleSheet, TextInput, Button, View, KeyboardAvoidingView, Text, TouchableOpacity, Image} from 'react-native';
import {Platform} from 'react-native';

import axios from 'axios';
import Logo from '../../assets/LogoHele.svg';
import Api from '../../config/Api';



export default class ContactInfos extends Component {
    static navigationOptions = {
        title: 'Contact',
    };
    
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }
    
    render() {
        return (
            <KeyboardAvoidingView style={{flex: 1, justifyContent: 'center', margin: '11%', }} behavior='padding' >
            <View style={styles.logo}>
            <Logo width={200} height={100}/>
            </View> 
            <Text style= {styles.Text}>Contact</Text> 
            <View style={styles.input}>   
            <TouchableOpacity
            style = {styles.button}
            onPress={this._contact}  
            > <Text  style={styles.titre}>Numéro : 3020</Text>
            </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
            );
        };
        // _redirectRegister = () => {
        //     this.props.navigation.navigate('HomeScreen');
        // }
    }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            ...Platform.select({
              ios: {
                  
              },
              android: {
                // backgroundColor: 'blue',
              },
            }),
          },
          Text:{
            color: '#59358B',
            fontSize: 20,
            textAlign: 'center',
            marginBottom: '5%',
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
        },
        button:{
                
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
        logo:{
            justifyContent:"center",
            alignItems:"center",
            marginBottom:"6%"
        },
    
    })