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
import ShippingInput from "../components/ShippingInput";
import CustomHeader from "../components/CustomHeader";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ShippingScreen({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Signup");
  };

  return (
    <SafeAreaView style={{backgroundColor : '#1E1F28'}}> 
      <ScrollView>
        <View style={styles.container}>
          <CustomHeader
            iconLeft="ios-arrow-back"
            mainHeading="Saved Address"
            navigation={navigation}
          />

          <View>
            <ShippingInput
              name={"John Doe"}
              street={"Christian Compound Colony "}
              Fullddress={"California Dextas,Usa"}
            />
          </View>
          <Button
            title="Add New Address"
            onPress={() => navigation.navigate("Address")}
            buttonStyle={{ backgroundColor: "#EF3651", paddingHorizontal: 20 }}
            containerStyle={{
              marginTop: 20,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp("100%"),
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
