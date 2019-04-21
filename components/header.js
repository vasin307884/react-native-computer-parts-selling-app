import React from 'react';
import { Text, View } from 'react-native';

export default class HeaderBar extends React.Component {
    render() {
        return (
            <View style={{
                marginTop: 20,
                backgroundColor: 'rgba(51, 153, 255,0.5)',
            }}>
                <Text style={{
                    fontSize: 30,
                    textAlign: 'center',
                    padding: 5
                }}>
                    {this.props.headtitle}
                </Text>
            </View>
        );
    }
}


