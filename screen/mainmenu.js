import React from 'react';
import { ScrollView, Image, StyleSheet, Text, View } from 'react-native';
import HeaderBar from '../components/header';
import Card from '../components/card'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class MainMenuScreen extends React.Component {
  render() {
    // let pic1 = { uri: 'https://i.ytimg.com/vi/_SXdMYghPLw/hqdefault.jpg' }
    // let pic2 = { uri: 'https://i.ytimg.com/vi/7xqwqD0c0Ls/hqdefault.jpg' }
    // let pic3 = { uri: 'https://i.ytimg.com/vi/T34PsWC-amM/hqdefault.jpg' }

    return (
      <ScrollView>
        <HeaderBar headtitle='My App' />
        
        
        {/* <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Details')}>
          <Card img={pic1} title='ไข่เจียวฟู' />
        </TouchableOpacity>
        <Card img={pic2} />
        <Card img={pic3} />
        <Card />
        <Card /> */}
      </ScrollView>
    );
  }
}


