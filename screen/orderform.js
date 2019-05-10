import React from 'react';
import {Linking,WebView,Share,TextInput,Button,ScrollView,Image, StyleSheet, Text, View } from 'react-native';
import HeaderBar from '../components/header';
import Card from '../components/card'
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import QRCode from 'react-native-qrcode';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class OrderFormScreen extends React.Component {
    constructor(props){
        super(props)
        const {id, title,desc,picture} = this.props.navigation.state.params;
        //console.log("id="+id)
        this.state = {data:[],productid:""+id,producttitle:title}
    }
    loadData = async() =>{
        const res = 
        await fetch('https://reactproject-ab869.firebaseio.com/myorder.json')
    
        const netdata = await res.json()
        console.log(netdata)
        const array = Object.values(netdata);
        console.log(array)
        this.setState({data:netdata})
      }
      async componentDidMount(){
        await this.loadData()
      }

      //code for submit button
        submitOrder = async() =>{
        let myOrder={
            id: this.state.productid,
            title: this.state.producttitle
        }
        let url = 'https://reactproject-ab869.firebaseio.com/myorder.json'
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
        },
        body: JSON.stringify(myOrder)
        });
        await this.loadData()
    }
    //code for share
    onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'React Native | A framework for building native apps using React',
          });
    
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };
    
    render() {
    let pic = { uri: 'https://i.ytimg.com/vi/_SXdMYghPLw/hqdefault.jpg' }
    
    //console.log(this.props.navigation)
    return (
      <ScrollView>
        <View style={{padding:10}}>

        <Icon name="rocket" size={40} color='red' />
        <Icon name="user" size={40} color='black' />

          <Text style={{fontSize:30}}>ID : </Text>
          <TextInput onChangeText={(id) => this.setState({productid:id})} 
          style={{fontSize:20}} 
          value={this.state.productid}></TextInput>

          <Text style={{fontSize:30}}>Title : </Text>
          <TextInput onChangeText={(title) => this.setState({producttitle:title})}
          style={{fontSize:20}} 
          value={this.state.producttitle}></TextInput>

          <Button onPress={() => this.submitOrder()}
          title='Make order'/>

        <Button onPress={() => this.props.navigation.navigate('QRcode')}
          title='Scan QRcode'/>

        <Button onPress={this.onShare} title="Share" />
        
        <Button title='Open web' onPress={() => {Linking.openURL('https://www.google.co.th/')}} />

        <Button title='Make call' onPress={() => {Linking.openURL('tel:0882734724')}} />

        <Button title='Mail to' onPress={() => {Linking.openURL('mailto:6031305033@lamduan.mfu.ac.th')}} />

        <Button title='Open map' onPress={() => {Linking.openURL('https://goo.gl/maps/seAZXs7QNR4QN7hN9')}} />
        
        <WebView
        source={{uri: 'https://www.youtube.com/embed/lKdOW0OOBaE'}}
        style={{marginTop: 20,height:300}}
        />

        <FlatList
          data={this.state.data}
          renderItem={({item}) => 
          <Text>{item.id} | {item.title}</Text>}
        />
        <QRCode
          value={this.state.producttitle}
          size={200}
          bgColor='black'
          fgColor='white'/>
        </View>
      </ScrollView>
    );
  }
}


