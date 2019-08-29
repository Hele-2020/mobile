import React, { Component } from 'react'

import { AsyncStorage, StyleSheet, Button, View, TouchableOpacity, KeyboardAvoidingView, Text } from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    };
    
    render() {
        return (
            <KeyboardAvoidingView style={{flex: 1, justifyContent: 'center', alignItems: 'stretch', margin: 20}} behavior='padding'>
            
            <TouchableOpacity
            style= {styles.Button}
            onPress={this._MapAsync} >
            <Text  style = {styles.titre}>Map</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style= {styles.Button}>
            <Text  style={styles.titre}>Chat Pro</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style= {styles.Button}>
            <Text  style={styles.titre}>Chat Privée</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style= {styles.Button}>
            <Text  style={styles.titre}>Mon calendrier</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style= {styles.Button}>
            <Text  style={styles.titre}>Mes Rdv</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style= {styles.ButtonContact}
            onPress={this._contact}  >
            <Text  style = {styles.titre}>Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style= {styles.ButtonDeconnexion}
            onPress={this._signOutAsync}   >
            <Text  style = {styles.titreDeconnexion}>Deconnexion  &#8250;</Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
            );
        }
        
        _signOutAsync = async () => {
            await AsyncStorage.clear();
            this.props.navigation.navigate('Auth');
        };
        
        
        _contact = async () => {
            this.props.navigation.navigate('Contact');
        };
        
        _MapAsync = async () => {
            this.props.navigation.navigate('Map');
        };
    }
    const styles = StyleSheet.create({
        ButtonActually:{
            top: '30%',
            padding: 7,
            borderBottomColor: '#FBBA00',
            borderBottomWidth: 1,
            borderTopWidth: 1,
            borderTopColor: '#FBBA00',
        },
        Button:{
            borderBottomColor: '#FBBA00',
            borderBottomWidth: 1,
            
        },
        titre:{
            color: '#59358B',
            fontSize: 23,
            textAlign: 'center',
            padding: '3%'
        },
        ButtonDeconnexion:{
            top: '15%',
            // textAlign: 'right'
        }, titreDeconnexion:{
            textAlign: 'right',
            color: '#FBBA00',
            fontSize: 20
        }
    })