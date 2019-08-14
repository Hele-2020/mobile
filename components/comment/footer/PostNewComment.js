import React, { Component } from 'react';
import { View, KeyboardAvoidingView, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
// import { KeyboardAvoidingView } from 'react-native-keyboard-aware-scroll-view';

export default class PostNewComment extends Component {
  state = {
    text: ''
  }


    handleKeyUp = event => {
      if (event.key === 'OK') {
        event.preventDefault()
          this.createMessage(this.state.text)
      }
  }
  render() {
    return (
      <View style={styles.view} >
        <TextInput style={styles.textInput} placeholder="votre commentaire ... "
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text} autoCorrect={false} onSubmitEditing={this._submit} />
        <TouchableOpacity onPress={this._submit()} style={styles.touchableButton}>
          <Text>Envoyer</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: 'space-between',
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
    width: "60%",
    paddingLeft: 10,
    fontSize: 17,
  },
  text: {
    color: "white"
  },
  touchableButton: {
    backgroundColor: "#59358B",
    marginLeft: 10,
    padding: 10,
    width: "auto",
    color: "white",
    textDecorationColor: "white",
    borderRadius: 50,
  }
});
// export default class PostNewComment extends Component {
//   constructor(props) {
//       super(props);
//       this.state = { text: '' };
//     }

// render() {
//   return (
//     <View style={styles.view} >
//     <KeyboardAvoidingView behavior="padding" style={styles.form}>
//         <TextInput style={styles.textInput} placeholder="votre commentaire ... "
//             onChangeText={(text) => this.setState({text})}
//             value={this.state.text} autoCorrect={false} onSubmitEditing={this._submit}/>
//           <View>
//             <TouchableOpacity style={styles.touchableButton}>
//                 <Button style={styles.button} onPress={ () => this._submit()} color="white" title="envoyer"/>
//             </TouchableOpacity>
//           </View>
//        </KeyboardAvoidingView>
//     </View>
//   );
// }