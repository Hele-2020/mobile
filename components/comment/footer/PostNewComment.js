import React, { Component } from 'react';
import { View, TextInput, Button , StyleSheet, TouchableOpacity } from 'react-native';

export default class PostNewComment extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'votre commentaire ... ' };
      }
      submit = () => {
        console.log('coucou');
      }
  render() {
    return (
      <View style={styles.view} >
        <TextInput style={styles.textInput}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}/>
        <TouchableOpacity style={styles.touchableButton}>
            <Button style={styles.button} onPress={ () => this.submit()} color="white" title="envoyer"/>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    flex: 0.6,
    alignContent: "space-around",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row" ,
    width: "100%",
    borderStyle: "solid",
    borderTopWidth: 1,
    borderTopColor: "#FBBA00"
  },
  textInput: {
    height: 37,
    borderRadius: 50,
    backgroundColor: "#F1F0EF",
    color: "grey",
    width: "60%",
    paddingLeft: 10,
    fontSize: 17,
  },
  touchableButton: {
    backgroundColor: "#59358B",
    marginLeft: 10,
    color: "white",
    textDecorationColor: "white",
    borderRadius: 50,
  }
});