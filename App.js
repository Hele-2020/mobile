import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import { StyleSheet, View } from 'react-native';
import BlocHeader from './components/comment/header/BlocHeader.js';
import BodyComplete from './components/comment/body/BodyComplete.js';
import PostNewComment from './components/comment/footer/PostNewComment.js';

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
