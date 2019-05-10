import React from 'react';
import {Platform,Dimensions,StyleSheet} from 'react-native';
import {createDrawerNavigator,createAppContainer} from 'react-navigation';
import {Ionicons} from '@expo/vector-icons'
export default class MenuButton extends React.Component{
    render(){
        return(
            <Ionicons 
            name="menu"
            color="black"
            size={30}
            style={style.menuIcon}
            onPress={() => {}}
            />
           
        )
    }
}
const style = StyleSheet.create({
    menuIcon:{
        zIndex: 9,
        position: 'absolute',
        top:40,
        right:20
    }
})