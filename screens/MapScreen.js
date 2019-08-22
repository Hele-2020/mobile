import React, {Component} from 'react';
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
            modalVisible: false,
            pois: [],
            idPoi: [],
            region: {
                latitude: 48.858372,
                longitude: 2.294481,
                latitudeDelta: 7.0,
                longitudeDelta: 4.0,
            }
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleChangeModal = this.handleChangeModal.bind(this)
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
        axios.get(Api.url(`/region/${region}`))
        .then(async response => {
            this.setState({
                region: {
                    latitude: response.data.latitude,
                    longitude: response.data.longitude,
                    latitudeDelta: 10 * response.data.latitudeDelta,
                    longitudeDelta: 10 *response.data.longitudeDelta,
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
                    handleChange={this.handleChange} />
                <MapDisplay
                    pois={this.state.pois}
                    modal={this.handleChangeModal}
                    region={this.state.region}
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