import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import {Icon} from 'react-native-elements' ;

export default function WishlistScreen() {
    return (
        <View style={styles.container}>
        <Text>EMPTY WISHLIST</Text>


        <Icon
  name='chevron-right'
  type='entypo'
  color='#517fa4' />


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
  