import React from 'react';
import { View, StyleSheet, Text,Dimensions, Picker } from 'react-native';


export default class HeaderNav extends React.Component {
    render() {
      return (
        <View>
            <Text style={styles.title}>Map</Text>
            <View style={styles.search}>

            <Picker
                style={styles.input}>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
                <Picker.Item label="JavaScript" value="js" />
                <Picker.Item label="JavaScript" value="js" />
                <Picker.Item label="JavaScript" value="js" />
                <Picker.Item label="JavaScript" value="js" />
                <Picker.Item label="JavaScript" value="js" />
                <Picker.Item label="JavaScript" value="js" />
                <Picker.Item label="JavaScript" value="js" />
                <Picker.Item label="JavaScript" value="js" />
                <Picker.Item label="JavaScript" value="js" />
                <Picker.Item label="JavaScript" value="js" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
                {/* <Input 
                    style={styles.input}
                    placeholder="Recherche..."
                    placeholderTextColor="black"
                /> 
                <Icon onPress ={()=> alert('salut')} name="ios-search" style={{color:'black', fontSize: 24, fontWeight:'bold', margin: 6, padding: 3}}/> */}
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
    search : {
        borderColor:"black",
        borderWidth: 1,
        borderRadius: 30,
        marginBottom: 10,
        marginLeft: 2,
        height: 3,
        marginRight: 27,
        alignSelf: 'stretch',
        paddingLeft: 10,
        flex: 4, 
        width: 250,
        flexDirection: 'row'
    },
    input:{
        color: 'rgba(0,0,0,0.8)',        
        paddingBottom:6,
        alignSelf: 'stretch',        
        flex: 1,  
        padding: 3,
        fontWeight:'bold'
    }
})