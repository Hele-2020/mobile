import React from 'react'
import {Text, View, AsyncStorage} from 'react-native'
import axios from 'axios';
import Api from '../config/Api';

export default class AdviceCard extends React.Component {
    constructor(){
        super()
        this.state = {
            advice : " "
        }
    }

    componentDidMount = async () =>{
        const token = await AsyncStorage.getItem('userToken')
        const headers = {
            'Authorization': 'bearer ' + token,
        }

        axios.get(Api.url(`/advice-card/random`), {headers: headers})
            .then(async response => {
                console.log(response.data.content)
                this.setState({advice: response.data.content })
            })
            .catch(error => {
                console.log(error.response.data);
            })
    }
    render(){
        return (
            <View>
                <Text>{this.state.advice}</Text>
            </View>
        )
    }
}