import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { Button, ThemeProvider, Image, Header } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/FontAwesome";
import ProductCards from "../components/ProductCards";
import { ScrollView } from "react-native-gesture-handler";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { loadAsync } from "expo-font";

export default function HomeScreen() {
  const primaryColor = "#EF3651";
  const secondaryColor = "#1E1F28";

  const promos = [
    {
      name:
        "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
      key: "1",
    },
    {
      name:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      key: "2",
    },
    {
      name:
        "https://images.unsplash.com/photo-1530286910461-6a1960d1e83a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      key: "3",
    },
    {
      name:
        "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      key: "4",
    },
    {
      name:
        "https://images.unsplash.com/photo-1585866473493-b51336410446?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      key: "5",
    },
    {
      name:
        "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=374&q=80",
      key: "7",
    },
    {
      name:
        "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=351&q=80",
      key: "8",
    },
  ];

  const forhim = [
    {
      name:
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11077774/2019/12/24/29bdd2c8-3e2f-43aa-8ce5-55f3a501a4fa1577166621272-Difference-of-Opinion-Men-Sea-Green-Solid-Round-Neck-T-shirt-1.jpg",
      key: "1",
    },
    {
      name:
        "https://images.unsplash.com/photo-1512437011370-3c5a37a2190f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      key: "2",
    },
    {
      name:
        "https://images.unsplash.com/photo-1532660621034-fb55e2e59762?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      key: "3",
    },
    {
      name:
        "https://image.freepik.com/free-photo/negative-emotions-isolated-portrait-young-attractive-unhappy-black-skinned-male-student-with-afro-hairstyle-casual-outfit-tearing-clothes-with-hands-looking-camera-with-angry-expression_176420-12956.jpg",
      key: "4",
    },
    {
      name:
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2478236/2018/2/23/11519376919799-WROGN-Men-Red--Beige-Slim-Fit-Checked-Casual-Shirt-7761519376919619-1.jpg",
      key: "5",
    },
    {
      name:
        "https://image.freepik.com/free-photo/front-view-man-with-shirt_23-2148542758.jpg",
      key: "7",
    },
    {
      name:
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11077816/2019/12/24/ad792ba2-a3fe-4784-a053-a40cf6cb32cb1577167596901-Difference-of-Opinion-Men-Coral-Solid-Round-Neck-T-shirt-611-1.jpg",
      key: "8",
    },
  ];

  return (
    <ScrollView>
      <Header
        leftComponent={{
          text: "EcomExpo",
          style: {
            color: "#fff",
            fontSize: 18,
            fontWeight: "bold",
            width: wp("50%"),
            marginHorizontal: 5,
          },
        }}
        rightComponent={{ icon: "shopping-cart", color: "#fff" }}
        containerStyle={{
          backgroundColor: secondaryColor,
          justifyContent: "space-around",
          borderBottomWidth: 0,
        }}
      />
      <View style={styles.container}>
        <View style={styles.bannerImage}>
          <Image
            source={require("../assets/BigBanner.png")}
            style={{ width: wp("100%"), height: hp("70%") }}
            PlaceholderContent={<ActivityIndicator />}
          />

          <View style={styles.mainBannerText}>
            <Text style={styles.mainHeading}>Summer Sale</Text>
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

        <ProductCards promos={promos} title="New Styles" />

        <ProductCards promos={forhim} title="Styles for Him" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "flex-start",
    color: "white",
    fontSize: 42,
    backgroundColor: "#1E1F28",
  },
  bannerImage: {
    height: hp("60%"),
    backgroundColor: "yellowgreen",
    width: wp("100%"),
    overflow: "hidden",
  },
  mainBannerText: {
    color: "yellow",
    position: "absolute",
    marginTop: hp("40%"),
    marginLeft: 20,
    width: wp("100%"),
  },
  mainHeading: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    width: wp("70%"),
    marginBottom: 10,
    fontWeight: "900",
  },
  mainBannerButton: {
    fontSize: 22,
    width: wp("40%"),
  },
});
