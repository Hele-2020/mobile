import React from 'react';
import {Text, View, TextInput, StyleSheet, AsyncStorage, ActivityIndicator} from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import Api from '../../config/Api';
import axios from 'axios';

export default class MapHeader extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount = async () => {
    const token = await AsyncStorage.getItem('userToken')
    const headers = {
      'Authorization': 'Bearer ' + token,
    }

    axios.get(Api.url('/auth/me'), { headers : headers })
    .then(async response => {
      this.props.handleChange(response.data.user.region_id)
      this.setState({ loading: false})
    })
    .catch(error => {
      console.log(error.response.data);
    })

  }
  render() {
    if(this.state.loading !== false) {
      return (
        <View>
          <ActivityIndicator size="large" color="#59358B" style={{margin: 15}} />
        </View>
      )
    } else {
      return (
        <View style={{ borderBottomColor: "#FBBA00", borderBottomWidth : 1 }}>
          <RegionSelect handleChange={this.props.handleChange} />
        </View>
      )
    }
  }
}
