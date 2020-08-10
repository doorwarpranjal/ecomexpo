import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  Image,
  Icon,
  Divider,
  Input,
  Button,
  CheckBox,
} from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ScrollView } from "react-native-gesture-handler";
import ProductCards from "../components/ProductCards";
import RBSheet from "react-native-raw-bottom-sheet";

export default function PersonalnfoScreen() {
  const refRBSheet = useRef();

  const [notificationChecked, setnotificationChecked] = useState(true);
  const [newArrivalChecked, setnewArrivalChecked] = useState(false);

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

  const tf = this;

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
              borderBottomWidth: 1,
            }}
            containerStyle={{
              backgroundColor: "#2A2C36",
              width: wp("90%"),
              marginBottom: 20,
              paddingVertical: 10,
              borderRadius: 5,
              justifyContent: "center",
            }}
          />

          <Input
            label="Phone Number (+91)"
            labelStyle={{ color: "#ABB4BD", fontSize: 11 }}
            placeholder="9131251818"
            inputStyle={{ color: "#fff" }}
            inputContainerStyle={{
              borderBottomWidth: 1,
            }}
            containerStyle={{
              backgroundColor: "#2A2C36",
              width: wp("90%"),
              marginBottom: 20,
              paddingVertical: 10,
              borderRadius: 5,
              justifyContent: "center",
            }}
          />

    

          <View style={styles.passwordContainer}>
            <Text style={styles.passwordContainerMainHeading}>Password</Text>
            <TouchableOpacity>
              <Text
                style={styles.passwordContainerSubHeading}
                onPress={() => refRBSheet.current.open()}
              >
                Change
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.passwordContainer}>
            <Text style={styles.passwordContainerMainHeading}>
              Notifications
            </Text>
            <TouchableOpacity>
              <CheckBox
                // title='Click Here'
                checked={notificationChecked}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                onPress={() => setnotificationChecked(!notificationChecked)}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.passwordContainer}>
            <Text style={styles.passwordContainerMainHeading}>New Offers</Text>
            <TouchableOpacity>
              <CheckBox
                // title='Click Here'
                checked={newArrivalChecked}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                onPress={() => setnewArrivalChecked(!newArrivalChecked)}
              />
            </TouchableOpacity>
          </View>

          <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}
            customStyles={{
              wrapper: {
                backgroundColor: "black",
                opacity: 0.85,
              },
              draggableIcon: {
                backgroundColor: "gray",
              },
              container: {
                backgroundColor: "#1E1F28",
              },
            }}
            height={hp("70%")}
          >
            <View style={{ alignItems: "center" }}>
              <Text style={styles.bottomSheetHeading}>Change Password</Text>

              <Input
                label="Old Password"
                labelStyle={{ color: "#ABB4BD", fontSize: 11 }}
                placeholder="******"
                inputStyle={{ color: "#fff" }}
                containerStyle={{
                  // backgroundColor: "#2A2C36",
                  width: wp("94%"),
                  paddingVertical: 15,
                  borderRadius: 10,
                }}
                secureTextEntry={true}
              />

              <Input
                label="New Password"
                labelStyle={{ color: "#ABB4BD", fontSize: 11 }}
                placeholder="******"
                inputStyle={{ color: "#fff" }}
                containerStyle={{
                  // backgroundColor: "#2A2C36",
                  width: wp("94%"),
                  paddingVertical: 15,
                  borderRadius: 10,
                }}
                secureTextEntry={true}
              />

              <Input
                label="Confirm Password"
                labelStyle={{ color: "#ABB4BD", fontSize: 11 }}
                placeholder="******"
                inputStyle={{ color: "#fff" }}
                containerStyle={{
                  // backgroundColor: "#2A2C36",
                  width: wp("94%"),
                  paddingVertical: 15,
                  borderRadius: 10,
                }}
                secureTextEntry={true}
              />

              <Button
                icon={<Icon name="lock" size={22} color="white" />}
                iconRight
                title="Change Password"
                titleStyle={{ fontSize: 18, marginRight: 10 }}
                buttonStyle={{
                  width: wp("80%"),
                  backgroundColor: "#EF3651",
                  borderRadius: 50,
                }}
                iconContainerStyle={{ marginLeft: 10 }}
              />
            </View>
          </RBSheet>
        </View>

        <Button
          icon={<Icon name="save" size={22} color="white" />}
          iconRight
          title="Save Changes"
          titleStyle={{ fontSize: 22, marginRight: 10 }}
          buttonStyle={{
            width: wp("80%"),
            backgroundColor: "#EF3651",
            borderRadius: 50,
            shadowColor: "rgba(239, 54, 81, 0.35)",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.5,
            shadowRadius: 5.84,

            elevation: 5,
          }}
          iconContainerStyle={{ marginLeft: 10 }}
          containerStyle={{
            marginTop: 25,
            marginLeft: wp("5%"),
            marginRight: wp("5%"),
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1F28",
    justifyContent: "flex-start",
    fontSize: 42,
    paddingTop: 0,
    paddingHorizontal: 20,
    minHeight: hp("81%"),
  },
  headingSection: {
    height: hp("10%"),
    // backgroundColor : 'teal'
  },
  mainHeading: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 10,
  },
  smallHeading: {
    color: "#fff",
    fontWeight: "bold",
  },
  bottomSheetHeading: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  passwordContainerMainHeading: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  passwordContainerSubHeading: {
    fontSize: 16,
    color: "#ABB4BD",
  },
  passwordContainer: {
    // backgroundColor : '#2A2C36',
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 0,
  },
});
