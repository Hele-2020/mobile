import React, { Component } from 'react'
import { AsyncStorage, Platform, StyleSheet, TextInput, Button, View, KeyboardAvoidingView, Text, TouchableOpacity, Image,  Linking} from 'react-native';


import axios from 'axios';
import Logo from '../assets/LogoHele.svg';
import Api from '../config/Api';



export default class ContactInfosScreen extends Component {
  static navigationOptions = {
    title: 'Contact',
  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }
  dialCall = (number) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }
    Linking.openURL(phoneNumber);
  };

  render() {
    return (
      <KeyboardAvoidingView style={{flex: 1, justifyContent: 'center', color: 'white', }} behavior='padding' >
        <View style={styles.logo}>
          <Logo width={200} height={100}/>
        </View>
        <View style={styles.container} >
          <TouchableOpacity
            style = {styles.info}>
            <Text  style = {styles.infos}>Telephone </Text>
            <Text style={{textDecorationLine: "none", color:"white",  fontSize: 20,    textAlign: 'right' }} selectable={true} onPress={()=> {this.dialCall('3020')} }>3020 &#8250;</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {styles.info}>
            <Text  style = {styles.infos} >Site </Text>
            <Text onPress={()=>{ Linking.openURL('https://www.nonauharcelement.education.gouv.fr/')}} style={{textDecorationLine: "none", color:"white",    textAlign: 'right', fontSize: 20, }} selectable={true} >Click &#8250;</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {styles.info}>
            <Text  style = {styles.infos} >Infos</Text>
            <Text style={{textDecorationLine: "none", color:"white",    textAlign: 'right', fontSize: 20, }} selectable={true} >En savoir plus sur hélé &#8250;</Text>
          </TouchableOpacity>
          <View  style = {styles.cacher}></View>
        </View>
      </KeyboardAvoidingView>
    );
  };

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: '#59358B',
        borderRadius: 10 * 30 * 50 * 70,
        height: '40%',
        bottom: '-5%',
      },
      android: {
        backgroundColor: '#59358B',
        //borderRadius: 10 * 30 * 50 * 70,
        borderTopLeftRadius: 170,
        borderTopRightRadius: 170,
        height: '40%',
        bottom: '-5%',
      },
    }),
  },
  logo:{
    ...Platform.select({
      ios: {
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: 'white',
        top: '5%'
      },
      android: {
        justifyContent:"center",
        alignItems:"center",
        //    backgroundColor: 'white',
        top: '5%'
      },
    }),
  },


  // logo:{
  //     justifyContent:"center",
  //     alignItems:"center",
  //     backgroundColor: 'white',
  //     top: '5%'
  // },
  info:{
    ...Platform.select({
      ios: {
        textAlign: 'center',
        borderBottomColor: '#FBBA00',
        borderBottomWidth: 1,
        padding: 7,
        width: '80%',
        left: '10%',
        top: '25%',
      },
      android: {
        textAlign: 'center',
        borderBottomColor: '#FBBA00',
        borderBottomWidth: 1,
        padding: 7,
        width: '80%',
        left: '10%',
        top: '25%',
      },
    }),
  },
  // info:{
  //     textAlign: 'center',
  //     borderBottomColor: '#FBBA00',
  //     borderBottomWidth: 1,
  //     padding: 7,
  //     width: '80%',
  //     left: '10%',
  //     top: '25%',
  // },

  infos:{
    ...Platform.select({
      ios: {
        fontSize: 20,
        color: 'white',
      },
      android: {
        fontSize: 17,
        color: 'white',

      },
    }),
  },
  cacher:{
    ...Platform.select({
      ios: {
        backgroundColor: '#59358B',
        height: '30%',
        width: '100%',
        top: '40%'
      },
      android: {
        //     backgroundColor: '#59358B',
        //     height: '50%',
        //     width: '100%',
        //      top: '20%',

        //
      },
    }),
  },
})
