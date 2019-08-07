import React from 'react';
import { View, StyleSheet, Text, Dimensions, Picker, TextInput  } from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import '../assets/select.js';

let index = 0;
const titre = [
    {   key: index++, section: true, label: 'Fruits' },
  
];

export default class HeaderNav extends React.Component {

    constructor(){
        super(); 
        this.state = {
            region: [],
            //titre: "Regions"
        };
    }

    componentDidMount(){
        fetch('http://d91c24eb.ngrok.io/region',{
        method: 'GET',
    })
    .then((response) => response.json())
    .then((regions) => {
        this.setState({ data: regions})
        console.log(this.state.region)
    })
    .done();
}

    render(){
    return (
        <View>
        <Text style={styles.title}>Map</Text>
        <View>
        <ModalSelector 
        titre={titre}
          data={ this.state.data}
          keyExtractor= {item => item.id}
          labelExtractor= {item => item.name}
        initValue="Select something yummy!"
        accessible={true}
        scrollViewAccessibilityLabel={'Scrollable options'}
        cancelButtonAccessibilityLabel={'Cancel Button'}
        onChange={(option)=>{ this.setState({textInputValue:option.label})}}>
                
        <TextInput
        style={{borderWidth:1, borderColor:'#59358B', padding:15, height:45, marginTop: 10,  borderRadius: 30,
        marginBottom: 20}}
        editable={false}
        placeholder="Select something yummy &#x1F50D;"
        />
        </ModalSelector>
     
        </View> 
        </View>
         )
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