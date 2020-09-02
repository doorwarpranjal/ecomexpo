import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Alert,
} from "react-native";
import { Button, Image, Header } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CategoryShowCard from "../components/CategoryShowCard";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../components/CustomHeader";

export default function ContactScreen({ navigation, route }) {
  const primaryColor = "#EF3651";
  const secondaryColor = "#1E1F28";

  const { categoryContent, categoryHeading } = route.params;

  return (
<SafeAreaView style={{backgroundColor : '#1E1F28'}}> 
      <View style={styles.container}>
        <CustomHeader
          iconLeft="ios-arrow-back"
          mainHeading={categoryHeading}
          navigation={navigation}
        />
        <ScrollView horizontal={true}>
          <View style={styles.containerInner}>
            <CategoryShowCard
              cardData={categoryContent}
              navigation={navigation}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>



  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    color: "white",
    fontSize: 42,
    backgroundColor: "#1E1F28",
    width: wp("100%"),
    height: "auto",
    marginBottom: hp("15%"),
  },
  containerInner: {
    flex: 1,
    width: wp("100%"),
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  heading: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginVertical: 20,
  },
});
