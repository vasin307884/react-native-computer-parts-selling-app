import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
// import HeaderBar from './components/header';
import Icon from 'react-native-vector-icons/AntDesign';

export default class ListView extends React.Component {
  render() {
    let pic = { uri: 'https://i.ytimg.com/vi/_SXdMYghPLw/hqdefault.jpg' }

    return (
      <View style = {{flex:1, flexDirection:'row',borderWidth: 0.5,borderColor: 'black',marginBottom:5}}>   
      <View style={{marginLeft:5,flex:1,borderWidth: 1,borderColor: 'gray'}}>
      <Image style={{height:150,width:125}} source = {this.props.img}/>
      </View>
      <View style = {{flex:2}}>
      <Text style = {{fontSize : 18 , fontWeight : 'bold'}}>PC set: {this.props.name} </Text>
      <Text style={{fontSize:14}}>CPU : {this.props.cpu}</Text>
      <Text style={{fontSize:14}}>Mainboard : {this.props.mainboard}</Text>
      <Text style={{fontSize:14}}>GPU : {this.props.gpu}</Text>
      <Text style={{fontSize:14}}>Ram : {this.props.ram}</Text>
      <Text style={{fontSize:14}}>Harddisk : {this.props.harddisk}</Text>
      <Text style={{fontSize:14}}>Powersupply : {this.props.powersupply}</Text>
      <Text style={{fontSize:14,fontWeight:'bold',color:'red'}}>Price : {this.props.price}</Text>
  
      <Icon name="shoppingcart" size={40} color='black'/>
      
      </View> 
   
   </View>
    );
  }
}


