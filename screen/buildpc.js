import React from 'react';
import { Text,View,ScrollView,Button,TextInput,StyleSheet,TouchableHighlight } from 'react-native';


export default class Buildpc extends React.Component {
    
    /*constructor(props){
        super(props)
        const email = this.props.navigation.state.params.emailx
        this.state = {email : email}
    }*/

    submitOrder = async () => {
        let myOrder = {
            pcsetname:this.state.pcsetname,
            cpu:this.state.cpu,
            mainboard:this.state.mainboard,
            gpu:this.state.gpu,
            ram:this.state.ram,
            harddisk:this.state.harddisk,
            powersupply:this.state.powersupply,
            price:this.state.price

        }
    
        alert(`You've added ${this.state.pcsetname}! 
        CPU : ${this.state.cpu}
        Mainboard : ${this.state.mainboard}
        GPU : ${this.state.gpu}
        RAM : ${this.state.ram}
        Harddisk : ${this.state.harddisk}
        Powersupply : ${this.state.powersupply}
        Price : ${this.state.price}`);
        this.props.navigation.navigate('PCList')
        fetch('https://reactproject-ab869.firebaseio.com/PC_SET_list.json', {
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
        <Text style = {{fontSize:20,fontWeight:'bold'}}>Building your PC set</Text>
        
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} placeholder = 'PCsetname' onChangeText = {(pcsetname) => this.setState({pcsetname:pcsetname})} ></TextInput>
        </View>
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} placeholder = 'CPU' onChangeText = {(cpu) => this.setState({cpu:cpu})}></TextInput>
        </View>
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} placeholder = 'Mainboard' onChangeText = {(mainboard) => this.setState({mainboard})}></TextInput>
        </View>
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} placeholder = 'GPU' onChangeText = {(gpu) => this.setState({gpu:gpu})}></TextInput>
        </View>
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} placeholder = 'Ram' onChangeText = {(ram) => this.setState({ram:ram})}></TextInput>
        </View>
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} placeholder = 'Harddisk' onChangeText = {(harddisk) => this.setState({harddisk:harddisk})}></TextInput>
        </View>
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} placeholder = 'Powersupply' onChangeText = {(powersupply) => this.setState({powersupply:powersupply})}></TextInput>
        </View>
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} placeholder = 'Price' onChangeText = {(price) => this.setState({price:price})}></TextInput>
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
