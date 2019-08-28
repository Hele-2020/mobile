import React from 'react';
import {Text, View, TextInput, StyleSheet, AsyncStorage, ActivityIndicator} from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import Api from '../../config/Api';
import axios from 'axios';
export default class MapHeader extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            regions: [],
            loading: true
        }      
    }
    componentDidMount = async () => {
       
        axios.get(Api.url('/region'))
        .then(async regions => {
            this.setState({ regions: regions.data})
        })
        .catch(error => {
            console.log(error.response.data);
        })
        
            const token = await AsyncStorage.getItem('userToken')
            const headers = {
                'Authorization': 'bearer ' + token,
            }
    
            axios.get(Api.url('/auth/me'), {headers : headers })
            .then(async response => {
                this.props.handleChange(response.data.user.region_id)
                this.setState({ loading: false})
                
            })
            .catch(error => {
                console.log(error.response.data);
            })
        
    }
    render() {
        if(this.state.loading !== false) {
            return (
                <View>
                  <ActivityIndicator size="large" color="#59358B" style={{margin: 15}} />
                </View>
            )
        } else {
            return (
            <View style={{ borderBottomColor: "#FBBA00", borderBottomWidth : 1 }}>
                <ModalSelector
                    optionTextStyle={styles.optionTextStyle}
                    overlayStyle={styles.overlayStyle}
                    optionContainer={styles.optionContainer}
                    cancelContainer={styles.cancelContainer}
                    selectStyle={styles.selectStyle}
                    selectTextStyle={styles.selectTextStyle}
                    optionStyle={styles.optionStyle}
                    cancelStyle={styles.cancelStyle}
                    sectionStyle={styles.sectionStyle}
                    sectionTextStyle={styles.sectionTextStyle}
                    initValueTextStyle={styles.initValueTextStyle}
                    data={this.state.regions}
                    cancelText={'Annuler'}
                    selectedKey={this.state.userRegionId}
                    keyExtractor={item => item.id}
                    labelExtractor={item => item.name}
                    accessible={true}
                    scrollViewAccessibilityLabel={'Scrollable options'}
                    cancelButtonAccessibilityLabel={'Cancel Button'}
                    onChange={(option)=>{this.props.handleChange(option.id)}}>   
                    <TextInput
                        style={styles.textInput}
                        editable={false}
                        placeholderTextColor = "#808080"
                        placeholder="&#x1F50D; Rechercher..."
                        value={this.props.nameRegion} />
                </ModalSelector>
            </View>
        )
        }
        
    }
}
const styles = StyleSheet.create({
    textInput: {
        backgroundColor: 'rgba(0,0,0,.04)',
        borderWidth: 1,
        borderColor: '#DCDCDC',
        padding: 7,
        height: 35,
        marginTop: 18,
        borderRadius: 30,
        marginBottom: 18,
        marginRight: 40,
        marginLeft: 40,
        fontSize: 15,
    }, overlayStyle: {
        flex:            1,
        padding:         '5%',
        justifyContent:  'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    optionContainer: {
        flexShrink:      1,
        marginBottom:    8,
        backgroundColor: 'rgba(255,255,255,0.8)',
    },
    cancelContainer: {
        alignSelf: 'stretch',
    },
    selectStyle: {
        borderColor:  '#ccc',
        borderWidth:  1,
    },
    selectTextStyle: {
        textAlign: 'center',
        color:     '#333',
    },
    cancelStyle: {
        backgroundColor: '#FBBA00',
    },
    cancelTextStyle: {
        textAlign: 'center',
        color:     '#333',
    },
    optionStyle: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    optionTextStyle: {
        textAlign: 'center',
        color:     '#59358B',
    },
    sectionStyle: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#59358B',
    },
    sectionTextStyle: {
        textAlign: 'center',
        color:     'white',
    },
    initValueTextStyle: {
        textAlign: 'center',
        color:     '#d3d3d3'
    }
})