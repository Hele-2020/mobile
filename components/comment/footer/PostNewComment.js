import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Text, StyleSheet, TouchableOpacity, TextInput, Platform } from 'react-native';
import Connexion from '../../SocketConn.js';

export default class PostNewComment extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: '',
      comment: null
    };
    Connexion().then(({comment}) => {
      this.setState({comment})
    })
  }
  render() {
    const { id } = this.props
    onPress = () => {
      const message = {
        id: id,
        message: this.state.text,
        date: '',
      }
      this.state.comment.emit('message', message)
      this.setState({ text: '' })
    }
    return (
      <KeyboardAvoidingView keyboardVerticalOffset= {Platform.select({ios: 80, android: 83})} style={styles.keyboard} behavior="padding" enabled>
        <View style={styles.view} >
            <TextInput multiline style={styles.textInput} placeholder="votre commentaire ... "
                onChangeText={(text) => this.setState({text})}
                value={this.state.text} autoCorrect={false} onSubmitEditing={this._submit}/>
            <TouchableOpacity onPress={()=> onPress()} style={styles.touchableButton}>
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
    backgroundColor: "white"
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