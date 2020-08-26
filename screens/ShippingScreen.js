import React from "react";
import { StyleSheet, View, Dimensions, TextInput,ScrollView } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import SignupScreen from "./SignupScreen";
import ShippingInput from "../components/ShippingInput";

export default function ShippingScreen({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Signup");
  };

  return (
<ScrollView>
    <View style={styles.container}>
      <View
        style={{
          marginBottom : 30,
          width: wp("100%"),
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        {/* <Icon
          name="keyboard-arrow-left"
          size={30}
          color="#fff"
          flex="1"
          onPress={pressHandler}
        /> */}
        <Text h4 style={styles.insideText}>
          Shipping Addresses.
        </Text>
      </View>

      <View>
        <ShippingInput name = {'John Doe'} street={'Christian Compound Colony '} Fullddress={'California Dextas,Usa'} />
        
        
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height:hp('100%'),
    backgroundColor: "#1E1F28",
    alignItems:'center',
    paddingBottom : 20 ,
  },
 
  insideText: {
    color: "#fff",
    fontWeight: "bold",
    flex: 1,
    marginTop: hp("5%"),
    marginLeft: wp("5%"),
  },
});
