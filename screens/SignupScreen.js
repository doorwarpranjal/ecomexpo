import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import {Button} from 'react-native-elements' ;

export default function SignupScreen({navigation}) {
    return (
        <View style={styles.container}>
        <Text>New User Signup here here</Text>
        <Button title="Already user ?" onPress={()=>{navigation.navigate('Login')}}/>
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
  