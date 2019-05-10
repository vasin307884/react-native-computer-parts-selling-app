import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Entypo';
export default class HeaderBar extends React.Component {
    render() {
        return (
            <View style={{
                marginTop: 0,
                backgroundColor: 'black',
                flex: 1, flexDirection: 'row', alignItems: 'center',justifyContent: 'center' 

            }}>
            <Icon name="newspaper-o" size={40} color='yellow' />
                <Text style={{
                    fontSize: 30,
                    color: 'white',
                    textAlign: 'center',
                    padding: 5
                }}>
                    {this.props.headtitle}
                </Text>
            </View>
        );
    }
}


