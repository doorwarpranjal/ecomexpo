import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import {Button} from 'react-native-elements' ;


export default function LoginScreen({navigation}) {
    return (
        <View style={styles.container}>
        <Text>Please login here</Text>


        <Button title="SIGNUP TODAY" onPress={()=>{navigation.navigate('Signup')}}/>




    </View>
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
      color : 'white',
      fontSize : 42,
      backgroundColor : 'skyblue'
    },
  });
  