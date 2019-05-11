import React from 'react';
import { Text,View,ScrollView,Button,TextInput,TouchableHighlight,StyleSheet,Linking } from 'react-native';
import firebase from 'firebase';
import { FlatList } from 'react-native-gesture-handler';

export default class ordergpu extends React.Component {
    static navigationOptions = {
        title: 'Order GPU',

    }
    constructor(props) {
        super(props)
        const { name, price,review} = this.props.navigation.state.params
        this.state = { gname: name, gprice: price,review:review}
        
    }
    submitOrder = async () => {
        let myOrder = {
            username:this.state.uname,
            useraddress:this.state.uaddress,
            userphonenum:this.state.uphonenum,
            gpuname : this.state.gname,
            gpuprice : this.state.gprice

        }
    
        alert(`Thank you ${this.state.uname} for buying ${this.state.gname} price : ${this.state.gprice}`);
        this.props.navigation.navigate('MainUser')
        fetch('https://reactproject-ab869.firebaseio.com/gpuorder.json', {
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
        <TextInput style = {{fontSize:15,padding:20}}  value={this.state.gname} editable={false}></TextInput>
        </View>
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}}  value={this.state.gprice} editable={false}></TextInput>
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
        <View>
        <Button title='Watch review here' onPress={() => {Linking.openURL(this.state.review)}} />
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