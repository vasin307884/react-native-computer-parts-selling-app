import React from 'react';
import { ScrollView, FlatList,View} from 'react-native';
import Card from '../components/card'
import firebase from 'firebase'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {style} from '../style/homescreen'
import ListView from '../components/listview';
export default class UserGPUList extends React.Component {
  static navigationOptions = {
    title: 'Lists of GPU ',

  }

  constructor(props) {
    super(props)
    this.state = { data: [] }
  }
  
  componentDidMount() {
    firebase.database().ref('gpulist').on('value', (snapshot) => {
      var defaultdata = {
        gpuname : '',
        gpuprice : '',
        desc : '',
        review:''
        
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
    this.props.navigation.navigate('OrderGPU', { name: item.gpuname, price: item.gpuprice, desc: item.desc,itemx:item,review:item.review })
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
        <Card name={item.gpuname} 
        price={item.gpuprice} 
        img={{ uri: item.img }} 
        desc={item.desc}
            /></TouchableOpacity>
          }
        />
        </View>
      </ScrollView>
      
    );
  }

}

