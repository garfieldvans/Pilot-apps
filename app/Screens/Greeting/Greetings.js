import {
  Button,
  Text,
  Image,
  View,
  Touchable,
  TouchableOpacity,
} from "react-native";

import { useState } from "react";

const Greeting = ({ navigation }) =>  {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontFamily: "Poppins_800ExtraBold" }}>Greetingsssss</Text>
      <TouchableOpacity onPress={() => navigation.navigate("login")}>
        <Text>Got it</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Greeting
