import React, { Component } from 'react'
import {AsyncStorage,Text, View } from 'react-native';
import { Card, Button} from 'react-native-elements'
import axios from 'axios';
import Api from '../config/Api'

export default class IndexSlotPro extends Component {
    static navigationOptions = {
        title: 'Vos créneaux que vous avez mis à disposition ',
    };

    constructor(props) {
        super(props);
        this.state = {
          tableData: [],
          Token: ''
        }
    }

    DisplayYoung(young_id){
      if(young_id === null){
        return <Text>LIBRE</Text>
      }else{
        return <Text>{young_id.username}</Text>
      }
    }

    DeleteSlot(slot){
      alert('Vous venez de supprimer ce créneau')
    }

    
    async componentDidMount() {

        const token = await AsyncStorage.getItem('userToken');
        this.setState({Token : token})
        const headers = {
            'Authorization': 'bearer ' + token,
        }
          axios.post( Api.url('/slot/pro'),{},{headers: headers})
          .then((response) => {
            this.setState({tableData : response.data})
          })
          .catch(function (error) {
              console.log(error);
          });
    }

      render() {
        return (
          <View >
            <Card title="Vos Créneaux">
              {
              this.state.tableData.map(slot => (
                  <View key = {slot.id}>
                    <Text>{slot.start_time}</Text>
                    {
                      this.DisplayYoung(slot.young)
                    }
                    <Button
                     title= 'supprimer le créneau'
                     onPress={() => this.DeleteSlot(slot.id)} 
                     />
                </View>
              ))
              }
            </Card>
          </View>
        )
      }
}

