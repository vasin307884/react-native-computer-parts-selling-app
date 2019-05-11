import React from 'react';
import { ScrollView, FlatList,View} from 'react-native';
import Card from '../components/card'
import firebase from 'firebase'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {style} from '../style/homescreen'
import ListView from '../components/listview';
export default class UserPCSETList extends React.Component {
  static navigationOptions = {
    title: 'PC set',

  }

  constructor(props) {
    super(props)
    this.state = { data: [] }
  }
  
  componentDidMount() {
    firebase.database().ref('PC_SET_list').on('value', (snapshot) => {
      var defaultdata = {
        pcsetname : '',
        cpu : '',
        mainboard : '',
        gpu:'',
        ram:'',
        harddisk:'',
        powersupply:'',
        price:''
        
      }
      let data = snapshot.val()
      if(data == null){
        this.setState({data : defaultdata})
      }else{
        let items = Object.values(data)
        this.setState({ data: items })
       
      }
    }
  
    
    )
}
  
  callupdate(item) { 
  this.props.navigation.navigate('OrderPCSET', { pcsetname: item.pcsetname, cpu: item.cpu,mainboard:item.mainboard,gpu:item.gpu,ram:item.ram,harddisk
    :item.harddisk,powersupply:item.powersupply,price:item.price,itemx:item })
}
  

  render() {
    return (
    
    <ScrollView  >
        <View style={style}>
        <FlatList 
        data={this.state.data}
          renderItem={({ item }) => 
          <TouchableOpacity 
            onPress={() => this.callupdate(item)}>
        <ListView name={item.pcsetname} 
        cpu={item.cpu} 
        mainboard={item.mainboard} 
        gpu={item.gpu} 
        ram={item.ram}
        harddisk={item.harddisk}
        powersupply={item.powersupply}
        price={item.price}    
        img={{ uri: item.img }} 
            /></TouchableOpacity>
          }
        />
        </View>
      </ScrollView>
      
    );
  }

}

