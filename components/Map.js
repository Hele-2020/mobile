import React from 'react';
import MapView from 'react-native-map-clustering';
import { Marker } from 'react-native-maps';
import {View, StyleSheet, Text} from 'react-native';
import { Icon, Header, Input} from 'native-base';


class Title extends React.Component {
    render() {
      return (
        <View>
            <Text style={styles.title}>Map</Text>
            <View style={styles.search}>
                <Input 
                    style={styles.input}
                    placeholder="Recherche..."
                    placeholderTextColor="black"
                /> 
                <Icon onPress ={()=> alert('salut')} name="ios-search" style={{color:'black', fontSize: 24, fontWeight:'bold', margin: 6, padding: 3}}/>
            </View> 
        </View>
      );
    }
  }

export default class Map extends React.Component 
{
    static navigationOptions = ({navigation}) => ({
        headerStyle:{height: 120, borderBottomColor:'#FBBA00'},
        headerTitle: <Title />, 
        // headerRight: (
        //   <Icon
        //     onPress={() => navigation.navigate('ListPoi')}
        //     name="list"
        //     style={styles.buttonList}
        //   />
        // ),
        headerLeft : (

            <View>
                <Icon
                onPress={() => navigation.navigate('ListPoi')}
                name="arrow-back"
                style={styles.buttonback} 
            />

          </View>
        ),
        
    });

    render(){
        return(
            <View>
                <MapView  
                    region={{  
                        latitude: 52.5,  
                        longitude: 19.2,  
                        latitudeDelta: 8.5,  
                        longitudeDelta: 8.5  
                    }}  style={{ width: 600, height: 800 }} 
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
    },
    buttonback :{
        color: "#FBBA00",
        padding: 20,
        marginRight: 80,
        marginBottom: 15
    },
    title : {
        justifyContent:"center",
        color:"#59358B",
        marginLeft: "40%",
        fontSize: 27,
        marginTop: 10,
        marginBottom: 20
        
    }, 
    search : {
        borderColor:"black",
        borderWidth: 1,
        borderRadius: 30,
        marginBottom: 10,
        marginLeft: 2,
        height: 3,
        marginRight: 27,
        alignSelf: 'stretch',
        paddingLeft: 10,
        flex: 4, 
        width: 250,
        flexDirection: 'row'
    },
    input:{
        color: 'rgba(0,0,0,0.8)',        
        paddingBottom:6,
        alignSelf: 'stretch',        
        flex: 1,  
        padding: 3,
        fontWeight:'bold'
    }
})