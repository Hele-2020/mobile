import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View , TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, ActivityIndicator, Platform, ScrollView} from 'react-native';
import Connexion from '../SocketConnexion';
import axios from 'axios';
import Api from '../config/Api';
import { Header } from 'react-navigation';
import {AsyncStorage} from 'react-native';


function ChatScreen(props){
    

    const [message, setMessage] = useState();
    const [chat,setChat] = useState({});
    const [dataMessage, setDataMessage] = useState([]);
    const [newMessage, setNewMessage] = useState([]);
    const { navigation } = props;
    const id = navigation.getParam('Id', 'NO-ID');
    const [authId,setauthId] = useState(0);
    const [page,setPage] = useState(1);
    const [lastPage,setLastPage] = useState();
    const [date,setDate] = useState();
    
    
    
    useEffect(() => {
        tokenUser();
    }, [page]);

    useEffect(() => {
        initSocket();
    }, []);

    initSocket = async () => {
        Connexion(id).then(chat => {
            chat.on('message', (data) => {
                updateMessages(data, false);
            })
            setChat(chat);
        })
    }

    updateMessages = (data, append) => {
        let array;
        if (append === true) {
            array = [
                ...dataMessage,
                ...data, 
            ]
        } else {
            array = [
                data, 
                ...dataMessage,
            ]
        }
        
        array = array.filter((value, index, self) => index === self.findIndex(v => v.id === value.id))
        // console.log(array)
        setDataMessage(array)
    }


    tokenUser = async () => {
        console.log("toto")
        const token = await AsyncStorage.getItem("userToken");
        const user = await AsyncStorage.getItem("userId");
        setauthId(user);
        
        const headers = {
            'Authorization': "bearer " + token
        };
        axios({
            method: 'GET',
            url: (Api.url('chat/' + id + "/" + page)),
            headers: headers,
        }).then(async (response) => {
            setLastPage(response.data.lastPage)
            updateMessages(response.data.data, true)
        }).catch((error) => {
            console.log(error);
        });
    }

    onChangeText = (key, val) => {
        setMessage(val)
    }

    handleScroll = () => {
        setPage(page+1)
    }

    _keyExtractor= (item,index) => {
        return item.id.toString();
    }

    _renderItem = (item) => {
        return(
            <View>
                {item.item.user.id == authId  ? 
                    <TouchableOpacity style={styles.auth}>
                        <Text style={styles.pseudo}>{("Moi" + "\n")}</Text>
                        <Text>{item.item.content + "\n"}</Text>
                        <Text style={styles.pseudo}>{item.item.created_at}</Text>  
                    </TouchableOpacity> : 
                    <TouchableOpacity style={styles.other}>
                        <Text style={styles.pseudo}>{(item.item.user.username + "\n")}</Text>
                        <Text style={styles.pseudo}>{item.item.content + "\n"}</Text>
                        <Text style={styles.pseudo}>{item.item.created_at}</Text>  
                    </TouchableOpacity>
                }
            </View>
        )
    }

    _renderFooter = () => {
        if (page <= lastPage){
            return (
                <View>
                    <ActivityIndicator size="large"/>
                </View>
            )
        }
        else {
            return null;
        }
    }
    
    const sendMessage = () => {
        chat.emit('message',message)
        this.textInput.clear() 
    }


    return(
        <View style={styles.container }>
            <FlatList inverted 
            contentContainerStyle={{
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'stretch',
            }}
            data={dataMessage}
            keyExtractor={_keyExtractor}
            renderItem={_renderItem}
            onEndReached={handleScroll}
            onEndReachedThreshold={0.1}
            ListFooterComponent={_renderFooter}
            >               
            </FlatList>

                <KeyboardAvoidingView keyboardVerticalOffset={Platform.select({ios: 0, android: 83})} behavior='padding'>

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
ChatScreen.navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('users', 'NO-USERNAME')
})
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
    },
    auth : {
        //flexDirection: 'row-reverse',
        //justifyContent:'center',
        //alignItems:'flex-end',
        textAlign: 'right',
        alignSelf: 'flex-end',
        paddingLeft:15,
        paddingRight:15,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius:5,
        margin: 10,
        color : 'black',
        backgroundColor:'#4287f5'
    },
    other : {
        justifyContent:'center',
        alignItems:'center',
        alignSelf: 'flex-start',
        paddingLeft:15,
        paddingRight:15,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius:5,
        margin:10,
        color : 'black',
        backgroundColor:'#c9c9c9'
    },

  });

  /* let objs = {
      default: {
          flex: '1',
          justifyContent: 'center'
      },
      red: {
          backgroundColor: 'red',
            ...objs.default
      },
      yellow: {

      }
  } */