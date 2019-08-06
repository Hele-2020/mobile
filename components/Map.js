import React from 'react';
import MapView from 'react-native-map-clustering';
import { Marker, Callout } from 'react-native-maps';
import { View, StyleSheet, Text,Dimensions, Picker } from 'react-native';
import { Icon, Header, Input} from 'native-base';
import HeaderNav from './HeaderNav.js'; 


const { width: winWidth } = Dimensions.get('window');

export default class Map extends React.Component 
{
    constructor(){
        super(); 
        this.state = {
            data: []
        }
    }

    static navigationOptions = ({navigation}) => ({
        headerStyle:{height: 120, borderBottomColor:'#FBBA00'},
        headerTitle: <HeaderNav />, 
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

    componentDidMount(){
        fetch('http://c82bb6ba.ngrok.io/poi',{
            method: 'GET',
        })
        .then((response) => response.json())
        .then((poi) => {
            this.setState({ data: poi })
            console.log(this.state.data)
        })
        .done();

    }

    render(){
        return(
            <View>
                <MapView  
                    region={{  
                        latitude: 46.227638,  
                        longitude: 2.213749,  
                        latitudeDelta: 9.5,  
                        longitudeDelta: 9.5  
                    }}  style={{ width: winWidth, height: 800 }} 
                >
                    {this.state.data.map((marker) => (
                        <Marker coordinate={{ latitude: marker.latitude, longitude: marker.longitude}} 
                        key={marker.id}
                        >
                             <Callout 
                             tooltip={true}
                            >
                                <View  style={styles.description}>
                                    <View style={styles.content}>
                                        <Text style={styles.title}>{marker.name}</Text>

                                        <View style={styles.info}>
                                            <Text>Adresse : {marker.adress}</Text>

                                            <Text>Code postal : {marker.code_postal}</Text>

                                            <Text>Telephone : {marker.phone}</Text>
                                            
                                            <Text>Site internet : {marker.site}</Text>

                                           
                                        </View>

                                    </View>
                                </View>

                            </Callout>
                        </Marker>                      
                    ))}
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
        marginLeft: 5, 
        marginBottom: 15,
        paddingLeft : 2,
        paddingRight : 8,
    },
    description: {
        backgroundColor: "white",
        height: "auto",
        width: "auto", 
        flex : 1, 
        borderColor: "#59358B",
        borderWidth: 2
    }, content : {
        paddingLeft : 5,
        paddingRight : 5,
        margin: 3,
    },title :{
        fontWeight: 'bold',
        margin : 4,
    }, info :{
        margin: 10
    }
})