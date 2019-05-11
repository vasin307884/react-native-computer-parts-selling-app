import React from 'react';
import { ScrollView, Image, StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createStackNavigator,createSwitchNavigator,createBottomTabNavigator} from "react-navigation";
import {createDrawerNavigator} from 'react-navigation';
import DetailsScreen from './screen/detail';
import MainMenuScreen from './screen/mainmenuforseller';
import OrderFormScreen from './screen/orderform';
import QRcodeScreen from './screen/qrcode';
import LoginScreen from './screen/loginform';
import Addproduct from './screen/addproduct';
import firebase from 'firebase'
import ProductList from './screen/cpulistforseller';
import Addgpu from './screen/addgpu';
import GPUList from './screen/gpulistforseller';
import updatecpu from './screen/updatecpu';
import updategpu from './screen/updategpu';
import MainMenuUserScreen from './screen/mainmenuforuser';
import Addram from './screen/addram';
import RamList from './screen/ramlistforseller';
import updateram from './screen/updateram';
import UserProductList from './screen/cpulistforuser';
import ordercpu from './screen/cpuorder';
import UserGPUList from './screen/gpulistforuser';
import ordergpu from './screen/gpuorder';
import UserRAMList from './screen/ramlistforuser';
import orderram from './screen/ramorder';
import BuildingPC from './screen/buildpc';
import PCsetlist from './screen/pcsetlistforseller';
import updatepcset from './screen/updatepcset';
import UserPCSETList from './screen/pcsetlistforuser';
import orderpcset from './screen/pcsetorder';

const Productupdate = createStackNavigator({
  PList:{screen:ProductList},
  GList:{screen:GPUList},
  RList:{screen:RamList},
  OrderCPU : ordercpu,
  Usercpulist:{screen:UserProductList},
  Usergpulist:{screen:UserGPUList},
  Userramlist:{screen:UserRAMList},
  UpdateCPU:{screen:updatecpu},
  UpdateGPU : {screen : updategpu},
  updateRam : {screen : updateram}
 
})
const ProductStackTab = createBottomTabNavigator({
  PList : {screen : Productupdate},
  GList : {screen : Productupdate},
  RList:{screen : Productupdate},
  OrderCPU :{screen : Productupdate},
  Usercpulist:{screen:UserProductList},
  Usergpulist:{screen:Productupdate},
  Userramlist:{screen: UserRAMList}
  // Manage : {screen:setting}
 
})
const Loginnavigator = createStackNavigator({
  Login : {screen : LoginScreen},
  Add : {screen : Addproduct},
  Addg : {screen : Addgpu},
  Addr : {screen : Addram},
  OrderCPU : {screen : ordercpu}
})

const LandingNavigator= createSwitchNavigator({
  LoginForm :{screen : LoginScreen},
  PList : {screen : ProductStackTab},
  GList : {screen : ProductStackTab},
  RList : {screen : ProductStackTab},
  Usercpulist:{screen:UserProductList},
  Usergpulist:{screen:UserGPUList},
  Userramlist:{screen:UserRAMList},
  Login : {screen : Loginnavigator},
  initialRouteName: 'LoginForm'
  
})
const AppNavigator = createStackNavigator(
  {
    Details: DetailsScreen,
    Main: MainMenuScreen,
    MainUser : MainMenuUserScreen,
    OrderForm: OrderFormScreen,
    QRcode: QRcodeScreen,
    Login: LoginScreen,
    Add: Addproduct,
    Addg: Addgpu,
    Addr: Addram,
    PList: ProductList,
    GList : GPUList,
    RList : RamList,
    PCList : PCsetlist,
    Usercpulist: UserProductList,
    Usergpulist:UserGPUList,
    Userramlist:UserRAMList,
    Userpcsetlist:UserPCSETList,
    UpdateCPU: updatecpu,
    UpdateGPU: updategpu,
    UpdateRam : updateram,
    UpdatePCSET : updatepcset,
    OrderCPU : ordercpu,
    OrderGPU: ordergpu,
    OrderRAM: orderram,
    OrderPCSET : orderpcset,
    Buildpc:BuildingPC
  }, 
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#00b5ec",
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
    },
    },
  }
);
const AppContainer = createAppContainer(AppNavigator,LandingNavigator);

export default class App extends React.Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyCOYVesQOEBuey5OCrn6EWhNy1wFh9XOOk",
      authDomain: "reactproject-ab869.firebaseapp.com",
      databaseURL: "https://reactproject-ab869.firebaseio.com",
      projectId: "reactproject-ab869",
      storageBucket: "reactproject-ab869.appspot.com",
      messagingSenderId: "7766544322"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      
      <AppContainer />
      
    )
  }
}