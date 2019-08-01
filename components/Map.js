import React from 'react';
import MapView from 'react-native-map-clustering';
import { Marker } from 'react-native-maps';
import {View, StyleSheet} from 'react-native';
import { Icon } from 'native-base';

export default class Map extends React.Component 
{
    static navigationOptions = ({navigation}) => {
        const params = navigation.state.params || {};
        return {
        headerTitle: "Hélé", 
        headerRight: (
          <Icon
            onPress={() => navigation.navigate('ListPoi')}
            name="list"
            style={styles.buttonList}
          />
        ),
        }
    };

    render(){
        return(
            <View>
                <MapView  
                    region={{  
                        latitude: 52.5,  
                        longitude: 19.2,  
                        latitudeDelta: 8.5,  
                        longitudeDelta: 8.5  
                    }}  style={{ width: 400, height: 800 }} 
                >
                    <Marker coordinate={{ latitude: 52.0, longitude: 18.2 }} /> 
                    <Marker coordinate={{ latitude: 52.4, longitude: 18.7 }} />  
                    <Marker coordinate={{ latitude: 52.1, longitude: 18.4 }} />  
                    <Marker coordinate={{ latitude: 52.6, longitude: 18.3 }} />  
                    <Marker coordinate={{ latitude: 51.6, longitude: 18.0 }} />  
                    <Marker coordinate={{ latitude: 53.1, longitude: 18.8 }} />  
                    <Marker coordinate={{ latitude: 52.9, longitude: 19.4 }} />  
                    <Marker coordinate={{ latitude: 52.2, longitude: 21 }} />
                    </MapView>
                </View>
        )
    }
}

const styles = StyleSheet.create({ 
    buttonList:{
        padding: 20
    }
})