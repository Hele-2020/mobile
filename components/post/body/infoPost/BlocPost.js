import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import BlocReaction from '../reaction/BlocReaction.js';
export default class BlocPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }
  render() {
    const name = this.state.messages.map((message, key) => (
      <Text key={key} name={message.name} style={styles.textBold} >{ name }</Text>))
    const message = this.state.messages.map((message, key) => (
      <Text  key={key} message={message.message} />))
    const date = this.state.messages.map((message, key) => (
        <Text  key={key} message={message.date} />))
    
    // const { key, message, date, name } = this.props
    return (
      <View style={styles.view}>
      <View style={styles.flexRow}>
        <Image style={styles.stretchImg}
            source={require('../../../../assets/logohele.png')} />
          <View style={styles.flexColumn}> 
          { name }
          { date}
        </View> 
        </View>
        { message }
        <BlocReaction {...this.props}/>
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
// return (
//   <View style={styles.view}>
//   <View style={styles.flexRow}>
//     <Image style={styles.stretchImg}
//         source={require('../../../../assets/logohele.png')} />
//       <View style={styles.flexColumn}> 
//       { name }
//       { date}
//     <Text style={styles.textBold} >{ name }</Text>
//     <Text style={styles.textBold} >{ date }</Text>
//     </View> 
//     </View>
//     { message }
//     <Text style={styles.text} >{ message }</Text>
//     <BlocReaction {...this.props}/>
//   </View>
// );