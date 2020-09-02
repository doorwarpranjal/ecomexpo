import React from "react";
import { StyleSheet, Text, View  } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import CustomHeader from "../components/CustomHeader";
import ProductDisplayCards from '../components/ProductDisplayCards' ;
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductCardsScreen({ navigation, route }) {
  const { categoryChoosen } = route.params;

  return (
    <SafeAreaView style={{backgroundColor : '#1E1F28'}}> 
      <ScrollView>
        <View style={styles.container}>
          <CustomHeader
            iconLeft="ios-arrow-back"
            mainHeading={categoryChoosen}
            iconRight="ios-search"
            navigation={navigation}
          />

          <View style={styles.innerContainer}>
           
          <ProductDisplayCards categoryChoosen={categoryChoosen} navigation={navigation} />


          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: hp("100%"),
    backgroundColor: "skyblue",
    display : 'flex'

  },
  innerContainer: {
    flex: 1,
    backgroundColor: "#1E1F28",
 
 
  },
});
