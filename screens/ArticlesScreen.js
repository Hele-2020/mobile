import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet, AsyncStorage } from 'react-native';
import axios from 'axios';
import Api from '../config/Api';

export default class ArticlesScreen extends Component 
{
    constructor(){
        super()
        this.state = {
            data :[
                {key: 'Devin'},
                {key: 'Dan'},
                {key: 'Dominic'},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'John'},
                {key: 'Jillian'},
                {key: 'Jimmy'},
                {key: 'Julie'}
            ]
        }

    }

    componentDidMount = async () =>{
        
        const token = await AsyncStorage.getItem('userToken')
        const headers = {
            'Authorization': 'bearer ' + token,
        }

        axios.get(Api.url(`/articles`), {headers: headers})
            .then(async response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error.response.data);
            })
       
    }

    render(){
        return(
            <View>
                  <FlatList
                  data={[ {key: 'Devin'},
                  {key: 'Dan'},
                  {key: 'Dominic'},
                  {key: 'Jackson'},
                  {key: 'James'},
                  {key: 'Joel'},
                  {key: 'John'},
                  {key: 'Jillian'},
                  {key: 'Jimmy'},
                  {key: 'Julie'}]}
                 
                  renderItem={({item}) => <Text  renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}>{item.key}</Text>}
                  />
                {/* <Text> les fichiers Conseils </Text> */}
            </View>
        ); 
    }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })