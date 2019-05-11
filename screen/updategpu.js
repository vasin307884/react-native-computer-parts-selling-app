import React from 'react';
import { Text,View,ScrollView,Button,TextInput,TouchableHighlight,StyleSheet } from 'react-native';
import firebase from 'firebase';

export default class updategpu extends React.Component {
    static navigationOptions = {
        title: 'Update GPU',

    }
    constructor(props) {
        super(props)
        const { name, price, desc,review} = this.props.navigation.state.params
        const item = this.props.navigation.state.params.itemx
        this.state = { gname: name, gprice: price, gdesc: desc , item : item ,review:review}
        
    }

    updateuser(item) {
        var newData = {
            gpuname : this.state.gname,
            gpuprice : this.state.gprice,
            desc : this.state.gdesc,
            review:this.state.review
          }
        firebase.database().ref('gpulist').orderByChild('gpuname').equalTo(item.gpuname).once('child_added',
            (snapshot) => {
                firebase.database().ref('gpulist').child(snapshot.key).update(newData).then(function(){
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
        <TextInput style = {{fontSize:15,padding:20}} value={this.state.gname} onChangeText = {(name) => this.setState({gname:name})} ></TextInput>
        </View>
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} value ={this.state.gprice} onChangeText = {(price) => this.setState({gprice:price})}></TextInput>
        </View>
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} value ={this.state.gdesc} onChangeText = {(desc) => this.setState({gdesc:desc})}></TextInput>
        </View>
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} value ={this.state.review} onChangeText = {(review) => this.setState({review:review})}></TextInput>
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