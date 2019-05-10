import React from 'react';
import { Text,View,ScrollView,Button,TextInput,TouchableHighlight,StyleSheet } from 'react-native';
import firebase from 'firebase';

export default class updateram extends React.Component {
    static navigationOptions = {
        title: 'Update RAM',

    }
    constructor(props) {
        super(props)
        const { name, price, desc} = this.props.navigation.state.params
        const item = this.props.navigation.state.params.itemx
        this.state = { rname: name, rprice: price, rdesc: desc , item : item }
        
    }

    updateuser(item) {
        var newData = {
            ramname : this.state.rname,
            ramprice : this.state.rprice,
            desc : this.state.rdesc
          }
        firebase.database().ref('ramlist').orderByChild('ramname').equalTo(item.ramname).once('child_added',
            (snapshot) => {
                firebase.database().ref('ramlist').child(snapshot.key).update(newData).then(function(){
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
        <TextInput style = {{fontSize:15,padding:20}} value={this.state.rname} onChangeText = {(name) => this.setState({rname:name})} ></TextInput>
        </View>
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} value ={this.state.rprice} onChangeText = {(price) => this.setState({rprice:price})}></TextInput>
        </View>
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} value ={this.state.rdesc} onChangeText = {(desc) => this.setState({rdesc:desc})}></TextInput>
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