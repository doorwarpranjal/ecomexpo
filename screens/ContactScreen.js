import React from 'react'
import { StyleSheet, Text, View } from "react-native";

export default function ContactScreen() {
    return (
        <View style={styles.container}>
        <Text >This is Contact screen</Text>
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
  