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
import ModalSelector from 'react-native-modal-selector';

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
  }

  componentDidMount = async () => {
    axios.get(Api.url('/region'))
    .then(async regions => {
      this.setState({ regions: regions.data})
    })
  }

  handleChange () {
    this.setState({  })
  }

  render () {
    return (
      <KeyboardAvoidingView style={{flex: 1, justifyContent: 'center', alignItems: 'stretch', margin: 20}} behavior='padding'>
        <View style={styles.logo}>
          <Logo width={200} height={100}/>
        </View>
        <Text style={styles.Text}>Inscription</Text>
        <View style={styles.input}>
          <TextInput  style={styles.TextInput} value={this.state.phone} onChangeText={text => this.setState({phone: text})} textContentType='telephoneNumber' placeholder="Phone" />
          <TextInput style={styles.TextInput} value={this.state.username} onChangeText={text => this.setState({username: text})} textContentType='username' placeholder="Username" />
          <TextInput style={styles.TextInput} value={this.state.age} onChangeText={text => this.setState({age: text})} placeholder="Age" />
        </View>
        <View style={styles.selectInput}>
          <ModalSelector
            optionTextStyle={styles.optionTextStyle}
            overlayStyle={styles.overlayStyle}
            optionContainer={styles.optionContainer}
            cancelContainer={styles.cancelContainer}
            selectStyle={styles.selectStyle}
            selectTextStyle={styles.selectTextStyle}
            optionStyle={styles.optionStyle}
            cancelStyle={styles.cancelStyle}
            sectionStyle={styles.sectionStyle}
            sectionTextStyle={styles.sectionTextStyle}
            initValueTextStyle={styles.initValueTextStyle}
            data={this.state.regions}
            cancelText={'Annuler'}
            selectedKey={this.state.userRegionId}
            keyExtractor={item => item.id}
            labelExtractor={item => item.name}
            accessible={true}
            scrollViewAccessibilityLabel={'Scrollable options'}
            cancelButtonAccessibilityLabel={'Cancel Button'}
            onChange={(option)=>{this.handleChange(option.id)}}>
            <TextInput
              style={styles.textInput}
              editable={false}
              placeholderTextColor = "#808080"
              placeholder="&#x1F50D; Rechercher..."
              value={this.props.nameRegion} />
          </ModalSelector>
        </View>
        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={this._registerAsync} >
          <Text  style = {styles.Login}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={this._redirectLogin}>
          <Text style={styles.Login}>Login</Text>
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
    ...Platform.select({
      ios: {

      },
      android: {

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
  },
  selectInput:{
    ...Platform.select({
      ios: {
        top: '-5%',
        left: '-1%',
        width: '17%',
      },
      android: {
        top: '-5%',
        left: '-1%',
        width: '17%',
      },
    }),
  },
})
