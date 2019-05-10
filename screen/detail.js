import React from 'react';
import { ScrollView,Image, StyleSheet, Text, View } from 'react-native';
import HeaderBar from '../components/header';
import Card from '../components/card'

export default class DetailsScreen extends React.Component {
  render() {
    let pic = { uri: 'https://i.ytimg.com/vi/_SXdMYghPLw/hqdefault.jpg' }
    let pic1 = {uri :'https://s.isanook.com/hi/0/ud/294/1474645/blogheader_cpu.jpg'}
    const {id, title,desc,picture} = this.props.navigation.state.params;
    console.log(this.props.navigation)
    return (
      <ScrollView>
        <View>
        <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center'}}>{title}</Text>
          <Image source={{uri:picture}} style={{height:250}}/>
          <Text>{desc}</Text>
          <Image source={pic1} style={{height:150}}/>
        </View>
      </ScrollView>
    );
  }
}


