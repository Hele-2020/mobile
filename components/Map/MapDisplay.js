import React from 'react';
import MapView from 'react-native-map-clustering';
import { Marker, Callout } from 'react-native-maps';
import { View, Text, Dimensions, StyleSheet } from 'react-native';


const { width: winWidth } = Dimensions.get('window');
const { height: winHeight } = Dimensions.get('window');

export default class MapDisplay extends React.Component
{
    constructor(props) {
        super(props)
    }

    render() {
        const { children, renderMarker, markers } = this.props;

        return(
            <View>
                <MapView
                 showsUserLocation ref={ map => { this.map = map }}
                 data={markers}
                    region={{
                        latitude: 46.227638,
                        longitude: 2.213749,
                        latitudeDelta: 9.5,
                        longitudeDelta: 9.5
                    }} style={{ width: winWidth, height: winHeight }} >

                    {this.props.pois.map(poi =>
                        <Marker coordinate={{ latitude: poi.latitude, longitude: poi.longitude}} key={poi.id}
                        //image={require('../assets/icon.png')}
                        >
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
