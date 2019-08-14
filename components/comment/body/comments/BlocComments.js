// import React, { Component } from 'react';
// import { View, StyleSheet } from 'react-native';
// // import NamePsyComment from './NamePsyComment.js';
// import BackgroundComment from './BackgroundComment.js';
// import ProfilPictureComments from './ProfilPictureComments.js';

// export default class BlocComments extends Component {
//   render() {
//     return (
//       <View style={styles.view}>
//             <ProfilPictureComments />
//             <BackgroundComment />
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//     view: {
//       paddingLeft: 10,
//       paddingRight: 10,
//       flexDirection: "row",
//       height: "20%",
//       // backgroundColor: "orange",
//     }
// });
import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
export default class BlocComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name:"Docteur Peter",
      Date:"4 aout",
      Text: "okokokokokokokokkookokokokokokokokkookokokokokokokokkookokokokokokokokkookokokokokokokokko!!!!",
      
    };
  }
  render() {
    return (
      <View style={styles.view}>
        <View style={styles.flexColumn}> 
          <Text style={styles.textBold} >{this.state.Name}</Text>
          <Text style={styles.textBold} >{this.state.Date}</Text>
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
    // backgroundColor:"white",
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
  flexColumn: {
    display: "flex",
    flexDirection:"column",
  }
});