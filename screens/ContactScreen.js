import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import CustomHeader from "../components/CustomHeader";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ContactScreen({ navigation }) {
  const primaryColor = "#EF3651";
  const secondaryColor = "#1E1F28";
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <CustomHeader
          iconLeft="ios-arrow-back"
          mainHeading="Contact Us"
          navigation={navigation}
        />

        <View style={styles.innerContainer}>
          <Text style={{ color: "white" }}>This is Contact screen</Text>
        </View>
      </View>
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
  innerContainer: {
    flex: 1,
    display: "flex",
    backgroundColor: "#1E1F28",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
