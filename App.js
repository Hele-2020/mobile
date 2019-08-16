import React, { Component } from 'react';
import BodyComplete from './components/post/body/BodyComplete.js';
import PostNewPost from './components/post/footer/PostNewPost.js';
// import { createStackNavigator,createAppContainer } from 'react-navigation';
import { View, Image, KeyboardAvoidingView, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
// const AppStackNavigator = createStackNavigator({
//   // Login : { screen : ConnexionPage },
//   // Register : { screen : InscriptionPage }
// });
// const AppContainer = createAppContainer(AppStackNavigator);


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false
    };
    this.newPost = this.newPost.bind(this);
  }
  newPost() {
    if (this.state.status == true) {
      this.setState({ status: false })
    }
    else {
      this.setState({ status: true })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view}>
          <TouchableOpacity style={styles.touchableComment} onPress={this.newPost} >
            <Image style={styles.stretchImg}
              source={require('./assets/nouveauPost.png')} />
          </TouchableOpacity>
        </View>
        <BodyComplete />
        {this.state.status ? <PostNewPost /> : null}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  view: {
    flex: 1,
    alignContent: "space-around",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: "3%",
    marginTop: "7%",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white"
  },
  stretchImg: {
    resizeMode: "contain",
    width: 55,
  },
  touchableComment: {
    paddingBottom: 10,
    paddingTop: 10
  },
  form: {
    flex: 1,
    justifyContent: 'space-between',
  },
  viewPost: {
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
