import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  ScrollView,
} from "react-native";
import { Button, Input, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import SignupScreen from "./SignupScreen";
import InputComponent from "../components/InputComponent";
import CustomHeader from "../components/CustomHeader";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddressScreen({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Signup");
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <CustomHeader
            iconLeft="ios-arrow-back"
            mainHeading="New Address"
            navigation={navigation}
          />

          <View>
            <InputComponent labelTag={"Full Name"} placeholder={"John Doe"} />
            <InputComponent
              labelTag={"Address"}
              placeholder={"Street California"}
            />
            <InputComponent labelTag={"City"} placeholder={"California"} />
            <InputComponent labelTag={"Region/State"} placeholder={"Dextas"} />
            <InputComponent labelTag={"ZipCode"} placeholder={"466001"} />
            <InputComponent labelTag={"Country"} placeholder={"USA"} />
            <Button
              title="Save Address"
              titleStyle={{ fontSize: 22 }}
              buttonStyle={{
                width: wp("90%"),
                marginHorizontal: wp("5%"),
                backgroundColor: "#EF3651",
                borderRadius: 50,
                shadowColor: "rgba(239, 54, 81, 0.35)",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.5,
                shadowRadius: 5.84,

                elevation: 5,
              }}
              iconContainerStyle={{ marginLeft: 10 }}
              containerStyle={{ marginTop: 25 }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: hp("100%"),
    backgroundColor: "#1E1F28",
    alignItems: "center",
    paddingBottom: 20,
  },

  insideText: {
    color: "#fff",
    fontWeight: "bold",
    flex: 1,
    marginTop: hp("5%"),
    marginLeft: wp("5%"),
  },
});
