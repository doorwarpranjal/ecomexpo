import React from 'react'
import { StyleSheet, Text, View } from "react-native";


export default function ProfileScreen() {
    return (
        <View style={styles.container}>
        <Text>Hello user to PRofile screen</Text>
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
  