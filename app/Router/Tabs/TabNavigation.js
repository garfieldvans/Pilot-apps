import React from "react";
import { Text, Platform, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Home from "../../Screens/Home/Home";
import Details from "../../Screens/Details/Details";
import { Calendar2, Home2, Layer, More } from "iconsax-react-native";

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 70,
    background: "#fff",
  },
};

const TabNavigation = ({ navigation }) => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Home2
                  size="35"
                  color="#162447"
                  variant={focused ? "Bold" : null}
                />

                {/* <Text style={{ fontSize: 12, color: "#16247d" }}>HOME</Text> */}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={Details}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Calendar2
                  size="35"
                  color="#162447"
                  variant={focused ? "Bold" : null}
                />
                {/* <Text style={{ fontSize: 12, color: "#16247d" }}>DETAIL</Text> */}
              </View>
            );
          },
        }}
      />
      {/* <Tab.Screen
          name="Transaction"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#16247d",
                    width: Platform.OS == "ios" ? 50 : 60,
                    height: Platform.OS == "ios" ? 50 : 60,
                    top: Platform.OS == "ios" ? -10 : -20,
                    borderRadius: Platform.OS == "ios" ? 25 : 30,
                  }}
                >
                  <FontAwesome name="exchange" size={24} color="#fff" />
                </View>
              );
            },
          }}
        /> */}
      <Tab.Screen
        name="Logbook"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Layer
                  size="35"
                  color="#162447"
                  variant={focused ? "Bold" : null}
                />
                {/* <Text style={{ fontSize: 12, color: "#16247d" }}>PRICES</Text> */}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <More
                  size="35"
                  color="#162447"
                  variant={focused ? "Bold" : null}
                />
                {/* <Text style={{ fontSize: 12, color: "#16247d" }}>
                    SETTINGS
                  </Text> */}
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
