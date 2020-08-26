import React from "react";
import { StyleSheet, View, Dimensions, TextInput } from "react-native";
import { Button, Input, Text,CheckBox } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ShippingInput({ name, street, Fullddress }) {




  return (
    
    <View style={styles.viewpd}>
      <View style={{flexDirection:'row',alignItems:'center',}}>
        <Text style={styles.insidetext}>{name}</Text>
        <Text style={{color:'#EF3651',fontSize: 18,marginLeft:wp('55%')}}>Edit</Text>
        
      </View>
      
      <Text style={styles.addressText}>{street}</Text>
      <Text style={styles.addressText}>{Fullddress}</Text>
      <CheckBox
  title='Use this as shipping address.'
  checked={this.state.checked}
/>
    </View>
  );
}

const styles = StyleSheet.create({
  insidetext: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 15,
    marginVertical: 4,
  },
  addressText:{

    color: "#F6F6F6",
    fontSize: 18,
    marginLeft: 15,
    marginVertical: 3,
  },

  viewpd: {
    display: "flex",
    marginVertical: 10,
    backgroundColor: "#2A2C36",
    color: "#fff",
    width: wp("90%"),
    height: hp("25%"),
    justifyContent: "flex-start",
  },
});