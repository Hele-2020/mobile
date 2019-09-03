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
  Image,
  Platform
} from 'react-native';

import Logo from '../../assets/LogoHele.svg';
import axios from 'axios';
import RegionSelect from '../../components/Map/RegionSelect';

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
      selectedRegion: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.focusNextField = this.focusNextField.bind(this)
    this.inputs = {}
  }

  focusNextField (id) {
    this.inputs[id].focus()
  }

  componentDidMount = () => {
    axios.get(Api.url('/region'))
    .then(regions => {
      this.setState({ regions: regions.data})
    })
  }

  handleChange = (region_id) => {
    this.setState({ region_id: region_id })
  }

  render () {
    return (
      <KeyboardAvoidingView style={{flex: 1, justifyContent: 'center', alignItems: 'stretch', margin: 20}} behavior='padding'>
        <View style={styles.logo}>
          <Logo width={200} height={100}/>
        </View>
        <Text style={styles.text}>Inscription</Text>
        <View style={styles.input}>
          <TextInput
            style={styles.textInput}
            keyboardType={"number-pad"}
            returnKeyType={"next"}
            blurOnSubmit={false}
            onSubmitEditing={() => { this.focusNextField('username') }}
            ref={input => { this.inputs['phone'] = input }}
            value={this.state.phone}
            onChangeText={text => this.setState({phone: text})}
            textContentType='telephoneNumber'
            placeholder="Téléphone" />
          <TextInput
            style={styles.textInput}
            keyboardType={"numeric"}
            returnKeyType={"next"}
            blurOnSubmit={false}
            onSubmitEditing={() => { this.focusNextField('age') }}
            ref={input => { this.inputs['username'] = input }}
            value={this.state.username}
            onChangeText={text => this.setState({username: text})}
            textContentType='username'
            placeholder="Pseudonyme" />
          <TextInput
            style={styles.textInput}
            returnKeyType={"done"}
            blurOnSubmit={false}
            ref={input => { this.inputs['age'] = input }}
            value={this.state.age}
            onChangeText={text => this.setState({age: text})}
            placeholder="Age" />
          <RegionSelect handleChange={ this.handleChange } />
        </View>
        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={this._registerAsync}>
          <Text style={styles.register}>Inscription</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={this._redirectLogin}>
          <Text style={styles.login}>Connexion</Text>
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
      console.log(error);
    })
  }

  _redirectLogin = () => {
    this.props.navigation.navigate('Login');
  }
}

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
  register: {
    textAlign: 'center',
    color: 'white',
  },
  logo: {
    justifyContent:"center",
    alignItems:"center",
    marginBottom:"6%"
  },
  input: {
    marginBottom: 40,
    marginTop: 20
  },
})
