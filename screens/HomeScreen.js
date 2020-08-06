import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import { Button, ThemeProvider } from "react-native-elements";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function HomeScreen() {
    return (
        <View style= {styles.container} >
            <Text>This is Homepage</Text>
            <Button title="Hello"/>

        <View style={styles.innerContainer}><Text>This Box is responsive and 70% of width</Text></View>


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

    innerContainer : {
        width : wp('70%'),
        height : hp('20%'),
        backgroundColor : 'teal'
        }



  });
  