import React from 'react'
import {Text, View, AsyncStorage, ActivityIndicator} from 'react-native'
import axios from 'axios';
import Api from '../config/Api';

export default class AdviceCard extends React.Component {
    constructor(){
        super()
        this.state = {
            advice : ' ',
            isLoading: true
        }
    }

    componentDidMount = async () =>{
        if(this.state.advice === ' '){
            this.setState({isLoading: false})
        }
            const token = await AsyncStorage.getItem('userToken')
            const headers = {
                'Authorization': 'bearer ' + token,
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
            <View>
                <Text>{this.state.advice}</Text>
            </View>
        )
    }
}