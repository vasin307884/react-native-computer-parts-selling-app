import React from 'react';
import { ScrollView, Image, StyleSheet, Text, View } from 'react-native';
import HeaderBar from '../components/header';
import Card from '../components/card'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class HomeScreen extends React.Component {
  render() {
    let pic = { uri: 'https://i.ytimg.com/vi/_SXdMYghPLw/hqdefault.jpg' }

    return (
      <ScrollView>
        <HeaderBar headtitle='My App' />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Details')}>
          <Card title='ไข่เจียวฟู' />
        </TouchableOpacity>
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    );
  }
}


