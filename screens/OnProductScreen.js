import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  ScrollView,
  Image,
  SafeAreaView,
  ActivityIndicator,
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
import CustomHeader from '../components/CustomHeader' ;

export default function OnProductScreen({ navigation,route }) {
  const pressHandler = () => {
    navigation.navigate("Address");
  };


const { product } = route.params ;




  return (
    <SafeAreaView>
    <ScrollView>
      <View style={styles.container}>

<CustomHeader iconLeft="ios-arrow-back" mainHeading={product.product_brand} iconRight="md-share" navigation={navigation} />

        <View style={styles.productImages}>
        <ProductScroll product_images = {product.product_images}/>


        </View>
{/*        
        <View style={styles.optionGrid}>
          <Size size="Size" />
          <Size size="Black" />
        </View> */}


        <View style={styles.productHeading}>
          <View style={styles.productHeading2} >
            <View>
          <Text h4 style={{ color: "#fff" }}>
            {product.product_brand}
          </Text>
          <Text style={{ color: "#ABB4BD", fontSize: 15 }}>{product.product_name}</Text>
          </View>
      <Text h4 style ={{color:"#fff"}}>Rs {product.product_price}</Text>
         
          </View>
          <View>
          <Text style={{ color: "#F5F5F5", fontSize: 15, marginTop: hp("2%") }}>
            {product.product_description}.
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: hp("100%"),
    backgroundColor: "#1E1F28",
    marginTop : 25,
    display: 'flex',
  },
  productImages : {
    
    backgroundColor : 'lightyellow'
  },

  optionGrid: {
    marginHorizontal: wp("5%"),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  productHeading: {
    display:'flex',
    marginHorizontal: wp("5%"),
    marginTop: hp("1%"),
    
  },
  productHeading2:{
    display:"flex",
    flexDirection:'row',
    justifyContent:'space-between'
  },
  addToCart:{
    width:wp('80%'),
    marginHorizontal:wp('10%')
  },
  imageBox:{
    height : hp('45%'),
    width : wp('100%')
  }
 

 
});
