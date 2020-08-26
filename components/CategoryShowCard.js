import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  ActivityIndicator,
  ImageBackground,
  TouchableOpacity,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";
import { Button, Input, Text, Image } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function CategoryShowCard({ cardData }) {
  return (
    <View style={styles.CategoryShowCardContainer}>
      <FlatList
        horizontal={false}
        data={cardData}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.categoryBox}>
              <View style={styles.categoryBoxText}>
          <Text style={styles.categoryBoxTextName} >{item.categoryName}</Text>
              </View>
              <View style={styles.categoryBoxImage}>

                <Image
                  style={styles.categoryBoxImagePicture}
                  source={{ uri: item.name }}
                  PlaceholderContent={<ActivityIndicator />}
                />

              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    CategoryShowCardContainer:{
        width : wp('100%'),
        paddingHorizontal : 5,
       

    },
  categoryBox: {
    width: wp("90%"),
    display: "flex",
    flexDirection: "row",
    marginHorizontal: wp("5%"),
    backgroundColor : '#2A2C36',
    marginBottom : 30,
    height : hp('18%'),
 alignItems : 'center',

    overflow : 'hidden',

   borderRadius : 5
   
  },
  categoryBoxText : {
      flex  : 1,
      textAlign : 'center',
      width : wp('40%'),
    
   
       
  },
  categoryBoxTextName : 
    {color : "white",margin : 0, textAlign : 'left',
    fontSize : 18,
    fontWeight : 'bold',
    marginLeft : wp('10%')


},
  
  categoryBoxImage : {
      flex:1,
      height : hp('18%'),
   
  },
  categoryBoxImagePicture :{
    resizeMode : "cover",
    height : hp('18%'),
    
  }
});
