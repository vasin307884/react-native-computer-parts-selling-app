import React from 'react';
import { ScrollView, Image, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from './screen/home'
import DetailsScreen from './screen/detail'
import Member1Screen from './screen/member1';
import Member2Screen from './screen/member2';
import Member3creen from './screen/member3';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Member1: Member1Screen,
    Member2: Member2Screen,
    Member3: Member3creen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    )

  }
}


