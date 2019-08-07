import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Chat from './components/Chat';


export default function App() {
  return (
    <View style={styles.container}> 
        <Chat />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
