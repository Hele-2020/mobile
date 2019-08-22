import React,{Component} from 'react';
import Api from '../config/Api';
import { View, Text, StyleSheet} from 'react-native';
import axios from 'axios';

import MapHeader from '../components/Map/MapHeader';
import MapDisplay from '../components/Map/MapDisplay';
import MapModal from '../components/Map/MapModal';


export default class MapScreen extends Component {
    static navigationOptions = {
        title: 'Carte',
    };

    constructor (props) {
        super(props);

        this.state = {
            region: '',
            modalVisible: false,
            pois: [],
            idPoi: [],
            regions: {
                latitude: 48.858372,
                longitude: 2.294481,
                latitudeDelta: 7.0,
                longitudeDelta: 4.0,
            }
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleChangeModal = this.handleChangeModal.bind(this)
    }

    randomCoordinate(region) {
        return {
            latitude: region.latitude + (Math.random() - 0.5) * (region.latitudeDelta / 2),
            longitude: region.longitude + (Math.random() - 0.5) * (region.longitudeDelta / 2),
        };
    }

    randomRegion() {
        return {
            ...this.state.region,
            ...this.randomCoordinate(this.state.region),
        };
    }

    handleChangeModal(value, id) {
        if (id !== '') {
            axios.get(Api.url(`/poi/edit/${id}`))
            .then(async poi => {
                this.setState({
                    idPoi: poi.data,
                    modalVisible: value
                })
            })
            .catch(error => {
                console.log(error.response.data);
            })
        } else {
            this.setState({
                idPoi: '',
                modalVisible: value
            })
        }
    }

    handleChange(region) {
        this.setState({region: region})

        axios.get(Api.url(`/region/${region}`))
        .then(async response => {
            this.setState({
                regions: {
                    latitude: response.data.lattitude,
                    longitude: response.data.longitude,
                    latitudeDelta: 10* response.data.lattitudeDelta,
                    longitudeDelta: 10*response.data.longitudeDelta,
                },
                pois: response.data.pois
            })
        })
        .catch(error => {
            console.log(error.response.data);
        })
    }

    

    render() {
        return (
            <View style={styles.container}>
                <MapModal
                    modalVisible={this.state.modalVisible}
                    modal={this.handleChangeModal}
                    poi={this.state.idPoi} />
                <MapHeader
                    change={this.handleChange} />
                <MapDisplay
                    pois={this.state.pois}
                    modal={this.handleChangeModal}
                    regions={this.state.regions}
                   
                    />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#fff',
    },
});