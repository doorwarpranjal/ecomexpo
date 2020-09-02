import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Image } from "react-native-elements";
import { Entypo } from "react-native-vector-icons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";


export default function ProductCards({ categoryChoosen, title,navigation}) {
  //    These are the horizontal product cards for each category products
  //we will get category name from screen as props then we will make an api call to server
  // at that category endpoint and we will get a list of products that will be displyed using cards
  const products = [
    {
      product_id: 1,
      product_name: "Teal Blue Print Tshirt",
      product_brand: "HRX",
      product_price: "299",
      product_description:
        "This season set a sporty fashion trend with the HRX Men's Athleisure T-shirt. This striped casual T-shirt can be worn on its own or layered under a jacket or a hoodie.",
      product_image_featured:
        "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg",
        product_images : [

          "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg",
          "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/1700871/2020/1/22/3d7fa82a-871c-43f9-8aa4-b01fbc77e2921579692117728-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-6.jpg",
          "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/1700871/2020/1/22/ee026dfd-53d5-431f-8f49-793d1b1a3ca91579692118057-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-3.jpg",
          "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/1700871/2020/1/22/d9ac560a-bf76-4ada-b37f-18aa520545821579692117859-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-5.jpg",
          ]
      },
    {
      product_id: 2,
      product_name: "Front Print Tshirt",
      product_brand: "Moda Rapido",
      product_price: "399",
      product_description:
        "Rust brown and black printed T-shirt, has a round neck, short sleeves",
      product_image_featured:
        "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/11077774/2019/12/24/29bdd2c8-3e2f-43aa-8ce5-55f3a501a4fa1577166621272-Difference-of-Opinion-Men-Sea-Green-Solid-Round-Neck-T-shirt-1.jpg",
        product_images : [
              "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/11077774/2019/12/24/29bdd2c8-3e2f-43aa-8ce5-55f3a501a4fa1577166621272-Difference-of-Opinion-Men-Sea-Green-Solid-Round-Neck-T-shirt-1.jpg",
              "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/11077774/2019/12/24/2e3bf45f-91fd-4c4d-9122-9c78d8525a6c1577166621181-Difference-of-Opinion-Men-Sea-Green-Solid-Round-Neck-T-shirt-3.jpg",
              "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/11077774/2019/12/24/f84b9060-2b32-4329-b512-8427a35a04a61577166621143-Difference-of-Opinion-Men-Sea-Green-Solid-Round-Neck-T-shirt-4.jpg",
              "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/11077774/2019/12/24/cd1a9272-d52c-45a3-815a-3f14ac2d89c21577166621080-Difference-of-Opinion-Men-Sea-Green-Solid-Round-Neck-T-shirt-5.jpg",

       ]
      },
    {
      product_id: 3,
      product_name: "Cool Printed Tshirt ",
      product_brand: "Moda Rapido",
      product_price: "349",
      product_description:
        "Rust brown and black printed T-shirt, has a round neck, short sleeves",
      product_image_featured:
        "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/11851766/2020/6/17/3ae76b6f-1d7e-45d0-910b-1698bcd621fa1592393593827-Nike-Men-Navy-Blue-Printed-Round-Neck-T-shirt-65159239359265-1.jpg",
        product_images : [
        "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/11851766/2020/6/17/3ae76b6f-1d7e-45d0-910b-1698bcd621fa1592393593827-Nike-Men-Navy-Blue-Printed-Round-Neck-T-shirt-65159239359265-1.jpg",
        "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/11851766/2020/6/17/4708f929-4bd7-46df-9508-98b94ac308631592393593788-Nike-Men-Navy-Blue-Printed-Round-Neck-T-shirt-65159239359265-2.jpg",
        "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/11851766/2020/6/17/da13ff95-2b85-499f-be52-a778f183c3851592393593738-Nike-Men-Navy-Blue-Printed-Round-Neck-T-shirt-65159239359265-3.jpg",
        "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/11851766/2020/6/17/399aeb1d-e6ae-4df6-84d6-8f15920c903b1592393593650-Nike-Men-Navy-Blue-Printed-Round-Neck-T-shirt-65159239359265-5.jpg",
        
        ]
      },
    {
      product_id: 4,
      product_name: "Denizen By Rapido",
      product_brand: "Moda Rapido",
      product_price: "759",
      product_description:
        "Blue solid casual shirt, has a spread collar, short sleeves, button placket, curved hem, and 1 patch pocket",
      product_image_featured:
        "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/2388239/2018/3/16/11521183627049-Kook-N-Keech-Men-Tshirts-4101521183626876-1.jpg",
        product_images : [
     "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/2388239/2018/3/16/11521183627049-Kook-N-Keech-Men-Tshirts-4101521183626876-1.jpg",
     "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/2388239/2018/3/16/11521183627020-Kook-N-Keech-Men-Tshirts-4101521183626876-2.jpg",
     "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/2388239/2018/3/16/11521183627000-Kook-N-Keech-Men-Tshirts-4101521183626876-3.jpg",
     "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/2388239/2018/3/16/11521183626981-Kook-N-Keech-Men-Tshirts-4101521183626876-4.jpg",
     "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/2388239/2018/3/16/11521183626952-Kook-N-Keech-Men-Tshirts-4101521183626876-5.jpg",
             ]
      },

      {
        product_id: 5,
        product_name: "Fit Brown Shirt",
        product_brand: "Wrogn",
        product_price: "1130",
        product_description:
          "Brown checked casual shirt, has a spread collar, button placket, long sleeves, curved hem",
        product_image_featured:
          "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/1362028/2016/8/31/11472638719005-Roadster-Men-Brown-Regular-Fit-Checked-Casual-Shirt-3421472638718814-1.jpg",
          product_images : [
"https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/1362028/2016/8/31/11472638719005-Roadster-Men-Brown-Regular-Fit-Checked-Casual-Shirt-3421472638718814-1.jpg",
"https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/1362028/2016/8/31/11472638718981-Roadster-Men-Brown-Regular-Fit-Checked-Casual-Shirt-3421472638718814-2.jpg",
"https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/1362028/2016/8/31/11472638718958-Roadster-Men-Brown-Regular-Fit-Checked-Casual-Shirt-3421472638718814-3.jpg",
"https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/1362028/2016/8/31/11472638718940-Roadster-Men-Brown-Regular-Fit-Checked-Casual-Shirt-3421472638718814-4.jpg",
"https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/1362028/2016/8/31/11472638718902-Roadster-Men-Brown-Regular-Fit-Checked-Casual-Shirt-3421472638718814-5.jpg",


]
        },

  ];

  const posts = products.map((item) => {
    return (
     
      <View style={styles.productCardContainer} key={item.product_id}>
        <TouchableOpacity onPress={()=> navigation.navigate('OnProduct',{product: item}) }>
        <Image
          style={styles.imageBox}
          source={{ uri: item.product_image_featured }}
          PlaceholderContent={<ActivityIndicator />}
        /> 
        </TouchableOpacity>

        <View style={styles.productTextBox}>
          <View style={styles.textLeftContainer}>
            <Text style={styles.productBrand}>{item.product_brand}</Text>
            <Text style={styles.productHeading}>{item.product_name}</Text>
            <Text style={styles.productHeading}>Rs {item.product_price}</Text>
          </View>

          <View style={styles.textRightContainer}>
            <TouchableOpacity>
            <Icon name="bookmark-o" size={28} color="darkgray" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
   
    );
  });

  return (

      
      <View style={styles.mainContainer}>
        <View style={styles.container}>{posts}</View>
      </View>

  );
}

const styles = StyleSheet.create({
  mainContainer: {},

  container: {
    width: wp("100%"),

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  productCardContainer: {
    minHeight: hp("45%"),
    width: wp("49%"),
    marginVertical: 10,
    display: "flex",
    flexDirection: "column",
    borderRadius: 2,
  height : 'auto'
  },
  imageBox: {
    height: hp("35%"),
    width: wp("49%"),
    borderRadius: 2,
  },
  productTextBox: {
    height: hp("10%"),
    padding: 5,
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  productHeading: {
    fontWeight: "500",
    color: "white",
  },
  productBrand: {
    color: "#ABB4BD",
    fontWeight: "bold",
    fontSize: 12,
  },

  textLeftContainer: {
    flex: 5,
  },
  textRightContainer: {
    flex: 1,

    paddingLeft: 10,
  },
});
