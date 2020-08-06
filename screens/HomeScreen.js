import React from 'react'
import { StyleSheet, Text, View,ActivityIndicator } from "react-native";
import { Button, ThemeProvider,Image} from "react-native-elements";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProductCards from '../components/ProductCards';
import { ScrollView } from 'react-native-gesture-handler';


export default function HomeScreen() {




    return (
        <ScrollView>
      <View style={styles.container}>
        <View style={styles.bannerImage}>
          <Image
            source={require("../assets/BigBanner.png")}
            style={{ width: wp("100%"), height: hp("70%") }}
            PlaceholderContent={<ActivityIndicator />}
          />

          <View style={styles.mainBannerText}>
            <Text style={styles.mainHeading}>Fashion Sale</Text>
            <Button
              title="SHOP NOW"
              style={styles.mainBannerButton}
              icon={<Icon name="arrow-right" size={15} color="white" />}
              iconRight
              containerStyle={{ width: wp("40%") }}
              buttonStyle={{ backgroundColor: "#EF3651" }}
              titleStyle={{ marginRight: 10 }}
            />
          </View>
        </View>

<ProductCards />

      </View>
      </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'flex-start',
      color : 'white',
      fontSize : 42,
      backgroundColor : '#1E1F28',
      height : hp('100%')
    },
    bannerImage : {
        height : hp('60%'),
        backgroundColor : 'yellowgreen',
        width : wp('100%'),
        overflow : 'hidden',
    },
    mainBannerText : {
        color : 'yellow',
        position :"absolute",
        marginTop: hp('40%'),
        marginLeft : 20,
      
       
    },
    mainHeading : {
        color : 'white',
        fontSize : 32,
        fontWeight : "bold",
        width :wp('70%'),
        marginBottom : 10
    },
    mainBannerButton:{
        fontSize : 22,
        width : wp('5%')
    }




  });
  