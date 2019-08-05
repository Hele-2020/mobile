import React from 'react';
import Map from './components/Map';
import ListPoi from './components/ListPoi.js';
import { createStackNavigator, createAppContainer } from "react-navigation";


const AppNavigator = createStackNavigator({
    Map: {
      screen: Map
    },
    ListPoi: {
        screen: ListPoi
    },
},{
    initialRouteName:'Map',
});
  

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component
{
    constructor(props){
        super(props); 
        this.state = {
            isLoading: true,
            data:[], 
        }
    }

    render(){
        return <AppContainer />
    }
}