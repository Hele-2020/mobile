import React from 'react';
import { StyleSheet, View } from 'react-native';
import Chat from './components/Chat';
import {
    createStackNavigator,
    createSwitchNavigator,
    createAppContainer,
} from 'react-navigation';
import AuthLoadingScreen from './screens/auth/AuthLoadingScreen';
import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
// import ChatScreen from './screens/ChatScreen';
// import MapScreen from './screens/MapScreen';

const AppStack = createStackNavigator({
    Home: HomeScreen,
    // Chat: ChatScreen,
    // Map: MapScreen,
})

export default function App(){
  return(
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

const AuthStack = createSwitchNavigator({
    Login: LoginScreen,
    Register: RegisterScreen,
});

export default createAppContainer(createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
}, {
    initialRouteName: 'AuthLoading',
}));
