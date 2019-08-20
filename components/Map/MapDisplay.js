import React from 'react';
import MapView from 'react-native-map-clustering';
import { Marker, Callout } from 'react-native-maps';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import axios from 'axios';
import Api from '../../config/Api';

const { width: winWidth } = Dimensions.get('window');
const { height: winHeight } = Dimensions.get('window');

export default class MapDisplay extends React.Component
{
    constructor(props) {
        super(props)
        this.state ={
            lattitude: 45.1474456787,
            longitude: 4.2578635216,
            lattitudeDelta: 0.3231590092,
            longitudeDelta: 2.4890310764
        }

    }

    componentDidMount(){
        if(this.props.coordregion !== null) {
            this.setState({
                latitude: this.props.coordregion.lattitude,
                longitude: this.props.coordregion.longitude,
                latitudeDelta: this.props.coordregion.lattitudeDelta,
                longitudeDelta: this.props.coordregion.longitudeDelta
            })
        }
    }

    render() {
        return(
            <View>
                <MapView
                    region={{
                        latitude: this.state.lattitude,
                        longitude: this.state.longitude,
                        latitudeDelta: this.state.lattitudeDelta,
                        longitudeDelta: this.state.longitudeDelta
                    }} style={{ width: winWidth, height: winHeight }} >

                    {this.props.pois.map(poi =>
                        <Marker coordinate={{ latitude: poi.lattitude, longitude: poi.longitude}} key={poi.id}>
                            <Callout
                                tooltip={false}
                                onPress={() => this.props.modal(true, poi.id)} >
                                <View style={styles.description}>
                                    <View style={styles.content}>
                                        <Text style={styles.titleMap}>{poi.name}</Text>

                                        <View style={styles.info}>
                                            <Text style={styles.textpoi}>Adresse: {poi.address}</Text>
                                            <Text style={styles.textpoi}>Code postal: {poi.zipcode}</Text>
                                            <Text style={styles.textpoi}>Ville: {poi.city}</Text>
                                            <Text style={styles.textpoi}>Telephone: {poi.phone}</Text>
                                            <Text style={styles.textpoi}>Site internet: {poi.site}</Text>
                                        </View>
                                    </View>
                                </View>
                            </Callout>
                        </Marker>
                    )}
                </MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    description: {
        backgroundColor: "white",
        height: "auto",
        width: "auto",
        flex: 1,
    }, content: {
        paddingLeft: 5,
        paddingRight: 5,
        margin: 3,
    },titleMap: {
        fontWeight: 'bold',
        margin: 4,
        color: "#59358B"
    }, info: {
        margin: 10
    }, title: {
        justifyContent: "center",
        color: "#59358B",
        marginLeft: "33%",
        fontSize: 27,
        marginTop: 10,
        marginBottom: 5
    }, ContentSearch: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 20,
        padding: 5,
        justifyContent: 'center',
        marginRight: 50
    }, textInput: {
        borderWidth: 1,
        borderColor: '#59358B',
        padding: 10,
        height: 45,
        marginTop: 10,
        borderRadius: 30,
        marginBottom: 20,
        fontSize: 15
    }, textpoi: {
        fontSize: 15,
    }
})
