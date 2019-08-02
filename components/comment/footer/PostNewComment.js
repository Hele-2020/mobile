import React, { Component } from 'react';
import { Text, View, TextInput, Button ,StyleSheet, TouchableOpacity} from 'react-native';

export default class PostNewComment extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'votre commentaire ... ' };
      }
  render() {
    return (
      <View style={{ flex: 0.8, alignContent:"space-around", alignItems:"center", justifyContent: "center", flexDirection: 'row' , width:"100%", borderStyle:"solid", borderTopWidth:" 1px", borderTopColor:"#FBBA00" }} >
        <TextInput
            style={{height: 40, borderRadius: 50, backgroundColor:"lightgrey", color:"white", width:"60%",paddingLeft:10}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}/>
        <TouchableOpacity style={styles.btnConnexion}>
            <Button  color="white" title="envoyer"/>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
btnConnexion: {
    // backgroundColor: "#FBBA00",
    height: 40,
    backgroundColor: "#59358B",
    marginLeft: 10,
    color: "white",
    textDecorationColor: "white",
    borderRadius: 50
  }
});