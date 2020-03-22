import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Entypo';
import { createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import TodoScreen from '../screens/TodoScreen';
import CompletedScreen from '../screens/CompletedScreen';
import Colors from '../constants/Colors';

const tabScreenConfig = {
    TODOList : {
        screen:TodoScreen,
        navigationOptions:{
            
            title: 'TodoScreen',
            tabBarIcon: (tabInfo) =>{
                return <Icon name ="add-to-list" size={25} color={tabInfo.tintColor}/>;
            },
            tabBarColor: Colors.primaryColor,
        }
    },
    Completed : {
        screen:CompletedScreen,
        navigationOptions:{
            headerMode: 'screen',
            headerTitle: 'CompletedScreen',
            tabBarIcon: (tabInfo) =>{
                return <Icon name ="list" size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor: Colors.accentColor
        }
    }
};

const ScreenTabNavigator = Platform.OS === 'android' 
? createMaterialBottomTabNavigator(tabScreenConfig,{
    activeTintColor:'white', 
    shifting:true
 }) 
 : createBottomTabNavigator(tabScreenConfig,{
    tabBarOptions:{
        activeTintColor: Colors.accentColor,
        shifting:true
    }
});

export default createAppContainer(ScreenTabNavigator);
