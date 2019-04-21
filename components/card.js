import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
// import HeaderBar from './components/header';


export default class Card extends React.Component {
  render() {
    let pic = { uri: 'https://i.ytimg.com/vi/_SXdMYghPLw/hqdefault.jpg' }

    return (
    //   <View>
    //     <HeaderBar />
        <View style={{ borderColor: 'gray', borderWidth: 0.5 }}>
          <Image style={{ height: 200 }}
            source={pic} />
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 10 }}>
            {this.props.title}
          </Text>
        </View>
    //   </View>
    );
  }
}


