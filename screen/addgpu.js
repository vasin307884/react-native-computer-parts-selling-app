import React from 'react';
import { Text,View,ScrollView,Button,TextInput,StyleSheet,TouchableHighlight } from 'react-native';


export default class Addgpu extends React.Component {
    
    /*constructor(props){
        super(props)
        const email = this.props.navigation.state.params.emailx
        this.state = {email : email}
    }*/

    submitOrder = async () => {
        let myOrder = {
            gpuname:this.state.gname,
            gpuprice:this.state.gprice,
            desc:this.state.gdesc,
            review:this.state.review
        }
    
        alert(`You've added ${this.state.gname}! Price : ${this.state.gprice}`);
        this.props.navigation.navigate('GList')
        fetch('https://reactproject-ab869.firebaseio.com/gpulist.json', {
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
        <Text style = {{fontSize:20,fontWeight:'bold'}}>Adding Graphic cards Product </Text>
        
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} placeholder = 'ProductName' onChangeText = {(name) => this.setState({gname:name})} ></TextInput>
        </View>
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} placeholder = 'Price' onChangeText = {(price) => this.setState({gprice:price})}></TextInput>
        </View>
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} placeholder = 'Description' onChangeText = {(desc) => this.setState({gdesc:desc})}></TextInput>
        </View>
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} placeholder = 'Video Review URL' onChangeText = {(review) => this.setState({review:review})}></TextInput>
        </View>
        
        
        <View style={{alignItems:'center'}}>
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
