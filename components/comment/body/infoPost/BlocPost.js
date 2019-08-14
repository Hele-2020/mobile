import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
export default class BlocPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name:"Docteur Peter",
      Date:"4 aout",
      Text: "Bonjour j'ai un problème... je suis amoureuse de mon chien HELP!!!!",
      
    };
  }
  render() {
    return (
      <View style={styles.view}>
      <View style={styles.flexRow}>
        <Image style={styles.stretchImg}
            source={require('../../../../assets/logohele.png')} />
          <View style={styles.flexColumn}> 
        <Text style={styles.textBold} >{this.state.Name}</Text>
        <Text style={styles.textBold} >{this.state.Date}</Text>
        </View> 
        </View>
        <Text style={styles.text} >{this.state.Text}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    marginLeft: "3%",
    marginRight: "3%",
    backgroundColor:"white",
  },
  stretchImg: {
    resizeMode:"contain",
    width: 35,
    height: 35,
    marginRight: '2%',
    },
    textBold: {
      fontWeight : "bold",
      color: "#59358B",
    },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    marginBottom: '5%',
  },
  flexColumn: {
    display: "flex",
    flexDirection:"column",
  }
});
//import React, { Component } from 'react';
// import { Text, View, StyleSheet } from 'react-native';

// export default class ReturnPost extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       titleText: " BlaBlablaBlaBlablaBlaBlablaBlaBlablaBlaBlablaBlaBlablaBlaBlablaBlaBlablaBlaBlablaBlaBlablaBlaBlabla"
//     };
//   }
//   render() {
//     return (
//       <View style={styles.view}>
//         <Text style={styles.text} >{this.state.titleText}</Text>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   view: {
//     // backgroundColor: "orange",
//     flexWrap: "wrap",
//     width: "100%",
//     flexDirection: "row"
//   },
//   text: {
//     fontSize: 15,
//     color: "black",
//     // color: "#59358B",
//   }
// });