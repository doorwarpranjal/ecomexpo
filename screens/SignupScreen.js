import React from "react";
import { StyleSheet, View, Dimensions, TextInput,ScrollView } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default function SignupScreen({navigation}) {
  const pressHandler = ()=>{
    navigation.navigate('Login');
  }
    return (
      <ScrollView>
      <View style={styles.container}>
      <View
        style={{
          height: hp("33%"),
          width: wp("100%"),
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Icon name="keyboard-arrow-left" size={30} color="#fff" flex='1' />
        <Text h1 style={styles.insideText}>
          Sign-Up
        </Text>

      </View>

      <View style={styles.viewpd}>
        <Input
          label="Name"
          labelStyle={{ color: "#ABB4BD", fontSize: 11 }}
          placeholder="John"
          inputStyle={{ color: "#fff" }}
          inputContainerStyle={{  }}
          containerStyle={{
            backgroundColor: "#2A2C36",
            width: wp("94%"),
            marginBottom: 20,
            paddingVertical: 10,
          }}
        />
         <Input
          label="Enter email"
          labelStyle={{ color: "#ABB4BD", fontSize: 11 }}
          placeholder="johndoe@gmail.com"
          inputStyle={{ color: "#fff" }}
          inputContainerStyle={{  }}
          containerStyle={{
            backgroundColor: "#2A2C36",
            width: wp("94%"),
            marginBottom: 20,
            paddingVertical: 10,
          }}
        />

        <Input
          label="Enter Password"
          labelStyle={{ color: "#ABB4BD", fontSize: 11 }}
          placeholder="******"
          containerStyle={{
            backgroundColor: "#2A2C36",
            width: wp("94%"),
            paddingVertical: 10,
          }}
          secureTextEntry={true}
        />
        
        <View  style={{
          
         
          height:hp("5%"),
          width: wp("100%"),
           display: "flex",
           flexDirection:'row',
           justifyContent: "flex-end",
           alignItems: "center",
           marginRight:wp('2%'),
           marginTop:hp("3%")
           
         }}>
        <Text style={{color:"#fff"}} >
         Already Have A Account ? 
        </Text>
        <Icon  name="arrow-forward" size={28} color="#EF3651" 
        onPress={pressHandler}/>
        </View>
         

        <Button
          
         
          title="Sign-Up"
          titleStyle={{ fontSize: 22 }}
          buttonStyle={{
            width: wp("94%"),
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
          containerStyle={{ marginTop: 25 }}
        />
       
      </View>
    </View>
    </ScrollView>
    )
}


const styles = StyleSheet.create({
  container: {
    height: hp("100%"),
    backgroundColor: "#1E1F28",
  },
  viewpd: {
    height: hp("70%"),
    backgroundColor: "#1E1F28",
    width: wp("100%"),
    alignItems: "center",
  },
  insideText: {
    color: "#fff",
    fontWeight:'bold',
    flex:'1',
    marginTop:hp('5%'),
    marginLeft: wp("5%"),
  },
});
  