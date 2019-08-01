import React from 'react';
import { FlatList, StyleSheet, Text,View } from 'react-native'; 


export default class ListPoi extends React.Component
{
    constructor(props){
        super(props); 
        this.state = {
            isLoading: true,
            data:[], 
        }
    }

   render(){
       return(
              <View style={styles.container}>
                <FlatList style={ {width: 100 }}
                    data={[
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                    ]}
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}/>
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
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })
  