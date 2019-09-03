import React, { Component } from 'react';
import axios from 'axios';
import Api from '../config/Api';
import { AsyncStorage, StyleSheet, Button, View, TouchableOpacity, KeyboardAvoidingView, Text } from 'react-native';
import ThreeAxisSensor from 'expo-sensors/build/ThreeAxisSensor';
import AdviceCard from '../components/AdviceCard'

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);
    this.state = {
      chats: [],
      id: null,
      role: '',
    }
  };

  componentDidMount = async () => {
    this.setState({ role : await AsyncStorage.getItem('userRoles') });
    this._userToken();
  };

  _userToken = async () => {
    const token = await AsyncStorage.getItem("userToken");
    const headers = { 'Authorization': `Bearer: ${token}` };
    axios({
      method: 'GET',
      url: Api.url('/chat'),
      headers: headers,
    }).then((response) => {
      //console.log(response)
      this.setState({ chats: response.data });
    }).catch((error) => {
      console.log(error);
    });
  };

  render() {
    return (
      <KeyboardAvoidingView style={{flex: 1, justifyContent: 'center', alignItems: 'stretch', margin: 20}} behavior='padding'>
        {this.state.chats.map((index) =>
          <TouchableOpacity key={index.id} style={styles.Button} onPress={(event) => this._chatAsync(event, index)}>
            <Text style={styles.titre}>Conversation {(index.users.map((username) => username.username).join(", "))}</Text>
          </TouchableOpacity>
        )}
        { this.state.role === 'PROFESSIONAL' ?
          (
            <React.Fragment>
              <TouchableOpacity style={styles.Button} onPress={this._PostProAsync}>
                <Text style={styles.titre}>Chat Pro</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Button} title='' onPress={this._SlotAsync}>
                <Text style={styles.titre}>Crée un Créneaux</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Button} onPress={this._SlotindexAsync}>
                <Text style={styles.titre}>Mes Créneaux</Text>
              </TouchableOpacity>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <TouchableOpacity style={styles.Button} onPress={this._SlotSelectorAsync}>
                <Text style={styles.titre}>Voir les créneaux disponibles</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Button}>
                <Text style={styles.titre}>Mes Rdv</Text>
              </TouchableOpacity>
            </React.Fragment>
          )
        }
        <TouchableOpacity style={styles.Button} onPress={this._MapAsync}>
          <Text style={styles.titre}>Map</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button} onPress={this._ArticleAsync}>
          <Text style={styles.titre}>Liste des Articles</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button} onPress={this._contactAsync}>
          <Text style={styles.titre}>Contact</Text>
        </TouchableOpacity>
        <AdviceCard/>
        <TouchableOpacity style={styles.ButtonDeconnexion} onPress={this._signOutAsync}>
          <Text style={styles.titreDeconnexion}>Deconnexion &#8250;</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  _chatAsync = async (event, index) => {
    let username = (index.users.map((username) => username.username).join(", "));
    let cle = index.id;
    this.props.navigation.navigate('Chat', {
      Id: cle,
      users: username
    });
  }

  _SlotAsync = async () => {
    this.props.navigation.navigate('Slotform');
  }

  _MapAsync = async () => {
    this.props.navigation.navigate('Map');
  }

  _SlotSelectorAsync = async () => {
    this.props.navigation.navigate('SelectSlot')
  }

  _SlotindexAsync = async () => {
    this.props.navigation.navigate('IndexSlot')
  }

  _ArticleAsync = async () => {
    this.props.navigation.navigate('Articles')
  }

  _PostProAsync = async () => {
    this.props.navigation.navigate('PostPro');
  }

  _contactAsync = async () => {
    this.props.navigation.navigate('Contact');
  }
}

const styles = StyleSheet.create({
  Button: {
    borderBottomColor: '#FBBA00',
    borderBottomWidth: 1,
  },
  titre: {
    color: '#59358B',
    fontSize: 23,
    textAlign: 'center',
    padding: '3%'
  },
  ButtonDeconnexion: {
    top: '15%',
  },
  titreDeconnexion: {
    textAlign: 'right',
    color: '#FBBA00',
    fontSize: 20
  }
})
