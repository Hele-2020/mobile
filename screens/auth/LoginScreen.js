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

  constructor (props) {
    super(props)

    this.state = {
      phone: '',
      password: ''
    }

    this.focusNextField = this.focusNextField.bind(this)
    this.inputs = {}
  }

  focusNextField (id) {
    this.inputs[id].focus()
  }

  render () {
    return (
      <KeyboardAvoidingView style={{flex: 1, justifyContent: 'center', margin: 20, }} behavior='padding' >
        <View style={styles.logo}>
          <Logo width={200} height={100}/>
        </View>
        <Text style={styles.text}>
          Connexion
        </Text>
        <View style={styles.input}>
          <TextInput
            style={styles.textInput}
            keyboardType={"number-pad"}
            returnKeyType={"next"}
            blurOnSubmit={false}
            onSubmitEditing={() => { this.focusNextField('password') }}
            ref={input => { this.inputs['phone'] = input }}
            value={this.state.phone}
            onChangeText={text => this.setState({phone: text})}
            textContentType='telephoneNumber'
            placeholder="Téléphone" />
          <TextInput
            style={styles.textInput}
            returnKeyType={"done"}
            blurOnSubmit={false}
            onSubmitEditing={this._loginAsync}
            ref={input => { this.inputs['password'] = input }}
            value={this.state.password}
            onChangeText={text => this.setState({password: text})}
            textContentType='password'
            secureTextEntry={true}
            placeholder="Mot de passe" />
        </View>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={this._loginAsync}>
          <Text style={styles.login}>Connexion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonForgotPassword}
          onPress={null}>
          <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={this._redirectRegister}>
          <Text style={styles.register}>Inscription</Text>
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonLogin: {
    backgroundColor: '#59358B',
    borderRadius: 20,
    marginBottom: 6,
    padding: 10,
  },
  buttonForgotPassword: {
    backgroundColor: '#948E8D',
    borderRadius: 20,
    marginBottom: 6,
    padding: 10,
  },
  buttonRegister: {
    backgroundColor: '#FBBA00',
    borderRadius: 20,
    marginBottom: 6,
    padding: 10,
  },
  textInput: {
    backgroundColor: 'white',
    fontSize: 16,
    color: '#59358B',
    margin: 6,
    padding: 3,
    borderBottomColor: '#FBBA00',
    borderBottomWidth: 1,
  },
  text: {
    color: '#59358B',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: '5%',
  },
  placeholder: {
    color: 'black'
  },
  login: {
    textAlign: 'center',
    color: 'white',
  },
  forgotPassword: {
    textAlign: 'center',
    color: 'white',
  },
  register: {
    textAlign: 'center',
    color: 'white',
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "6%"
  },
  input: {
    marginBottom: 40,
    marginTop: 20
  }
})
