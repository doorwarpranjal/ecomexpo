import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Button, ThemeProvider } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ContactScreen from "./screens/ContactScreen";
import LoginScreen from './screens/LoginScreen' ;
import SignupScreen from './screens/SignupScreen' ;
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  const [authUser, setauthUser] = useState(false);
//make this variable true to see what user will see when he is logged in



  function LoginStack({navigation}){
    return(
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Signup" component={SignupScreen}/>
      </Stack.Navigator>
    )
    }






  return (


    <NavigationContainer>

      {/* Check if user is logged in if yes we send him to homescreen or else to contact screen */}

      {authUser ? (
        <Tab.Navigator  
        
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = <Icon name="home" size={28} color={color} />;
            } else if (route.name === "Profile") {
              iconName = (
                <Icon name="user" size={28} color={color} />
              );
            } else if (route.name === "Cart") {
              iconName = <Icon name="md-cart" size={28} color={color} />;
            } else if (route.name === "Contact") {
              iconName = <Ionicon name="ios-call" size={28} color={color} />;
            }

            // You can return any component that you like here!
            return iconName;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#EF3651",
          inactiveTintColor: "#ABB4BD",
          inactiveBackgroundColor : '#1E1F28',
          activeBackgroundColor : '#1E1F28',
  
      
        }}
        
        
        
        
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Contact" component={ContactScreen} />
        </Tab.Navigator>
      ) : (
        

        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>

      )}
    </NavigationContainer>
   
  );
}
