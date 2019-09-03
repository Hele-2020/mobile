import React from 'react'
import {
  Text, TouchableOpacity, AsyncStorage, ActivityIndicator, StyleSheet
} from 'react-native'
import axios from 'axios';
import Api from '../config/Api';

export default class AdviceCard extends React.Component {
  constructor(){
    super()
    this.state = {
      advice : '',
      isLoading: true
    }
  }

  componentDidMount = async () =>{
    if(this.state.advice === ''){
      this.setState({ isLoading: false })
    }
    const token = await AsyncStorage.getItem('userToken')
    const headers = {
      'Authorization': 'Bearer ' + token,
    }

    axios.get(Api.url(`/advice-card/random`), {headers: headers})
    .then(async response => {
      // console.log(response.data.content)
      if(this.state.advice !== ''){
        this.setState({advice: ' ' })
      }

      this.setState({advice: response.data.content })
    })
    .catch(error => {
      console.log(error.response.data);
    })


  }
  render(){
    return (
      <TouchableOpacity style={styles.Button}>
        <Text style={styles.titre}>{this.state.advice}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  titre: {
    color: '#59358B',
    fontSize: 23,
    textAlign: 'center',
    padding: '3%'
  }
})
