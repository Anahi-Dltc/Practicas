import React from "react";
import { Text, View, StyleSheet } from 'react-native';
const Line = (props) => {
    console.log ('componente creado')
    return(
       <View style={style.box}>
               <Text style={style.text}>{props.name}</Text>
               <Text style={style.text}>{props.desc}</Text>
             </View>
    );    
};
const style = StyleSheet.create({
  box:{
    backgroundColor:'#c948c3ff',
    height: '25%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    color:'white',
    fontFamily: 'Arial',
    fontSize: 25
  }
});
export default Line;