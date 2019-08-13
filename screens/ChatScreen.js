import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View , TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView} from 'react-native';
import Connexion from '../SocketConnexion';
import axios from 'axios';
import Api from '../config/Api';
import { Header } from 'react-navigation';

function ChatScreen(){

    const [message, setMessage] = useState();
    const [chat,setChat] = useState({});
    const [dataMessage, setdataMessage] = useState([]);
    const [newMessage, setnewMessage] = useState([]);


    useEffect(() => {

            Connexion().then(chat => {
                setChat(chat);            
            })
       
            // axios.get( Api.url('chat/6'))
            // .then(function (response) {
            //     setdataMessage(response.data.messages)
            // })
            // .catch(function (error) {
            //     console.log(error);
            // });

    }, []);

    onChangeText = (key, val) => {
        setMessage(val)
    }
    const sendMessage = () => {
        chat.emit('message',message)
        this.textInput.clear() 
        chat.on('message', (data) => {
            const tabinitial = newMessage; 
            tabinitial.push(data.message)
            setnewMessage(tabinitial)
            console.log(newMessage)
          })
    }

    return(
        <View style={styles.container }>
            <FlatList/>

            {/* {dataMessage.map((item, index) => 
                <Text key={index}>{item.content}</Text>
            )} */}

                <KeyboardAvoidingView keyboardVerticalOffset = {Header.HEIGHT + 30} behavior='padding'>

                    <View style={styles.inputBar}>
                        <TextInput
                            style={styles.TextBox}
                            multiline
                            onChangeText={val => this.onChangeText('message', val)}
                            ref={input => { this.textInput = input }}
                            />
                        <TouchableOpacity style={styles.button} onPress={sendMessage}>
                            <Text>Envoyer</Text>
                        </TouchableOpacity>     
                    </View>

                </KeyboardAvoidingView>
        </View>
    );
}

export default ChatScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputBar: {
      flexDirection:'row',
      justifyContent: 'space-between',
      paddingHorizontal: 5,
      paddingVertical: 10,
      backgroundColor: '#dadfea',
    },
    TextBox:{
        flex:1,
        backgroundColor: 'white',
        borderRadius: 5, 
        borderWidth: 1,
        borderColor:'grey',
        fontSize:14,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    button : {
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:15,
        paddingRight:15,
        borderRadius:5,
        marginLeft:5,
        color : 'black',
        backgroundColor:'#C805BF'
    }

  });