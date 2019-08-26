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
            selectedRegion: '',
            userRegionId: null
        }
        console.log(this.props.user)
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
            console.log(token)
            const headers = {
                'Authorization': 'bearer ' + token,
            }
    
            axios.get(Api.url('/auth/me'), {headers : headers })
            .then(async response => {
                console.log(response.data.user)
                this.setState({userRegionId: response.data.user.region_id})
                console.log(this.state.userRegionId)
    
            })
            .catch(error => {
                console.log(error.response.data);
            })
        
    }

    render() {
        if(this.state.userRegionId !== null) {
             this.props.handleChange(this.state.userRegionId)
            
        } else {
            return (
                <View>
                  <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )
        }
        return (
            <View style={{ borderBottomColor: "#FBBA00", borderBottomWidth : 1}}>

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
                    onChange={(option)=>{ this.setState({selectedRegion:option.name}), this.props.handleChange(option.id)}}>   
                    <TextInput
                        style={styles.textInput}
                        editable={false}
                        placeholderTextColor = "#808080"
                        placeholder="&#x1F50D; Rechercher..."
                        value={this.state.selectedRegion} />
                </ModalSelector>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: 'rgba(0,0,0,.04)',
        borderWidth: 1,
        borderColor: '#DCDCDC',
        padding: 7,
        height: 35,
        marginTop: 9,
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
       // borderRadius:    BORDER_RADIUS,
        flexShrink:      1,
        marginBottom:    8,
       // padding:         PADDING,
        backgroundColor: 'rgba(255,255,255,0.8)',
    },
    cancelContainer: {
        alignSelf: 'stretch',
    },
    selectStyle: {
        borderColor:  '#ccc',
        borderWidth:  1,
       // padding:      PADDING,
       // borderRadius: BORDER_RADIUS,
    },
    selectTextStyle: {
        textAlign: 'center',
        color:     '#333',
        //fontSize:  FONT_SIZE,
    },
    cancelStyle: {
       // borderRadius:    BORDER_RADIUS,
        backgroundColor: '#FBBA00',
       // padding:         PADDING,
    },
    cancelTextStyle: {
        textAlign: 'center',
        color:     '#333',
       // fontSize:  FONT_SIZE,
    },
    optionStyle: {
       // padding:           PADDING,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    optionTextStyle: {
        textAlign: 'center',
        //fontSize:  FONT_SIZE,
        color:     '#59358B',
    },
    sectionStyle: {
       // padding:           PADDING * 2,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#59358B',
    },
    sectionTextStyle: {
        textAlign: 'center',
       // fontSize:  FONT_SIZE,
        color:     'white',
        //fontStyle: 'italic'
    },
    initValueTextStyle: {
        textAlign: 'center',
       // fontSize:  FONT_SIZE,
        color:     '#d3d3d3'
    }
})