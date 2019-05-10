import React from 'react';
import { ScrollView, FlatList,View} from 'react-native';
import Card from '../components/card'
import firebase from 'firebase'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {style} from '../style/homescreen'
import ListView from '../components/listview';
export default class ProductList extends React.Component {
  static navigationOptions = {
    title: 'Lists of CPU ',

  }

  constructor(props) {
    super(props)
    this.state = { data: [] }
  }
  
  componentDidMount() {
    firebase.database().ref('productlist').on('value', (snapshot) => {
      var defaultdata = {
        productname : '',
        productprice : '',
        desc : '',
        
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
    var ref = firebase.database().ref('productlist')
    ref.orderByChild('productname').equalTo(name).on('child_added', function (snapshot) { 
       snapshot.ref.remove().then(function(){
         alert(`${snapshot.key} has been deleted`)
       }).catch(function(error){
         console.log(error)
       })
    })
    
  }
  
  callupdate(item) { 
  this.props.navigation.navigate('UpdateCPU', { name: item.productname, price: item.productprice, desc: item.desc,itemx:item })
}
  

  render() {
    return (
    
    <ScrollView  >
        <View style={style}>
        <FlatList 
        data={this.state.data}
          renderItem={({ item }) => 
          <TouchableOpacity 
          onLongPress={() => this.deleteuser(item.productname)}
            onPress={() => this.callupdate(item)}>
        <Card name={item.productname} 
        price={item.productprice} 
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

