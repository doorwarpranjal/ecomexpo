import React from "react";
import { StyleSheet, Text, View,TouchableOpacity} from "react-native";
import { Image,Icon,Divider } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";


export default function ProfileScreen({navigation}) {

  const RedColor = "#EF3651";
  const BackgroundColor = "#1E1F28";

  const image =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShAlOK_wo1VxtOZFtaxq-_bcF-YMxZEqdQpWGSgWq-4nAKF8UfsjbY06SSogRtXZrYkcBVmofVnHWkIoTbzaDBTRIq_gMc1npR-fcd&usqp=CAU&ec=45688580";



const onPersonalInfo = ()=>{
  navigation.navigate('General Settings') ;
}


  return (
    <SafeAreaView style={{backgroundColor : '#1E1F28'}}> 
    <ScrollView>
      <View style={styles.container}>

        <View><Text style={styles.mainHeading}>My Profile</Text></View>
        <View style={styles.userProfileContainer}>
          <View style={styles.userImage}>
            <Image
              source={{ uri: image }}
              style={{
                width: wp("28%"),
                height: hp("15%"),
                borderRadius: wp("20%"),
              }}
            />
          </View>


          <View style={styles.UserDetails}>
            <Text style={{ fontSize: 22, fontWeight: '700', color: '#fff', marginTop: -5 }}>Matilda Brown</Text>
            <Text style={{ fontSize: 16, color: '#ABB4BD', marginTop: 5 }}> matildabrown@mail.com</Text>
          </View>
        </View>


        <View style={styles.optionContainer}>
        <Divider style={{ backgroundColor: '#ABB4BD',height : 0.5,opacity : 0.3 }} />

          <TouchableOpacity style={styles.optionBox}>
            <Text style={{ fontSize: 18, fontWeight: '700', color: '#fff', marginTop: -5 }}>My Orders    </Text>
            <Text style={{ fontSize: 14, color: '#ABB4BD', marginTop: 5 }}>No Upcoming Orders...</Text>
          </TouchableOpacity>

                 <Divider style={{ backgroundColor: '#ABB4BD',height : 0.5,opacity : 0.3 }} />

          <TouchableOpacity style={styles.optionBox} onPress={()=> navigation.navigate('Shipping')} >
            <Text style={{ fontSize: 18, fontWeight: '700', color: '#fff', marginTop: -5 }}>Shipping Address    </Text>
            <Text style={{ fontSize: 14, color: '#ABB4BD', marginTop: 5 }}>Add multiple shipping addresses</Text>
          </TouchableOpacity>

          <Divider style={{ backgroundColor: '#ABB4BD',height : 0.5,opacity : 0.3 }} />

          <TouchableOpacity style={styles.optionBox}>
            <Text style={{ fontSize: 18, fontWeight: '700', color: '#fff', marginTop: -5 }}>Add Reviews    </Text>
            <Text style={{ fontSize: 14, color: '#ABB4BD', marginTop: 5 }}>Write a short review about your purchases</Text>
          </TouchableOpacity>

          <Divider style={{ backgroundColor: '#ABB4BD',height : 0.5,opacity : 0.3 }} />

          <TouchableOpacity style={styles.optionBox} onPress={onPersonalInfo}>
            <Text style={{ fontSize: 18, fontWeight: '700', color: '#fff', marginTop: -5 }}>Settings </Text>
            <Text style={{ fontSize: 14, color: '#ABB4BD', marginTop: 5 }}>Notifications,Password,Phone Number</Text>
          </TouchableOpacity>


          <Divider style={{ backgroundColor: '#ABB4BD',height : 0.5,opacity : 0.3 }} />

          <TouchableOpacity style={styles.optionBox}>
            <Text style={{ fontSize: 18, fontWeight: '700', color: '#fff', marginTop: -5 }}>Logout </Text>
            <Text style={{ fontSize: 14, color: '#ABB4BD', marginTop: 5 }}>You can login again anytime..</Text>
          </TouchableOpacity>
          
          <Divider style={{ backgroundColor: '#ABB4BD',height : 0.5,opacity : 0.3 }} />
       </View>

      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1F28",
    justifyContent: "flex-start",
    fontSize: 42,
 
  },
  mainHeading :{
    fontSize : 28,color : '#fff',   paddingHorizontal : 20,
    fontWeight : 'bold',
    marginTop : 10
  }
  ,
  userProfileContainer: {
    height: hp("16%"),
backgroundColor : '#2A2C36',
    width: wp("100%"),
    marginTop: hp("2%"),
    display : 'flex',
    flexDirection : 'row',
    alignItems : 'center',
    paddingHorizontal : 10,
    justifyContent : 'space-around'
  },
  userImage: {
    height: hp("14%"),
    width: wp("26%"),
 
    borderRadius: 200,
    overflow : 'hidden'
  },
  UserDetails : {
    width : wp('60%'),
    
    height : hp('15%'),
    display : 'flex',
    justifyContent : 'center',
    paddingLeft : 20
  },
  optionContainer : {
    minHeight : hp('70%'),
    width : wp('100%'),
    paddingTop : 20,

  },
  optionBox :{
   
    width : wp('100%'),
    paddingHorizontal : 20,
    height : hp('12%'),
    display : 'flex',
    justifyContent : 'center'
  }
});
