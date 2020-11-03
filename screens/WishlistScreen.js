import React,{useState} from 'react'
import { StyleSheet, Text, View ,TouchableOpacity ,ActivityIndicator,ScrollView,TextInput,Button} from "react-native";

import { Image } from "react-native-elements";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import {Icon} from 'react-native-elements' ;
export default function WishlistScreen() {

  const products = [
    {
      product_id: 1,
      product_name: "Blue Print Tshirt",
      product_color: "black",
      product_price: "299",
      product_image_featured:
        "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg",
      
      
      },
    {
      product_id: 2,
      product_name: "Front Print Tshirt",
      product_color: "red",
      product_price: "399",
      product_image_featured:
        "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/11077774/2019/12/24/29bdd2c8-3e2f-43aa-8ce5-55f3a501a4fa1577166621272-Difference-of-Opinion-Men-Sea-Green-Solid-Round-Neck-T-shirt-1.jpg",
      
      
      },
    {
      product_id: 3,
      product_name: "Cool Printed Tshirt ",
      product_color: "blue",
      product_price: "349",
      product_image_featured:
        "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/11851766/2020/6/17/3ae76b6f-1d7e-45d0-910b-1698bcd621fa1592393593827-Nike-Men-Navy-Blue-Printed-Round-Neck-T-shirt-65159239359265-1.jpg",
      
      
      },
    {
      product_id: 4,
      product_name: "Denizen By Rapido",
      product_color: "Moda Rapido",
      product_price: "759",
      product_image_featured:
        "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/2388239/2018/3/16/11521183627049-Kook-N-Keech-Men-Tshirts-4101521183626876-1.jpg",
       
      },

      {
        product_id: 5,
        product_name: "Fit Brown Shirt",
        product_color: "Wrogn",
        product_price: "1130",
        product_image_featured:
          "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/1362028/2016/8/31/11472638719005-Roadster-Men-Brown-Regular-Fit-Checked-Casual-Shirt-3421472638718814-1.jpg",
    
        },

  ];

  const posts = products.map((item) => {
   
    return (
     
      <View style={styles.productCardContainer} key={item.product_id}>
             <TouchableOpacity >
                <Image
                     style={styles.imageBox}
                     source={{ uri: item.product_image_featured }}
                     PlaceholderContent={<ActivityIndicator />}
                   /> 
              </TouchableOpacity>
              <View style={styles.productTextBox}>
                     
             
              <Text style={styles.productHeading}>{item.product_name}</Text>
              <View style={styles.block}>
                  <Text style={styles.productBrand}>Color: {item.product_color}</Text>
                  <Text style={styles.productBrand}>Size: L</Text>
              </View>
              
              <View style={styles.quantity}>
                  <View style={styles.productBrand}>
                      <TouchableOpacity > 
                           <Icon
                              name='circle-with-minus'
                              size={34}
                              type='entypo'
                              color='#90939e' />
                       </TouchableOpacity>
                  </View>
                 <View style={styles.productBrand}>
                 <Text style={{right:3,top:4,fontWeight:'bold',fontSize:20}}> 1</Text>
                 </View>
                 <View style={styles.productBrand}>
                      <TouchableOpacity > 
                            <Icon
                              name='circle-with-plus'
                              size={34}
                              type='entypo'
                              color='#90939e' />
                       </TouchableOpacity>
                  </View>
                  <Text style={styles.productPrice}>Rs {item.product_price}</Text>
              </View>
           
             
            
              </View>
                 <View style={styles.Menu}>
                      <TouchableOpacity > 
                         <Icon
                            name='dots-three-vertical'
                            
                            type='entypo'
                            color='#505052' />
                      </TouchableOpacity>
                  </View>

     </View>
   
    );
  });
    return (
        <ScrollView style={styles.mainContainer}>
        <View><Text style={styles.mainHeading}>My Bag</Text></View>
        <View style={styles.container}>
             <View style={styles.posts}>{posts}</View>
        </View>
     <View style={styles.promo}>
        <TextInput
        style={styles.input}
        placeholder='Enter your promo code'
        placeholderTextColor={'white'}
       
        />
        <TouchableOpacity > 
           <View style={styles.arrow}>
           <Icon
           name='arrow-circle-right'
           size={35 }
           type='font-awesome-5'
           color='#90939e' />
           </View>
     </TouchableOpacity>
   </View>
    </ScrollView>
    )
}



const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#1E1F28',
   
  },
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#1E1F28',
      fontSize : 42,
      position:'relative', 
      alignItems:'center',
    },
    mainHeading :{
      fontSize : 42,color : '#fff',   paddingHorizontal : 20,
      fontWeight : 'bold',
      marginTop : 100,
      marginBottom:20,
    },
    productCardContainer:{
      width: wp("91%"),
      display: "flex",
      flexDirection: "row",
      marginHorizontal: wp("5%"),
      backgroundColor : '#2A2C36',
      marginBottom : 30,
      height : hp('15%'),
      alignItems : 'center',
      
      overflow : 'hidden',
  
     borderRadius : 10,
    
    },
    imageBox: {
      height: hp("15%"),
      width: wp("39%"),
      borderRadius: 2,
      
    },
    productTextBox: {
      height: hp("10%"),
      
      display: "flex",
      flexDirection: "column",
      paddingHorizontal: 10,
    },
    productHeading: {
      fontWeight: "500",
      color: "white",
      fontWeight: "bold",
      fontSize : 20,
      bottom:10,
    },
    productBrand: {
      color: "white",
      fontWeight: "bold",
      fontSize: 12,
    },
    productPrice:{
      position:'relative',
      left:40,
      fontSize: 16,
      fontWeight: "bold",

    },
    Menu:{
      
      position:'absolute',
      marginLeft:330,
      bottom:85,
           
    },
    block:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      
    },
    quantity:{
      position:'absolute',
      display:'flex',
      flexDirection:'row',
      top:60,
      padding:5,
      
      
    },
    input:{
      marginBottom:10,
      paddingHorizontal:8,
      paddingVertical:6,
      borderRadius:10,
      backgroundColor:'#2A2C36',
      width: wp("90%"),
      alignSelf:'center',
      borderTopRightRadius:20,
      borderBottomRightRadius:20,
  },
  promo:{
   display:'flex',
   flexDirection:'column',
   justifyContent:'center',
  },
  arrow:{
    
    bottom:49,
    left:160,
  },
  button:{
     borderRadius:8,
     backgroundColor:'#f01d71',
     paddingVertical:10,
     paddingHorizontal:10,
     
  },
  buttonText:{
      color:'white',
      fontWeight:'bold',

  },
  });
 