import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import Api from '../../config/Api';
import axios from 'axios';

export default class RegionSelect extends Component {
  constructor (props) {
    super(props)
    this.state = {
      regions: [],
      regionName: '',
      loading: true
    }
  }

  componentDidMount () {
    axios.get(Api.url('/region'))
    .then(async regions => {
      this.setState({ regions: regions.data })
    })
    .catch(error => {
      console.log(error.response.data);
    })
  }

  render () {
    return (
      <ModalSelector
        {...this.props}
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
        keyExtractor={item => item.id}
        labelExtractor={item => item.name}
        accessible={true}
        scrollViewAccessibilityLabel={'Scrollable options'}
        cancelButtonAccessibilityLabel={'Cancel Button'}
        onChange={option => {
          this.setState({ regionName: option.name})
          this.props.handleChange(option.id)
        }}>
        <TextInput
          style={styles.textInput}
          editable={false}
          placeholder="Region"
          value={this.state.regionName} />
      </ModalSelector>
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'white',
    fontSize: 16,
    color: '#59358B',
    margin: 6,
    padding: 3,
    borderBottomColor: '#FBBA00',
    borderBottomWidth: 1,
  },
  overlayStyle: {
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
