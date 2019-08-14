import React from 'react';
import Api from '../config/Api';
import { View, Text} from 'react-native';
import axios from 'axios';

import MapHeader from '../components/Map/MapHeader';
import MapDisplay from '../components/Map/MapDisplay';

export default class MapScreen extends React.Component 
{
    static navigationOptions = {
        title: 'Carte',
    };

    constructor(){
        super(); 
        this.state = {
            region: '',
            pois: []
        };
        
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (region) => {
        this.setState({region: region})
        console.log(this.state.region)
        
        axios.get(Api.url(`/region/poi/${region}`))
            .then(async response => {
                console.log(response.data);
                this.setState({ pois: response.data })
            })
            .catch(error => {
                console.log(error.response.data);
            })
        
    }


    render(){
        return(
            <View>
                <MapHeader navigation = {this.props.navigation.navigate} change={this.handleChange}/>
                <MapDisplay pois={this.state.pois} />
            </View>
        )
    }
}

