import React from 'react';
import { Text,View,ScrollView,Button,TextInput,TouchableHighlight,StyleSheet } from 'react-native';
import firebase from 'firebase';

export default class updatecpu extends React.Component {
    static navigationOptions = {
        title: 'Update CPU',

    }
    constructor(props) {
        super(props)
        const { name, price, desc} = this.props.navigation.state.params
        const item = this.props.navigation.state.params.itemx
        this.state = { pname: name, pprice: price, pdesc: desc , item : item }
        
    }

    updateuser(item) {
        var newData = {
            productname : this.state.pname,
            productprice : this.state.pprice,
            desc : this.state.pdesc
          }
        firebase.database().ref('productlist').orderByChild('productname').equalTo(item.productname).once('child_added',
            (snapshot) => {
                firebase.database().ref('productlist').child(snapshot.key).update(newData).then(function(){
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
        <TextInput style = {{fontSize:15,padding:20}} value={this.state.pname} onChangeText = {(name) => this.setState({pname:name})} ></TextInput>
        </View>
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} value ={this.state.pprice} onChangeText = {(price) => this.setState({pprice:price})}></TextInput>
        </View>
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} value ={this.state.pdesc} onChangeText = {(desc) => this.setState({pdesc:desc})}></TextInput>
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