import React from 'react';
import { ScrollView, Image, StyleSheet, Text, View,Drawer,Button,WebView } from 'react-native';
import HeaderBar from '../components/header';
import Card from '../components/card'
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import mydata from '../data/mydata';
import ListView from '../components/listview';
import MenuButton from '../components/menubutton'
import { DrawerNavigator } from 'react-navigation';
import {Icon,Container, Content, Header, Left,Right} from 'native-base';
export default class MainMenuScreen extends React.Component {
  static navigationOptions = {
    title: 'Main menu'
  };
constructor(props){
  super(props)
  this.state = {data: [], loading: false}
}
  //https://reactproject-ab869.firebaseio.com/mydata.json
  loadData = async() =>{
    const res = 
    await fetch('https://reactproject-ab869.firebaseio.com/mydata.json')

    const netdata = await res.json()
    this.setState({data:netdata})
  }
  async componentDidMount(){
    await this.loadData()
  }

  render() {
    
     //let pic1 = { uri: 'https://i.ytimg.com/vi/_SXdMYghPLw/hqdefault.jpg' }
    // let pic2 = { uri: 'https://i.ytimg.com/vi/7xqwqD0c0Ls/hqdefault.jpg' }
    // let pic3 = { uri: 'https://i.ytimg.com/vi/T34PsWC-amM/hqdefault.jpg' }

    return (
      <ScrollView>
        <HeaderBar headtitle='! News !' />
        <WebView
        source={{uri: 'https://www.sanook.com/hitech/tag/%E0%B8%82%E0%B9%88%E0%B8%B2%E0%B8%A7%E0%B8%84%E0%B8%AD%E0%B8%A1%E0%B8%9E%E0%B8%B4%E0%B8%A7%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C/'}}
        style={{marginTop: 0,height:500}}
        />
        {/*<FlatList
          data={this.state.data}
          renderItem={({item}) => 
          <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Details',item)}>
          <ListView title ={item.title}
          desc ='See more detail--->'  
          img={{uri:item.picture}} />
          </TouchableOpacity>
          
          }
          />
        */}
        <Button style={{marginTop:20 }} title="Add CPU" onPress={()=>this.props.navigation.navigate('Add')}></Button>
        <Button style={{marginTop:20 }} title="Add GPU" onPress={()=>this.props.navigation.navigate('Addg')}></Button>
        <Button style={{marginTop:20 }} title="Add Ram" onPress={()=>this.props.navigation.navigate('Addr')}></Button>
        <Button style={{marginTop:20 }} title="View CPU Product" onPress={()=>this.props.navigation.navigate('PList')}></Button>
        <Button style={{marginTop:20 }} title="View Graphic card Product" onPress={()=>this.props.navigation.navigate('GList')}></Button>
        <Button style={{marginTop:20 }} title="View Ram Product" onPress={()=>this.props.navigation.navigate('RList')}></Button>
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


