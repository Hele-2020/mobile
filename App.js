import React from 'react';

import {
    createStackNavigator,
    createSwitchNavigator,
    createAppContainer,
} from 'react-navigation';

import AuthLoadingScreen from './screens/auth/AuthLoadingScreen';

// import Welcome from './screens/auth/welcome';
import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';

import HomeScreen from './screens/HomeScreen';
// import ChatScreen from './screens/ChatScreen';
import MapScreen from './screens/MapScreen';
import ContactInfos from './screens/auth/ContactInfos';

const AppStack = createStackNavigator({
    Home: HomeScreen,
    // Chat: ChatScreen,
    Map: MapScreen,
    Contact : ContactInfos,
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

