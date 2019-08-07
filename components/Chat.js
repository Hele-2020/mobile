import React, { useState } from 'react';
import { StyleSheet, Text, View , TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView} from 'react-native';
import chat from '../SocketConnexion';

function Chat(){

    const [message, setMessage] = useState();

    onChangeText = (key, val) => {
        setMessage(val)
    }

    const sendMessage = () => {
        chat.emit('message',message)
        this.textInput.clear() 
        chat.on('reponse', (data) => {
            console.log(data)
          })
    }

    return(
        <View style={styles.container }>
            <FlatList />
                <KeyboardAvoidingView behavior='padding'>
                    <View style={styles.inputBar}>
                        <TextInput
                            style={styles.TextBox}
                            multiline
                            onChangeText={val => this.onChangeText('message', val)}
                            ref={input => { this.textInput = input }}
                            />
                        <TouchableOpacity 
                                style={styles.button}
                                onPress={sendMessage}
                                >
                            <Text>Envoyer</Text>
                        </TouchableOpacity>     
                    </View>
                </KeyboardAvoidingView>
        </View>
    );
}

export default Chat;

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