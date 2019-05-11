import React from 'react';
import { Text,View,ScrollView,Button,TextInput,TouchableHighlight,StyleSheet } from 'react-native';
import firebase from 'firebase';

export default class updatepcset extends React.Component {
    static navigationOptions = {
        title: 'Update CPU',

    }
    constructor(props) {
        super(props)
        const { pcsetname, price,cpu,mainboard,gpu,ram,harddisk,powersupply} = this.props.navigation.state.params
        const item = this.props.navigation.state.params.itemx
        this.state = { pcsetname: pcsetname, price: price, cpu:cpu , item : item,mainboard:mainboard,gpu:gpu,ram:ram,harddisk:harddisk,powersupply:powersupply }
        
    }

    updateuser(item) {
        var newData = {
            pcsetname : this.state.pcsetname,
            cpu : this.state.cpu,
            mainboard : this.state.mainboard,
            gpu:this.state.gpu,
            ram:this.state.ram,
            harddisk:this.state.harddisk,
            powersupply:this.state.powersupply
          }
        firebase.database().ref('PC_SET_list').orderByChild('pcsetname').equalTo(item.pcsetname).once('child_added',
            (snapshot) => {
                firebase.database().ref('PC_SET_list').child(snapshot.key).update(newData).then(function(){
                    alert("Data saved successfully.")
                }).catch(function(error){
                    alert(error)
                })
                
            })
            this.props.navigation.goBack()

    }

    render(){
        let stylex = {
            borderWidth:1,borderColor:'gray',marginBottom:5
        }
        return(
       <ScrollView>
       <View style = {{padding:20,marginTop:50}}>
        <Text style = {{fontSize:20,fontWeight:'bold'}}>Update Product</Text>
        
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} value={this.state.pcsetname} onChangeText = {(name) => this.setState({pcsetname:name})} ></TextInput>
        </View>
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} value ={this.state.cpu} onChangeText = {(cpu) => this.setState({cpu:cpu})}></TextInput>
        </View>
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} value ={this.state.mainboard} onChangeText = {(mainboard) => this.setState({mainboard:mainboard})}></TextInput>
        </View>
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} value ={this.state.gpu} onChangeText = {(gpu) => this.setState({gpu:gpu})}></TextInput>
        </View>
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} value ={this.state.ram} onChangeText = {(ram) => this.setState({ram:ram})}></TextInput>
        </View>
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} value ={this.state.harddisk} onChangeText = {(harddisk) => this.setState({harddisk:harddisk})}></TextInput>
        </View>
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} value ={this.state.powersupply} onChangeText = {(price) => this.setState({price:price})}></TextInput>
        </View>
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} value ={this.state.price} onChangeText = {(review) => this.setState({review:review})}></TextInput>
        </View>

        
        
        <View style={{alignItems:'center'}}>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton,]} 
         onPress={() => this.updateuser(this.state.item)}>
          <Text style={{fontSize:15,fontWeight:'bold',textAlign:'center'}}>Update Information</Text>
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