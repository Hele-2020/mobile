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
                    data={this.state.regions}
                    selectedKey={this.state.userRegionId}
                    keyExtractor={item => item.id}
                    labelExtractor={item => item.name}
                    accessible={true}
                    scrollViewAccessibilityLabel={'Scrollable options'}
                    cancelButtonAccessibilityLabel={'Cancel Button'}
                    onChange={(option)=>{ this.setState({selectedRegion:option.name}), this.props.change(option.id)}}>

                    <TextInput
                        style={styles.textInput}
                        editable={false}
                        placeholder="Selectionner une region &#x1F50D;"
                        value={this.state.selectedRegion} />
                </ModalSelector>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: '#59358B',
        padding: 15,
        height: 45,
        marginTop: 10,
        borderRadius: 30,
        marginBottom: 20,
        fontSize: 15
    }

})
