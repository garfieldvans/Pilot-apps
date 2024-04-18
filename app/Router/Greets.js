import React from 'react'

import {
    Button,
    Text,
    Image,
    View,
    Touchable,
    TouchableOpacity,
  } from "react-native";

const Greets = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontFamily: "Poppins_800ExtraBold" }}>Greetingsssss</Text>
      <TouchableOpacity onPress={() => navigation.navigate("login")}>
        <Text>Got it</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Greets
