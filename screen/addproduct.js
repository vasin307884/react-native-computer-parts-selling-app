import React from 'react';
import { Text,View,ScrollView,Button,TextInput,StyleSheet,TouchableHighlight,Alert } from 'react-native';
import {ImagePicker,Permissions} from 'expo';
import *as firebase from 'firebase';
export default class Addproduct extends React.Component {
    
    /*constructor(props){
        super(props)
        const email = this.props.navigation.state.params.emailx
        this.state = {email : email}
    }*/

    submitOrder = async () => {
        let myOrder = {
            productname:this.state.pname,
            productprice:this.state.pprice,
            desc:this.state.pdesc,
            review:this.state.review
            

        }
    
        alert(`You've added ${this.state.pname}! Price : ${this.state.pprice}`);
        this.props.navigation.navigate('PList')
        fetch('https://reactproject-ab869.firebaseio.com/productlist.json', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(myOrder),
          });
          await this.loadData()
          
         
      }
onChooseImage =async()=>{
  let result = await ImagePicker.launchImageLibraryAsync();
  if(!result.cancelled){
    this.uploadImage(result.uri,"Product_image")
    .then(() =>{
      Alert.alert("Uploaded successfull");
    })
    .catch((error)=>{
      Alert.alert(error);
    }
    );
  }
}
uploadImage = async(uri,imageName) =>{
  const response = await fetch(uri);
  const blob = await response.blob();
  var metadata = { contentType: "image/jpeg" };
  var ref = firebase.storage().ref().child("images/"+imageName);
  return ref.put(blob,metadata);
}
    render(){
        let stylex = {
            borderWidth:1,borderColor:'gray',marginBottom:5
        }
        return(
       <ScrollView>
       <View style = {{padding:20,marginTop:50}}>
        <Text style = {{fontSize:20,fontWeight:'bold'}}>Adding CPU Product </Text>
        
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} placeholder = 'ProductName' onChangeText = {(name) => this.setState({pname:name})} ></TextInput>
        </View>
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} placeholder = 'Price' onChangeText = {(price) => this.setState({pprice:price})}></TextInput>
        </View>
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} placeholder = 'Description' onChangeText = {(desc) => this.setState({pdesc:desc})}></TextInput>
        </View>
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} placeholder = 'Video Review URL' onChangeText = {(review) => this.setState({review:review})}></TextInput>
        </View>
        
        
        <View style={{alignItems:'center',marginTop:10}}>
        <Button title="Upload image.." onPress={this.onChooseImage}></Button>
        </View>
        <View style={{alignItems:'center',marginTop:20}}>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton,]} 
        onPress={() => this.submitOrder()}>
          <Text style={{fontSize:15,fontWeight:'bold',textAlign:'center'}}>Add Product</Text>
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
