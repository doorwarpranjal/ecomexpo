import React from "react";
import { StyleSheet, View, Dimensions, TextInput } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";


export default function InputComponent ({ labelTag, placeholder }) {



  return (
    
    

      <View style={styles.viewpd}>
        <Text>Size</Text>

      
       </View>


      
    
  );
}

const styles = StyleSheet.create({
  
  viewpd: {
    marginVertical:10,
    backgroundColor: "#1E1F28",
    width: wp("100%"),
    alignItems: "center",
  },
  
});
