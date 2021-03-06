import React from 'react';
import { Text,View,ScrollView,Button,TextInput,TouchableHighlight,StyleSheet,Linking ,WebView} from 'react-native';
import firebase from 'firebase';
import { FlatList } from 'react-native-gesture-handler';

export default class orderram extends React.Component {
    static navigationOptions = {
        title: 'Order RAM',

    }
    constructor(props) {
        super(props)
        const { name, price,review} = this.props.navigation.state.params
        this.state = { rname: name, rprice: price,review:review}
        
    }
    submitOrder = async () => {
        let myOrder = {
            username:this.state.uname,
            useraddress:this.state.uaddress,
            userphonenum:this.state.uphonenum,
            ramname : this.state.rname,
            ramprice : this.state.rprice

        }
    
        alert(`Thank you ${this.state.uname} for buying ${this.state.rname} price : ${this.state.rprice}`);
        this.props.navigation.navigate('MainUser')
        fetch('https://reactproject-ab869.firebaseio.com/ramorder.json', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(myOrder),
          });
          await this.loadData()
          
         
      }
    render(){
        let stylex = {
            borderWidth:1,borderColor:'gray',marginBottom:5
        }
        return(
       <ScrollView>
       <View style = {{padding:20,marginTop:50}}>
        <Text style = {{fontSize:20,fontWeight:'bold'}}>Order Page </Text>
        
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}}  value={this.state.rname} editable={false}></TextInput>
        </View>
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}}  value={this.state.rprice} editable={false}></TextInput>
        </View>
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} placeholder = 'Name' onChangeText = {(name) => this.setState({uname:name})} ></TextInput>
        </View>
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} placeholder = 'Address' onChangeText = {(address) => this.setState({uaddress:address})}></TextInput>
        </View>
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} placeholder = 'Phone-number' onChangeText = {(phonenum) => this.setState({uphonenum:phonenum})}></TextInput>
        </View>
          
          
        <View style={{alignItems:'center'}}>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton,]} 
         onPress={() => this.submitOrder()}>
          <Text style={{fontSize:15,fontWeight:'bold',textAlign:'center'}}>Order this product</Text>
        </TouchableHighlight> 
        </View>
        </View>

        </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
      },
      loginButton: {
        backgroundColor: "#00b5ec",
      }
    },
    
    );