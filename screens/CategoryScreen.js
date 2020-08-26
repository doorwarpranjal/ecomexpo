import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Alert,
} from "react-native";
import { Button, Image, Header } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CategoryShowCard from '../components/CategoryShowCard'




export default function ContactScreen() {
  const primaryColor = "#EF3651";
  const secondaryColor = "#1E1F28";

  const CategoryWomen = [
    {
      categoryName : 'Jeans',
      name:
        "https://images.unsplash.com/photo-1458119516396-015721b6d60a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=352&q=80",
      key: "1",
    },
    {
      categoryName : 'Top Wear',
      name:
        "https://images.unsplash.com/photo-1520998732005-08df81b96359?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=425&q=80",
      key: "2",
    },
    {
      categoryName : 'Accessories',
      name:
        "https://images.unsplash.com/photo-1590455209730-25a477555e17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      key: "3",
    },
    {
      categoryName : 'Watches',
      name:
        "https://images.unsplash.com/photo-1570943991418-ffa08d952b16?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      key: "4",
    },
    {
      categoryName : 'Ethnic ',
      name:
        "https://images.unsplash.com/photo-1594709287485-447f40e8d7a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      key: "5",
    },
    {
      categoryName : 'Sunglasses',
      name:
        "https://images.unsplash.com/photo-1566590393124-c34c2052f455?ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80",
      key: "7",
    },
    {
      categoryName : 'Party Ready',
      name:
        "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=351&q=80",
      key: "8",
    },
  ];



  const CategoryMen = [
    {
      categoryName : 'Suits',
      name:
        "https://images.unsplash.com/photo-1594938384824-022767a58e11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      key: "1",
    },
    {
      categoryName : 'Shoes',
      name:
        "https://images.unsplash.com/photo-1557461761-c7c2b7a5fa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80",
      key: "2",
    },
    {
      categoryName : 'Trousers',
      name:
        "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      key: "3",
    },
    {
      categoryName : 'Tshirts',
      name:
        "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      key: "4",
    },
    {
      categoryName : 'Jacket',
      name:
        "https://images.unsplash.com/photo-1512353087810-25dfcd100962?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      key: "5",
    },
    {
      categoryName : 'Sunglasses',
      name:
        "https://images.unsplash.com/photo-1552337557-45792b252a2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      key: "7",
    },
    {
      categoryName : 'Party Ready',
      name:
        "https://images.unsplash.com/photo-1585145537001-4bfd5d32e669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      key: "8",
    },
  ];



  return (
  
    <View style={styles.container}>
      <ScrollView horizontal={true}>
      <ScrollView>
      <View style={styles.containerInner} >
          <Text style={styles.heading}>
           Women's Section
          </Text>

          <CategoryShowCard cardData={CategoryWomen}/>
        </View>
        </ScrollView>

    
        <ScrollView>
      <View style={styles.containerInner} >
          <Text style={styles.heading}>
          Men's Section
          </Text>

          <CategoryShowCard cardData={CategoryMen}/>
        </View>
        </ScrollView>


      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    color: "white",
    fontSize: 42,
    backgroundColor: "#1E1F28",
    width: wp("100%"),
    height: 'auto',
  },
  containerInner: {
    flex: 1,
    width: wp("100%"),
    textAlign : 'center',
    justifyContent : 'center',
    alignItems : 'center'
  },heading : {
    fontSize : 18,
    color : 'white',
    fontWeight : 'bold',
    marginVertical : 30
  }
});
