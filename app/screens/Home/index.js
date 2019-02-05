/**
======================
*Author : Hari irawan
======================
* @format
* @flow
*/
import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './Home';
import Profile from '../Profile'
import History from '../History'

const getTabBarIcon = (navigation, tintColor) => {
    const { routeName } = navigation.state;
    let iconName;
    switch (routeName) {
        case 'Home':
            iconName = 'home-variant';
            break;  
        case 'Profile':
            iconName = 'account';
            break;
        case 'History':
            iconName = 'clock-outline';
            break;
    }
    return <Icon name={iconName} size={25} color={tintColor} />;
  };


const TabNavigator = createBottomTabNavigator(
  {
    Home: Home,
    History:History,
    Profile: Profile
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) =>
        getTabBarIcon(navigation, tintColor)
    }),
    tabBarOptions: {
      activeTintColor: '#18AB66',
      inactiveTintColor: '#403018'
    }
  },
  {
    initialRouteName: 'Home'
  }
  
);

export default createAppContainer(TabNavigator);