import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  ScrollView,
  Image
} from "react-native";
import {
  Button,
  Input,
  Text,
  Rating,
  AirbnbRating,
} from "react-native-elements";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import SignupScreen from "./SignupScreen";
import { TouchableOpacity } from "react-native-gesture-handler";
import ShippingInput from "../components/ShippingInput";
import Icon from "react-native-vector-icons/MaterialIcons";
import { AntDesign,} from "@expo/vector-icons";
import Size from "../components/SizeComponent";
import ProductScroll from "../components/ProductScroll";

export default function OnProductScreen({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Address");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <AntDesign name="left" size={28} color="#fff" />
          </View>
          <View>
            <Text h3 style={{ color: "#fff" }}>
              Short Dress
            </Text>
          </View>
          <View>
            <AntDesign name="sharealt" size={28} color="#fff" />
          </View>
        </View>
        <ProductScroll/>
       
        <View style={styles.optionGrid}>
          <Size size="Size" />
          <Size size="Black" />
        </View>
        <View style={styles.productHeading}>
          <View style={styles.productHeading2} >
            <View>
          <Text h3 style={{ color: "#fff" }}>
            H$M
          </Text>
          <Text style={{ color: "#ABB4BD", size: 15 }}>Short black dress</Text>
          </View>
          <Text h3 style ={{color:"#fff"}}>$19.9</Text>
         
          </View>
          <View>
          <Text style={{ color: "#F5F5F5", fontSize: 15, marginTop: hp("2%") }}>
            Short dress in soft cotton jersey with decorative buttons down the
            front and a wide, frill-trimmed square
          </Text>
          </View>
        </View>
        <View style={styles.addToCart}>
        <Button
          
          iconRight
          title="Add To Cart"
          titleStyle={{ fontSize: 22,marginRight:wp('20%') }}
          buttonStyle={{
            width: wp("100%"),
            backgroundColor: "#EF3651",
            borderRadius: 50,
            
          }}
       
          containerStyle={{ marginTop: 25,marginBottom:24 }}
        />
        </View>
        <View style={styles.productDiscription}></View>
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: hp("100%"),
    backgroundColor: "#1E1F28",
  },
  header: {
    marginVertical: hp("5%"),

    marginHorizontal: wp("5%"),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  size: {
    marginVertical: hp("5%"),

    marginHorizontal: wp("5%"),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionGrid: {
    marginHorizontal: wp("5%"),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productHeading: {
    display:'flex',
    marginHorizontal: wp("5%"),
    marginTop: hp("5%"),
    
  },
  productHeading2:{
    display:"flex",
    flexDirection:'row',
    justifyContent:'space-between'
  },
  addToCart:{
    width:wp('80%'),
    marginHorizontal:wp('10%')
  }
 

 
});
