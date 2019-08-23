import React from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { View, Text, Dimensions, StyleSheet} from 'react-native';
import Logo from '../../assets/logo-hele.png'

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default class MapDisplay extends React.Component
{
    constructor(props) {
        super(props)
    }

    componentDidUpdate() {
        this.map.animateToRegion(this.props.region);
    }

    render() {
        return(
            <MapView
                initialRegion={this.props.region}
                ref={ref => this.map = ref}
                style={{ width: winWidth, height: winHeight }} >

                {this.props.pois.map((poi, i) => 
                        (
                            <Marker image={Logo} coordinate={{ latitude: poi.latitude, longitude: poi.longitude}} key={i}>
                                <Callout
                                    tooltip={false}
                                    onPress={() => this.props.modal(true, poi.id)} >
                                    <View style={styles.description}>
                                        <View style={styles.content}>
                                            <Text style={styles.titleMap}>{poi.name}</Text>

                                            <View style={styles.info}>
                                                <Text style={styles.textpoi}>{poi.address}, {poi.zipcode}</Text>
                                                <Text style={styles.textpoi}>{poi.city}</Text>
                                                <Text style={styles.plusIfo }> En savoir plus... </Text>

                                            </View>
                                        </View>
                                    </View>
                                </Callout>
                            </Marker> 
                        )
                    )}
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
        color: "#59358B",
        fontSize: 20
    }, info: {
        margin: 10
    }, title: {
        justifyContent: "center",
        color: "#59358B",
        marginLeft: "33%",
        fontSize: 15,
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
    }, plusIfo : {
        marginTop: 10,
        fontWeight: 'bold',
        textDecorationLine: "underline"

    }, stretchImg: {
          width: 15,
          height: 15,
    }
})
