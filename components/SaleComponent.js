import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  ActivityIndicator,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Button, Input, Text, Image } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function SaleComponent({ title, navigation }) {
  const salecontent = {
    mainheading: "20% Summer Sale",
    mainposter: "../assets/image3.png",

    leftheading: "For Her",
    leftposter: "../assets/image6.jpg",

    rightheading: "For Him",
    rightposter: "../assets/image.png",
  };

  const CategoryWomen = [
    {
      categoryName: "Jeans",
      name:
        "https://images.unsplash.com/photo-1458119516396-015721b6d60a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=352&q=80",
      key: "1",
    },
    {
      categoryName: "Top Wear",
      name:
        "https://images.unsplash.com/photo-1520998732005-08df81b96359?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=425&q=80",
      key: "2",
    },
    {
      categoryName: "Accessories",
      name:
        "https://images.unsplash.com/photo-1590455209730-25a477555e17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      key: "3",
    },
    {
      categoryName: "Watches",
      name:
        "https://images.unsplash.com/photo-1570943991418-ffa08d952b16?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      key: "4",
    },
    {
      categoryName: "Ethnic ",
      name:
        "https://images.unsplash.com/photo-1594709287485-447f40e8d7a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      key: "5",
    },
    {
      categoryName: "Sunglasses",
      name:
        "https://images.unsplash.com/photo-1566590393124-c34c2052f455?ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80",
      key: "7",
    },
    {
      categoryName: "Party Ready",
      name:
        "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=351&q=80",
      key: "8",
    },
  ];

  const CategoryMen = [
    {
      categoryName: "Suits",
      name:
        "https://images.unsplash.com/photo-1594938384824-022767a58e11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      key: "1",
    },
    {
      categoryName: "Shoes",
      name:
        "https://images.unsplash.com/photo-1557461761-c7c2b7a5fa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80",
      key: "2",
    },
    {
      categoryName: "Trousers",
      name:
        "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      key: "3",
    },
    {
      categoryName: "Tshirts",
      name:
        "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      key: "4",
    },
    {
      categoryName: "Jacket",
      name:
        "https://images.unsplash.com/photo-1512353087810-25dfcd100962?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      key: "5",
    },
    {
      categoryName: "Sunglasses",
      name:
        "https://images.unsplash.com/photo-1552337557-45792b252a2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      key: "7",
    },
    {
      categoryName: "Party Ready",
      name:
        "https://images.unsplash.com/photo-1585145537001-4bfd5d32e669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      key: "8",
    },
  ];

  const categoryHandler = () => {
    navigation.navigate("Category");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          Alert.alert("You clicked on " + salecontent.mainheading);
        }}
      >
        <View style={styles.mainImage}>
          <Text style={styles.mainHeading}> {salecontent.mainheading} </Text>

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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Category", {
              categoryContent: CategoryWomen,
              categoryHeading: "Women Section",
            });
          }}
        >
          <View style={styles.secondaryLeftSection}>
            <Text
              style={{
                color: "#fff",
                position: "absolute",

                width: wp("50%"),

                marginTop: hp("5%"),
                textAlign: "center",
                fontSize: 32,
                fontWeight: "bold",
                zIndex: 2,
              }}
            >
              {salecontent.leftheading}
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

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Category", {
              categoryContent: CategoryMen,
              categoryHeading: "Men Section",
            });
          }}
        >
          <View style={styles.secondaryRightSection}>
            <Text
              style={{
                color: "#fff",
                position: "absolute",
                width: wp("50%"),

                marginTop: hp("5%"),
                textAlign: "center",
                fontSize: 32,
                fontWeight: "bold",
                zIndex: 2,
              }}
            >
              {salecontent.rightheading}
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
  container: {
    // backgroundColor : 'yellow',
    width: wp("100%"),
    alignItems: "center",
    marginBottom: 30,
  },
  mainImage: {
    height: hp("40%"),
    resizeMode: "cover",
    overflow: "hidden",
    overlayColor: "black",
    display: "flex",
  },
  mainHeading: {
    color: "#fff",
    position: "absolute",
    width: wp("90%"),
    marginHorizontal: wp("5%"),

    marginTop: hp("30%"),
    textAlign: "center",
    fontSize: 34,
    fontWeight: "bold",
    zIndex: 2,
  },
  secondarySection: {
    height: hp("60%"),
    backgroundColor: "teal",
    width: wp("100%"),
    display: "flex",
    flexDirection: "row",
  },
  secondaryLeftSection: {
    backgroundColor: "yellow",
    height: hp("60%"),
    flex: 1,
    overflow: "hidden",
    alignItems: "center",
  },
  secondaryRightSection: {
    backgroundColor: "crimson",
    height: hp("60%"),
    flex: 1,
    overflow: "hidden",
    alignItems: "center",
  },
});
