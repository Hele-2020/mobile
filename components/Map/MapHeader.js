import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
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
            // TODO: userRegionId: this.props.user.region_id
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
    }

    render() {
        return (
            <View style={{margin: 5}}>

                <ModalSelector
                 style={[styles.overlayStyle, styles.optionContainer, styles.cancelContainer, styles.selectStyle, styles.selectTextStyle, styles.optionStyle, styles.cancelStyle, styles.sectionStyle, styles.sectionTextStyle, styles.initValueTextStyle]}
                    data={this.state.regions}
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
        backgroundColor: '#DCDCDC',
        borderWidth: 1,
        borderColor: '#DCDCDC',
        padding: 7,
        height: 35,
        marginTop: 18,
        borderRadius: 30,
        marginBottom: 18,
        marginRight: 40,
        marginLeft: 40,
        fontSize: 15
    },
    overlayStyle: {
        flex:            1,
        padding:         '5%',
        justifyContent:  'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
    },

    optionContainer: {
        borderRadius:    BORDER_RADIUS,
        flexShrink:      1,
        marginBottom:    8,
        padding:         PADDING,
        backgroundColor: 'rgba(255,255,255,0.8)',
    },

    cancelContainer: {
        alignSelf: 'stretch',
    },

    selectStyle: {
        borderColor:  '#ccc',
        borderWidth:  1,
        padding:      PADDING,
        borderRadius: BORDER_RADIUS,
    },

    selectTextStyle: {
        textAlign: 'center',
        color:     '#333',
        fontSize:  FONT_SIZE,
    },

    cancelStyle: {
        borderRadius:    BORDER_RADIUS,
        backgroundColor: '#FBBA00',
        padding:         PADDING,
    },

    cancelTextStyle: {
        textAlign: 'center',
        color:     '#333',
        fontSize:  FONT_SIZE,
    },

    optionStyle: {
        padding:           PADDING,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },

    optionTextStyle: {
        textAlign: 'center',
        fontSize:  FONT_SIZE,
        color:     '#59358B',
    },

    sectionStyle: {
        padding:           PADDING * 2,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#59358B',
        },

    sectionTextStyle: {
        textAlign: 'center',
        fontSize:  FONT_SIZE,
        color:     'white',
        //fontStyle: 'italic'
    },

    initValueTextStyle: {
        textAlign: 'center',
        fontSize:  FONT_SIZE,
        color:     '#d3d3d3',

    }
})