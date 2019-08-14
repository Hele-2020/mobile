import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
// import BlocHeader from './components/post/header/BlocHeader.js';
import BodyComplete from './components/post/body/BodyComplete.js';
import PostNewPost from './components/post/footer/PostNewPost.js';
// import { createStackNavigator,createAppContainer } from 'react-navigation';

// const AppStackNavigator = createStackNavigator({
//   // Login : { screen : ConnexionPage },
//   // Register : { screen : InscriptionPage }
// });
// const AppContainer = createAppContainer(AppStackNavigator);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status:false
    };
    this.newPost = this.newPost.bind(this);
  }
    newPost() {
      console.log('newPost')
      if(this.state.status == true) {
        this.setState({status: false})
          }
      else {
        this.setState({status: true})
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
    resizeMode:"contain",
    width: 55,
},
touchableComment: {
    paddingBottom: 10,
    paddingTop: 10
},
});
