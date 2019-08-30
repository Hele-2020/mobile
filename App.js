import React from 'react';
import {
    createStackNavigator,
    createSwitchNavigator,
    createAppContainer,
} from 'react-navigation';
import AuthLoadingScreen from './screens/auth/AuthLoadingScreen';
import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import SlotformScreen from './screens/SlotformScreen';
import ChatScreen from './screens/ChatScreen';
import MapScreen from './screens/MapScreen';
import ArticlesScreen  from './screens/ArticlesScreen';
import PostsScreen from './screens/psy/PostsScreen';
import PostCommentsScreen from './screens/psy/PostCommentsScreen.js';

const AppStack = createStackNavigator({
    Home: HomeScreen,
    Slotform : SlotformScreen,
    Chat: ChatScreen,
    Map: MapScreen,
    Articles: ArticlesScreen,
    PostPro: PostsScreen,
    PostCommentsPsy: PostCommentsScreen
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