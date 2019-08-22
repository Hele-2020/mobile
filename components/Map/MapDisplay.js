import React from 'react';
// import MapView from 'react-native-map-clustering';
import MapView, { Marker } from 'react-native-maps';
import { View, Text, Dimensions, StyleSheet, Button} from 'react-native';
import axios from 'axios';
import Api from '../../config/Api';

const { width: winWidth } = Dimensions.get('window');
const { height: winHeight } = Dimensions.get('window');


export default class MapDisplay extends React.Component
{
    constructor(props) {
        super(props)
    }

    componentDidUpdate() {
        //console.log(this.props.coordregion.lattitude)
        this.map.animateToRegion(this.props.regions);
    }

    
    render() {
    
        return(
            <MapView
                initialRegion={this.props.regions}
                ref={ref => this.map = ref}
                style={{ width: winWidth, height: winHeight }} >

                {this.props.pois.map((poi, i) => 
                    (
                    <Marker coordinate={{ latitude: poi.lattitude, longitude: poi.longitude}} key={i} />
                ))}
            </MapView>
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
