import React from 'react'
import { StyleSheet, View, Dimensions, TextInput,ActivityIndicator,ImageBackground,TouchableOpacity,Alert} from "react-native";
import { Button, Input, Text,Image} from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";



export default function SaleComponent() {

const image = "../assets/image3.png" ;

    return (
      <View style={styles.container}>


<TouchableOpacity onPress={()=>{Alert.alert('You clicked on Summer Sale')}}>
        <View style={styles.mainImage}>
          <Text style={styles.mainHeading}>Summer Sale</Text>
          
          <Image
            source={require("../assets/image3.png")}
            style={{
              width: wp("100%"),
              height: hp("70%"),
              resizeMode: "cover",
            }}
            PlaceholderContent={<ActivityIndicator />}
          />
        


        </View>
        </TouchableOpacity>




        <View style={styles.secondarySection}>

          <TouchableOpacity onPress={()=>{Alert.alert('You clicked on Hot Tees')}}>
          <View style={styles.secondaryLeftSection} >
            <Text
              style={{
                color: "#fff",
                position: "absolute",
                width: wp("50%"),
                marginLeft: wp("10%"),
                marginTop: hp("5%"),
                textAlign: "center",
                fontSize: 32,
                fontWeight: "bold",
                zIndex: 2,
              }}
            >
            
              Hot Tees
            </Text>

            <Image
              source={require("../assets/image6.jpg")}
              style={{
                height: hp("60%"),
                width: wp("50%"),
                resizeMode: "cover",
              }}
              PlaceholderContent={<ActivityIndicator />}
            />
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{Alert.alert('You clicked on Cool Hats')}}>
          <View style={styles.secondaryRightSection} onPress={()=>{Alert.alert('Right COntainer')}}>
            <Text
              style={{
                color: "#fff",
                position: "absolute",
                width: wp("50%"),
                marginLeft: wp("10%"),
                marginTop: hp("5%"),
                textAlign: "center",
                fontSize: 32,
                fontWeight: "bold",
                zIndex: 2,
              }}
            >
              {" "}
              Cool Hats{" "}
            </Text>

            <Image
              source={require("../assets/image.png")}
              style={{
                height: hp("60%"),
                width: wp("50%"),
                resizeMode: "cover",
              }}
              PlaceholderContent={<ActivityIndicator />}
            />
          </View>
          </TouchableOpacity>
        </View>
      </View>
    );
}


const styles = StyleSheet.create({

    container : {
        // backgroundColor : 'yellow',
        width : wp('100%'),
        alignItems : 'center',
        marginBottom : 30
    },
    mainImage :{
        height : hp('40%'),
        resizeMode : 'cover',
        overflow  : 'hidden',
        overlayColor : 'black',
        display : 'flex',

    },
    mainHeading : {
        color : '#fff',
        position : 'absolute',
        width : wp('80%'),
        marginLeft : wp('10%'),
        marginTop : hp('30%'),
        textAlign : 'center',
        fontSize : 34,
        fontWeight : 'bold',
        zIndex : 2,
    },secondarySection:{
        height : hp('60%'),
        backgroundColor : 'teal',
        width : wp('100%'),
        display : 'flex',
        flexDirection : 'row'
    },secondaryLeftSection:{
        backgroundColor : 'yellow',
        height  : hp('60%'),
        flex : 1,
        overflow  :'hidden',
        alignItems : 'center'

    },secondaryRightSection : {
        backgroundColor : 'crimson',
        height  : hp('60%'),
        flex : 1,
        overflow  :'hidden',
        alignItems : 'center'
 }
    


}) ;