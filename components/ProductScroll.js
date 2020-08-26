import React, { useState } from "react";
import { StyleSheet, View, Dimensions, TextInput,ScrollView,Image } from "react-native";
import { Button, Input, Text, CheckBox } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";
import { set } from "react-native-reanimated";

export default function ProductScroll({ size }) {
  const [checked, setchecked] = useState(true);

  const tf = this;

  return (
    <ScrollView style={styles.viewpd}
    horizontal={true}
    
    showsHorizontalScrollIndicator={false}
    scrollEventThrottle={200}
    decelerationRate="fast"
    pagingEnabled>
      <View style={styles.productImage}>
          <Image
          
          source={require("../assets/hrimage.png")}
          style={styles.productSlide}
          
          />
        </View>
        <View style={styles.productImage}>
          <Image
          
          source={require("../assets/hrimage1.png")}
            style={styles.productSlide}
          />
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewpd: {
    
marginBottom:0
  },
  productImage:{
    width:wp("100%"),
    marginBottom:hp('2%')
  },
  productSlide:{
    width: wp("100%"), height: hp("70%")

  }
});
