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
    }
})