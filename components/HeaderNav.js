import React from 'react';
import { View, StyleSheet, Text, Dimensions, Picker, TextInput  } from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import '../assets/select.js';

export default class HeaderNav extends React.Component {
    
    render() {
        let index = 0;
        const data = [
            { key: index++, section: true, label: 'Regions' },
            { key: index++, label: 'Auvergne-Rhône-Alpes' },
            { key: index++, label: 'Bourgogne-Franche-Comté' },
            { key: index++, label: 'Bretagne', accessibilityLabel: 'Tap here for cranberries' },
            { key: index++, label: 'Centre-Val de Loire', customKey: 'Not a fruit' },
            { key: index++, label: 'Corse' },
            { key: index++, label: 'Grand Est' },
            { key: index++, label: 'Guadeloupe' },
            { key: index++, label: 'Guyane', accessibilityLabel: 'Tap here for cranberries' },
            { key: index++, label: 'Hauts-de-France', customKey: 'Not a fruit' },
            { key: index++, label: 'Île-de-France' },
            { key: index++, label: 'Martinique' },
            { key: index++, label: 'Normandie', accessibilityLabel: 'Tap here for cranberries' },
            { key: index++, label: 'Nouvelle-Aquitaine', customKey: 'Not a fruit' },
            { key: index++, label: 'Occitanie' },
            { key: index++, label: 'Pays de la Loire', accessibilityLabel: 'Tap here for cranberries' },
            { key: index++, label: 'Provence-Alpes-Côte', customKey: 'Not a fruit' },
            { key: index++, label: 'Reunion' }
            
        ];
      return (
        <View>
            <Text style={styles.title}>Map</Text>
            <View >
            <ModalSelector
                    data={data}
                    initValue="Select something yummy!"
                    //supportedOrientations={['landscape']}
                    accessible={true}
                    scrollViewAccessibilityLabel={'Scrollable options'}
                    cancelButtonAccessibilityLabel={'Cancel Button'}
                    onChange={(option)=>{ this.setState({textInputValue:option.label})}}>
 
                    <TextInput
                        style={{borderWidth:1, borderColor:'#59358B', padding:15, height:45, marginTop: 10,  borderRadius: 30,
                        marginBottom: 20}}
                        editable={false}
                        placeholder="Select something yummy &#x1F50D;"
                        //value={this.state.textInputValue} 
                        />
 
                </ModalSelector>
            </View> 
        </View>
      );
    }
  }


  const styles = StyleSheet.create({ 
    title : {
        justifyContent:"center",
        color:"#59358B",
        marginLeft: "40%",
        fontSize: 27,
        marginTop: 10,
        marginBottom: 20
        
    }, 
})