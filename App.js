import * as React from 'react';
import {View, Text} from 'react-native';
import {createStaticNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen(){
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

function DetailsScreen(){
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>HomeScreen</Text>
    </View>
  );
}
const RooStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions:{
    headerStyle:{ backgroundColor: 'tomato'},
  },
  screens:{
    Home:{
      screen: HomeScreen,
      options:{
        title: 'Overview',
      },
    },
    Details: DetailsScreen,
  },
});

const Navigation = createStaticNavigation(RooStack);

export default function App(){
  return <Navigation/>;
}