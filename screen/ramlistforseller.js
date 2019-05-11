import React from 'react';
import { ScrollView, FlatList,View} from 'react-native';
import Card from '../components/card'
import firebase from 'firebase'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {style} from '../style/homescreen'
import ListView from '../components/listview';
export default class RamList extends React.Component {
  static navigationOptions = {
    title: 'Lists of RAM ',

  }

  constructor(props) {
    super(props)
    this.state = { data: [] }
  }
  
  componentDidMount() {
    firebase.database().ref('ramlist').on('value', (snapshot) => {
      var defaultdata = {
        ramname : '',
        ramprice : '',
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
  deleteuser(name) {
    var ref = firebase.database().ref('ramlist')
    ref.orderByChild('ramname').equalTo(name).on('child_added', function (snapshot) { 
       snapshot.ref.remove().then(function(){
         alert(`${snapshot.key} has been deleted`)
       }).catch(function(error){
         console.log(error)
       })
    })
    
  }
  
  callupdate(item) { 
  this.props.navigation.navigate('UpdateRam', { name: item.ramname, price: item.ramprice, desc: item.desc,itemx:item,review:item.review })
}
  

  render() {
    return (
    
    <ScrollView  >
        <View style={style}>
        <FlatList 
        data={this.state.data}
          renderItem={({ item }) => 
          <TouchableOpacity 
          onLongPress={() => this.deleteuser(item.ramname)}
            onPress={() => this.callupdate(item)}>
        <Card name={item.ramname} 
        price={item.ramprice} 
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

