import React, { Component } from 'react'

import {
    AsyncStorage,
    Clipboard,
    StyleSheet,
    TextInput,
    Button,
    View,
    KeyboardAvoidingView,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import Hele from './LogoHele300.png';
import axios from 'axios';
import SelectRegions from './SelectRegions';
import ModalSelector from 'react-native-modal-selector';
import {Platform} from 'react-native';

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
            region_id: '',
            regions: [],
            selectedRegion: '',
            userRegionId: null
        };
    }
    componentDidMount = async () => {
        axios.get(Api.url('/region'))
        .then(async regions => {
            this.setState({ regions: regions.data})
        })
        .catch(error => {
            console.log(error.response.data);
        })
    }
    
    render() {
        return (
            <KeyboardAvoidingView style={{flex: 1, justifyContent: 'center', alignItems: 'stretch', margin: 20}} behavior='padding'>
              <View>
            <Image
            style={styles.stretch}
            source={require('./LogoHele300.png')}
            />
            </View> 
            <View style={styles.selectInput}>
            <SelectRegions />
            </View>
            <Text style={styles.Text}>Inscription</Text>  
            <TextInput  style={styles.TextInput} value={this.state.phone} onChangeText={text => this.setState({phone: text})} textContentType='telephoneNumber' placeholder="Phone" />
            <TextInput style={styles.TextInput} value={this.state.username} onChangeText={text => this.setState({username: text})} textContentType='username' placeholder="Username" />
            <TextInput style={styles.TextInput} value={this.state.age} onChangeText={text => this.setState({age: text})} placeholder="Age" />
            <TouchableOpacity
            style={styles.buttonRegister}
            onPress={this._registerAsync} >
            <Text  style = {styles.Login}> Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonLogin}
            onPress={this._redirectLogin}  >
            <Text  style = {styles.Login}> Login</Text>
            </TouchableOpacity>
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
                bottom: '25%',
                padding: 7, 
                height: '6%'
            },
            buttonRegister:{
                backgroundColor: '#FBBA00',
                borderRadius: 20,
                bottom: '27%',
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
                bottom: '40%',
                borderBottomColor: '#FBBA00',
                borderBottomWidth: 1,
            },
            Text:{
                color: '#59358B',
            fontSize: 30,
            textAlign: 'center',
            bottom: '50%',
            },
            Login:{
                textAlign: 'center',
                color: 'white',
                marginTop: '1%',
            },
            Register:{
                textAlign: 'center',
                color: 'white',
                marginTop: '1%',
            },
            stretch:{
                resizeMode: 'contain',
                width: '55%',
                height: '50%',
                bottom: '10%',
                left: '20%', 
            },
            selectInput:{
                top: '-36%',
                left: '1%',

            }
            
        })