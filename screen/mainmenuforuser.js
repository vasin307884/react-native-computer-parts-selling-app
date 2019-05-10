import React from 'react';
import { ScrollView, Image, StyleSheet, Text, View,Drawer,Button,WebView } from 'react-native';
import HeaderBar from '../components/header';
import Card from '../components/card'
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import mydata from '../data/mydata';
import ListView from '../components/listview';
import {Container, Content, Header, Left,Right} from 'native-base';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Entypo';
export default class MainMenuUserScreen extends React.Component {
  static navigationOptions =
   {
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
        <View style={{backgroundColor: "#00b5ec"}}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',justifyContent: 'center',marginTop:5}}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',justifyContent: 'center'}}>
        <Icon1 name="cpu" size={25} color='black'  />
        <TouchableOpacity style={{marginTop:5}} onPress={()=>this.props.navigation.navigate('Usercpulist')}>
        <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center',color:'white'}}>
          View CPU Product
        </Text>
        </TouchableOpacity>
        </View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',justifyContent: 'center'}}>
        <Icon2 name="gpu" size={30} color='black'  />
        <TouchableOpacity style={{marginTop:5}} onPress={()=>this.props.navigation.navigate('Usergpulist')}>
        <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center',color:'white'}}>
          View GPU Product
        </Text>
        </TouchableOpacity>
        </View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',justifyContent: 'center'}}>
        <Icon3 name="ruler" size={25} color='black'  />
        <TouchableOpacity style={{marginTop:5}} onPress={()=>this.props.navigation.navigate('Userramlist')}>
        <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center',color:'white'}}>
          View RAM Product
        </Text>
        </TouchableOpacity>
        </View>
        </View>

        </View>
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
        
        <Button style={{marginTop:20 }} title="Add CPU" onPress={()=>this.props.navigation.navigate('Add')}></Button>
        <Button style={{marginTop:20 }} title="Add VGA" onPress={()=>this.props.navigation.navigate('Addg')}></Button>
        <Button style={{marginTop:20 }} title="Add Ram" onPress={()=>this.props.navigation.navigate('Add')}></Button>*/}
    
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


