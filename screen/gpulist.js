import React from 'react';
import { ScrollView, FlatList,View} from 'react-native';
import Card from '../components/card'
import firebase from 'firebase'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {style} from '../style/homescreen'
import ListView from '../components/listview';
export default class GPUList extends React.Component {
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
        desc : ''
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
  deleteuser(name) {
    var ref = firebase.database().ref('gpulist')
    ref.orderByChild('gpuname').equalTo(name).on('child_added', function (snapshot) { 
       snapshot.ref.remove().then(function(){
         alert(`${snapshot.key} has been deleted`)
       }).catch(function(error){
         console.log(error)
       })
    })
    
  }
  
  callupdate(item) { 
  this.props.navigation.navigate('UpdateGPU', { name: item.gpuname, price: item.gpuprice, desc: item.desc,itemx:item })
}
  

  render() {
    return (
    
    <ScrollView  >
        <View style={style}>
        <FlatList 
        data={this.state.data}
          renderItem={({ item }) => 
          <TouchableOpacity 
          onLongPress={() => this.deleteuser(item.gpuname)}
            onPress={() => this.callupdate(item)}>
        <Card name={item.gpuname} 
        price={item.gpuprice} 
        img={{ uri: item.img}} 
        desc={item.desc}
            /></TouchableOpacity>
          }
        />
        </View>
      </ScrollView>
      
    );
  }

}

