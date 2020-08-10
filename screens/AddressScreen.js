import React from "react";
import { StyleSheet, View, Dimensions, TextInput,ScrollView } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import SignupScreen from "./SignupScreen";
import InputComponent from "../components/InputComponent";

export default function AddressScreen({ navigation }) {
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
          Add Shipping Address
        </Text>
      </View>

      <View>
        <InputComponent labelTag={"Full Name"} placeholder={"John Doe"} />
        <InputComponent labelTag={"Address"} placeholder={"Street California"} />
        <InputComponent labelTag={"City"} placeholder={"California"} />
        <InputComponent labelTag={"Region/State"} placeholder={"Dextas"} />
        <InputComponent labelTag={"ZipCode"} placeholder={"466001"} />
        <InputComponent labelTag={"Country"} placeholder={"USA"} />
        <Button
          
         
          title="Save Address"
          titleStyle={{ fontSize: 22 }}
          buttonStyle={{
            width: wp('90%'),
            marginHorizontal : wp('5%'),
            backgroundColor: "#EF3651",
            borderRadius: 50,
            shadowColor: "rgba(239, 54, 81, 0.35)",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.50,
            shadowRadius: 5.84,

            elevation: 5,
          }}
          iconContainerStyle={{ marginLeft: 10 }}
          containerStyle={{ marginTop: 25 }}
        />
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    
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
