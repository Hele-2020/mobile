import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
export default class LogoRetour extends Component {
    render() {
    return (
        <View style={styles.view}>
            <Image style={styles.stretchImg}
            source={require('../../../assets/logoRetour.png')} />
        </View>
        );
    }
}
const styles = StyleSheet.create({
  view: {
  flex: 1,
//   marginTop: "8%",
  marginBottom: "8%",
//   backgroundColor: "red"
},
    stretchImg: {
        resizeMode:"contain",
        width: 15,
        // height: 15,
        marginLeft: "3%",
    // marginRight: "3%",
    //   height: 70
    }
  });
// import React, { Component } from 'react';
// import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

// export default class ReturnPost extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       titleText: " <  Retour aux posts"
//     };
//   }
//   render() {
//     return (
//       <View style={styles.view}>
//         <TouchableOpacity style={styles.touchableReturnPost}>
//           <Text style={styles.text} >{this.state.titleText}</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   view: {
//     paddingLeft: 10,
//     paddingRight: 10,
//     backgroundColor: "white",
//     alignItems: "flex-start",
//     justifyContent: "center",
//     alignContent: "space-around",
//     flexDirection: "column" ,
//     width: "100%",
//   },
//   touchableReturnPost: {
//     width: "50%",
//     alignContent: "space-around",
//     paddingBottom: 10,
//     paddingTop: 10
//   },
//   text: {
//     fontSize: 17,
//     fontWeight: 'bold',
//     color: "#59358B",
//   }
// });