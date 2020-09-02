import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";

export default function CustomHeader({ navigation,iconLeft,iconRight,mainHeading }) {
;

  return (
    <View style={styles.header}>
      <View style={{ flex: 1 }}>
      <Icon name={iconLeft} size={24} color="white" onPress={()=>{navigation.goBack()}}/>
      </View>
      <Text style={styles.heading}>{mainHeading}</Text>
      <View
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Icon name={iconRight} size={24} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: hp("8%"),
    backgroundColor: "#1E1F28",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  heading: {
    fontSize: 22,
    fontWeight: "700",
    flex: 3,
    textAlign: "center",
    color : 'white',
    
  },
});
