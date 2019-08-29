import React, { Component } from 'react'
import {AsyncStorage,Text, View, StyleSheet,TouchableOpacity, Alert, Button } from 'react-native';
import axios from 'axios';
import Api from '../config/Api'

export default class SelectSlotScreen extends Component {
    static navigationOptions = {
        title: 'Les créneaux disponibles',
    };

    constructor(props) {
        super(props);
        this.state = {
          tableData: [],
          Token: ''
        }
    }
    
    async componentDidMount() {

        const token = await AsyncStorage.getItem('userToken');
        this.setState({Token : token})
        const headers = {
            'Authorization': 'bearer ' + token,
        }
          axios.get( Api.url('/get/slot'),{headers: headers})
          .then((response) => {
            const tab =  response.data.result
            this.setState({tableData: tab})
          })
          .catch(function (error) {
              console.log(error);
          });
    }

    _SelectIndex(index) {
      
      const headers = {
        'Authorization': 'bearer ' + this.state.Token,
    }

      axios.post(Api.url('/select/'+index), {}, {headers: headers})
      .then((response) => {
      console.log(response)
      })
      .catch(function (error) {
          console.log(error);
      });
    }

      render() {
        const state = this.state;
        return (
          <View style={styles.container}>
              {
                state.tableData.map(index => 
                (
                  <TouchableOpacity  key={index.id} onPress={() => this._SelectIndex(index.id)}>
                      <View style={styles.button}>
                        <Text style={styles.buttonText}>
                          {index.start_time}
                        </Text>
                      </View>
                  </TouchableOpacity>                   
                ))
              }
          </View>
        )
      }
    }
     
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        marginLeft:50,
        marginRight:50,
        alignItems: 'center',
        justifyContent: 'center',
    },
      button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
      },
      buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'white'
      }
    });

