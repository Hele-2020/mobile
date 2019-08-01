import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import { StyleSheet, View } from 'react-native';
import BlocHeader from './components/header/BlocHeader.js';
import BodyComplete from './components/body/BodyComplete.js';
import PostNewComment from './components/footer/PostNewComment.js';

export default function App() {
  return (
    <View style={styles.container}>
      <BlocHeader />
      <BodyComplete />
      <PostNewComment />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
