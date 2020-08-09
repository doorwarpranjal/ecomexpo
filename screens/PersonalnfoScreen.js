import React from "react";
import { StyleSheet, Text, View,TouchableOpacity} from "react-native";
import { Image,Icon,Divider,Input,Button } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ScrollView } from "react-native-gesture-handler";




export default function PersonalnfoScreen() {
    return (

      <ScrollView>
        <View style={styles.container}>

            <View style={styles.headingSection}> 
              <Text style={styles.mainHeading}>My Details</Text>
              {/* <Text style={styles.smallHeading}>Personal Information</Text> */}
            </View>

<View style={styles.personalInfoSection}> 

      <Input
          label="Full Name"
          labelStyle={{ color: "#ABB4BD", fontSize: 11 }}
          placeholder="Matilda Brown"
          inputStyle={{ color: "#fff" }}
          inputContainerStyle={{  
            borderBottomWidth : 1
          }}
          containerStyle={{
            backgroundColor: "#2A2C36",
            width: wp("90%"),
            marginBottom: 20,
            paddingVertical: 10,
            borderRadius : 5,
            justifyContent : 'center'
          
          }}
        />

           <Input
          label="Date of Birth"
          labelStyle={{ color: "#ABB4BD", fontSize: 11 }}
          placeholder="Matilda Brown"
          inputStyle={{ color: "#fff" }}
          inputContainerStyle={{  
            borderBottomWidth : 1
          }}
          containerStyle={{
            backgroundColor: "#2A2C36",
            width: wp("90%"),
            marginBottom: 20,
            paddingVertical: 10,
            borderRadius : 5,
            justifyContent : 'center'
          
          }}
        />

           <Input
          label="Password"
          labelStyle={{ color: "#ABB4BD", fontSize: 12 }}
          placeholder="*******"
          inputStyle={{ color: "#fff" }}
          inputContainerStyle={{  
            borderBottomWidth : 1
          }}
          secureTextEntry={true}
          containerStyle={{
            backgroundColor: "#2A2C36",
            width: wp("90%"),
            marginBottom: 20,
            paddingVertical: 10,
            borderRadius : 5,
            justifyContent : 'center'
          
          }}
        />


</View>


    <Button
          
          icon={<Icon name="save" size={22} color="white" />}
          iconRight
          title="Save Changes"
          titleStyle={{ fontSize: 22,marginRight : 10 }}
          buttonStyle={{
            width: wp("80%"),
            backgroundColor: "#EF3651",
            borderRadius: 50,
            shadowColor: "rgba(239, 54, 81, 0.35)",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.50,
            shadowRadius: 5.84,

            elevation: 5,
          }}
          iconContainerStyle={{ marginLeft: 10 }}
          containerStyle={{ marginTop: 25,marginLeft :wp('5%'),marginRight : wp('5%') }}
        />


        </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#1E1F28",
      justifyContent: "flex-start",
      fontSize: 42,
      paddingTop : 0,
      paddingHorizontal : 20,
      minHeight : hp('81%')
    },
    headingSection : {
      height : hp('10%'),
      // backgroundColor : 'teal'
    },mainHeading : {
      fontSize : 28,color : '#fff',   
    fontWeight : 'bold',
    marginTop : 10
    },
    smallHeading : {
    color : '#fff',   
    fontWeight : 'bold',
    }

});