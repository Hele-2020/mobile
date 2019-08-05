import React from 'react';
import { FlatList, StyleSheet, Text,View, Dimensions } from 'react-native'; 

const { width: winWidth } = Dimensions.get('window');
export default class ListPoi extends React.Component
{
    constructor(props){
        super(props); 
        this.state = {
            isLoading: true,
            data:[],
        }
    }

       componentDidMount(){
        fetch('http://f7b45ce9.ngrok.io/poi',{
            method: 'GET',
        })
        .then((response) => response.json())
        .then((poi) => {
            this.setState({ data: poi })
            console.log(poi)
        })
        .done();
   
    }

   render(){
       return(
              <View style={styles.container}>
                <FlatList style={ {width:  winWidth }}
                    data={this.state.data}
                renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
                keyExtractor={(item, index) => index.toString()}
                />
           </View>
       );
   }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44
    },
  })
  