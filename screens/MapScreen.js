import React from 'react';
import MapView from 'react-native-map-clustering';
import { Marker, Callout } from 'react-native-maps';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, TextInput} from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import {Icon} from 'native-base';
import axios from 'axios';
import Api from '../config/Api';

const { width: winWidth } = Dimensions.get('window');

class HeaderNav extends React.Component {
    constructor(){
        super();
        this.state ={
            regions: [],
            idRegion: null,
            textInputValue:'',
            poisRegion:[]
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount = async () => {
        axios.get(Api.url('/region'))
        .then(async regions => {
            this.setState({ regions: regions.data})
        })
        .catch(error => {
            console.log(error.response.data);
        })

    }

    handleSubmit = () => {
        if(this.state.textInputValue !== '' && this.state.idRegion !== null){
            
            axios.get(Api.url(`/region/poi/${this.state.idRegion}`))
            .then(async pois => {
                this.setState({ poisRegion: pois.data})
            })
            .catch(error => {
                console.log(error.response.data);
            })

            alert(this.state.poisRegion)
        }
        
    }

    render(){
        return(
            <View style={{flex: 1, flexDirection: 'column'}}>
        <Text style={styles.title}>Map</Text>
        <View style={styles.ContentSearch}>
            <ModalSelector 
                data={this.state.regions}
                keyExtractor={ item => item.id}
                labelExtractor= {item => item.name}
                initValue="sélectionner une region "
                accessible={true}
                scrollViewAccessibilityLabel={'Scrollable options'}
                cancelButtonAccessibilityLabel={'Cancel Button'}
                onChange={(option)=>{this.setState({ textInputValue: option.name, idRegion: option.id})}}
            >
                    
                <TextInput
                    style={styles.textInput}
                    editable={false}
                    placeholder="Selectionner une region &#x1F50D;"
                    value={this.state.textInputValue}
                    
                />
            </ModalSelector>

            <View style={{marginBottom: 4, marginTop: 10, marginLeft: 4}}>
                <TouchableOpacity 
                    style={styles.saveButton} 
                    onPress={this.handleSubmit} 
                >
                    <Text style={styles.saveButtonText}>Rechercher</Text>
                </TouchableOpacity>
            </View>
        </View> 
    </View>
            
        );
    }


}


export default class Map extends React.Component 
{
    constructor(){
        super(); 
        this.state = {
            data: [],
            test:[]
        };
    }

    componentDidMount =  async () => {

        axios.get(Api.url('/poi'))
        .then(async response => {
            console.log(response);
             this.setState({ data: response.data })
        })
        .catch(error => {
            console.log(error.response.data);
        })
    }

    arrayRegion = () => {
        return this.state.regions; 
    }

    static navigationOptions = ({navigation}) => ({
        headerStyle:{height: 120, borderBottomColor:'#FBBA00'},
        headerTitle: <HeaderNav />, 
        headerLeft : (
            <View>
                <Icon
                onPress={() => navigation.goBack()}
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
                                        <Text style={styles.titleMap}>{marker.name}</Text>

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
        // marginRight: 80,
        marginLeft: 20, 
        marginTop: -35, 
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
    },titleMap :{
        fontWeight: 'bold',
        margin : 4,
    }, info :{
        margin: 10
    }, title : {
        justifyContent:"center",
        color:"#59358B",
        marginLeft: "25%",
        fontSize: 27,
        marginTop: 10,
        marginBottom: 5

    }, saveButton: {
        borderWidth: 1,
        borderColor: '#59358B',
        backgroundColor: '#59358B',
        padding: 5,
        borderRadius: 30,
        padding:10
    },
        saveButtonText: {
        color: '#FFFFFF',
        fontSize: 12,
        textAlign: 'center',
        height: 20,  
        padding : 2
        
    }, ContentSearch : {
        flex: 1, 
        flexDirection: 'row',
        paddingBottom: 20,
        padding: 5,
        justifyContent: 'center',
        marginRight: 30
        
    }, textInput :{
        borderWidth:1, 
        borderColor:'#59358B', 
        padding:15, 
        height:45, 
        marginTop: 10,  
        borderRadius: 30,
        marginBottom: 20, 
    }
})