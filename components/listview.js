import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
// import HeaderBar from './components/header';


export default class ListView extends React.Component {
  render() {
    let pic = { uri: 'https://i.ytimg.com/vi/_SXdMYghPLw/hqdefault.jpg' }

    return (
        <View style={{flex:1,flexDirection:'row',marginBottom:2,backgroundColor:'#E2FADB'}}>
            <View style={{flex:1}}>
                <Image source={this.props.img} style={{height:150}}/>
            </View>
            <View style={{flex:1,paddingLeft:6}}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>{this.props.title}</Text>
                <Text>{this.props.desc}</Text>
            </View>
        </View>
    );
  }
}


