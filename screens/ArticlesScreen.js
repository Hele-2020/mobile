import React, {Component} from 'react';
import {
    Text, 
    View, 
    FlatList, 
    StyleSheet, 
    AsyncStorage,
    Platform
    ,TouchableHighlight,
    Share, 
} from 'react-native';
import axios from 'axios';
import Api from '../config/Api';

export default class ArticlesScreen extends Component 
{
    constructor(){
        super()
        this.state = {
            articles : null
        }
    }

    componentDidMount = async () =>{
        
        const token = await AsyncStorage.getItem('userToken')
        const headers = {
            'Authorization': 'bearer ' + token,
        }

        axios.get(Api.url(`/articles`), {headers: headers})
            .then(async response => {
                console.log(response.data[0].path)
                this.setState({articles: response.data})
            })
            .catch(error => {
                console.log(error.response.data);
            })
       
    }

    download = (url) => {
        axios(Api.BASE_URL + url,{
            method: 'GET',
            responseType: 'blob', 
          }).then((response) => {
             const urlPdf = window.URL.createObjectURL(new Blob([response.data]));
             console.log(response)
            // const link = document.createElement('a');
            // link.href = url;
            // link.setAttribute('download', 'file.pdf');
            // document.body.appendChild(link);
            // link.click();
          });
    }
    render(){
        return(
            <View style={styles.container}>
                  <FlatList                   
                    style={styles.item}
                    data={this.state.articles}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, separators}) => (
                        
                        <TouchableHighlight
                          key={item.id}
                          onPress={() => this.download(item.path)}
                          onShowUnderlay={separators.highlight}
                          onHideUnderlay={separators.unhighlight}
                          >
                          
                          <View style={{backgroundColor: 'white'}}>
                            <Text  style={styles.title}>{item.title}</Text>
                          </View>
                        </TouchableHighlight>
                      )}  
                  />
            </View>
        ); 
    }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22

    },
    item: {
      padding: 15,
      fontSize: 18,
      marginBottom: 30,
      height: 44,
    },
    separator : {
        borderBottomColor: "black", 
        borderBottomWidth: 5
    }, title :{
        fontSize: 25
    }
  })