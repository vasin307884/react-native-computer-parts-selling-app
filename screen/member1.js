import React from 'react';
import { ScrollView,Image, StyleSheet, Text, View } from 'react-native';
import HeaderBar from '../components/header';
import Card from '../components/card'

export default class Member1Screen extends React.Component {
  render() {
    let pic = { uri: 'https://i.ytimg.com/vi/_SXdMYghPLw/hqdefault.jpg' }

    return (
      <ScrollView>
        <Card />
      </ScrollView>
    );
  }
}


