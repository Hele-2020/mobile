import React, { Component } from 'react'

import {
    AsyncStorage,
    Clipboard,
    StyleSheet,
    TextInput,
    Button,
    View,
    KeyboardAvoidingView,
    Text
} from 'react-native';
import ModalSelector from 'react-native-modal-selector';

import axios from 'axios';

import Api from '../../config/Api';

export default class SelectRegions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            phone: '',
            username: '',
            age: '',
            region_id: '',
            regions: [],
            selectedRegion: '',
            userRegionId: null
        };
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
    }

    render() {
        return (
            
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
                    onChange={(option)=>{ this.setState({selectedRegion:option.name})}}>   
                    <TextInput style= {styles.selectInput} value={this.state.region_id} onChangeText={text => this.setState({region_id: text})} textContentType='addressState' placeholder="Region" />
                </ModalSelector>
           
        );
    };
}
const styles = StyleSheet.create({
    buttonLogin:{
        backgroundColor: '#59358B',
        borderRadius: 20,
        top: '30%',
        padding: 7
    },
    buttonRegister:{
        backgroundColor: '#FBBA00',
        borderRadius: 20,
          marginBottom: 10,
        top: '30%',
        padding: 7
    },
    selectInput:{
        backgroundColor: 'white',
        width: 250,
        height: 38,
        fontSize: 15,
        color: '#59358B',
        left: '20%',
        // top: '50%',
        borderBottomColor: '#FBBA00',
        borderBottomWidth: 1,
    },
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