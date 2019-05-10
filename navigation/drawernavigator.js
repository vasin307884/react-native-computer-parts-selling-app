import react from'react';
import {Platform,Dimensions} from 'react-native';
import {createDrawerNavigator,createAppContainer} from 'react-navigation';
import HomeScreen from '../screen/home';

const WIDTH = Dimensions.get('window').width;
const DrawerNavigator = createDrawerNavigator({
    home: {
        screen:HomeScreen
    },
})
export default createAppContainer(DrawerNavigator);