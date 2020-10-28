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
import ProductScroll from "../components/ProductScroll";
import CustomHeader from '../components/CustomHeader' ;
import ProductCards from '../components/ProductCards' ;

export default function OnProductScreen({ navigation,route }) {
  const pressHandler = () => {
    navigation.navigate("Address");
  };


const { product } = route.params ;

const forhim = [
  {
    name:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11077774/2019/12/24/29bdd2c8-3e2f-43aa-8ce5-55f3a501a4fa1577166621272-Difference-of-Opinion-Men-Sea-Green-Solid-Round-Neck-T-shirt-1.jpg",
    key: "1",
  },
  {
    name:
      "https://images.unsplash.com/photo-1512437011370-3c5a37a2190f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    key: "2",
  },
  {
    name:
      "https://images.unsplash.com/photo-1532660621034-fb55e2e59762?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    key: "3",
  },
  {
    name:
      "https://image.freepik.com/free-photo/negative-emotions-isolated-portrait-young-attractive-unhappy-black-skinned-male-student-with-afro-hairstyle-casual-outfit-tearing-clothes-with-hands-looking-camera-with-angry-expression_176420-12956.jpg",
    key: "4",
  },
  {
    name:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2478236/2018/2/23/11519376919799-WROGN-Men-Red--Beige-Slim-Fit-Checked-Casual-Shirt-7761519376919619-1.jpg",
    key: "5",
  },
  {
    name:
      "https://image.freepik.com/free-photo/front-view-man-with-shirt_23-2148542758.jpg",
    key: "7",
  },
  {
    name:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11077816/2019/12/24/ad792ba2-a3fe-4784-a053-a40cf6cb32cb1577167596901-Difference-of-Opinion-Men-Coral-Solid-Round-Neck-T-shirt-611-1.jpg",
    key: "8",
  },
];


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


        {/* <View style={styles.productDiscription}></View> */}


<View style={styles.recommendSection}>


<ProductCards promos={forhim} title="Recommended for You" />


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
    marginTop : 25,
    display: 'flex',
    paddingBottom : 20,
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
  },recommendSection:{
    height : hp('30%'),
    backgroundColor : 'darkgray'
  }
 

 
});
