import React from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';
// import HeaderBar from './components/header';
import Icon from 'react-native-vector-icons/AntDesign';
import {CheckBox} from 'native-base'
export default class Card extends React.Component {
  render() {

    return (
    <View style = {{flex:1, flexDirection:'row',borderWidth: 0.5,borderColor: 'black',marginBottom:2}}>   
    <View style={{marginLeft:5,flex:1,borderWidth: 1,borderColor: 'gray'}}>
    <Image style={{height:100,width:125}} source = {this.props.img}/>
    </View>
    <View style = {{flex:2}}>
    <Text style = {{fontSize : 18 , fontWeight : 'bold'}}>Product Name: {this.props.name} </Text>
    <Text style={{color:'red',fontSize : 18}}>Price : {this.props.price}</Text>
    <Text style={{fontSize:14}}>Description : {this.props.desc}</Text>

    <Icon name="shoppingcart" size={40} color='black'/>
    
    </View> 
 
 </View>
    );
  }
}


