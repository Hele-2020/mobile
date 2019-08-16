import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class PostNewComment extends Component {
  state = {
    text: ''
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.keyboard} behavior="padding" enabled>
        <View style={styles.view} >
            <TextInput multiline keyboardShouldPersistTaps={'handled'} style={styles.textInput} placeholder="votre commentaire ... "
                onChangeText={(text) => this.setState({text})}
                value={this.state.text} autoCorrect={false} onSubmitEditing={this._submit}/>
            <TouchableOpacity style={styles.touchableButton}>
              <Text style={styles.text}>envoyer</Text>
            </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  keyboard: {
    flex: 1.6,
    width: "auto",
    justifyContent: "flex-end",
    // padding:"2%",
    // height: "50%",
    // justifyContent: "space-between"
  },
  view: {
    flex: 0.6,
    alignContent: "space-around",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    borderStyle: "solid",
    borderTopWidth: 1,
    borderTopColor: "#FBBA00"
  },
  textInput: {
    marginBottom: 0,
    height: "50%",
    borderRadius: 50,
    backgroundColor: "#F1F0EF",
    color: "grey",
    width: "70%",
    padding:"2%",
  },
  text: {
    color: "white",
  },
  touchableButton: {
    backgroundColor: "#59358B",
    marginLeft: 10,
    marginBottom: 0,
    marginTop: 0,
    padding: "2%",
    width: "auto",
    color: "white",
    textDecorationColor: "white",
    borderRadius: 50,
  }
});