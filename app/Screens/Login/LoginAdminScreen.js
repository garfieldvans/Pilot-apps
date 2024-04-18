import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const LoginAdminScreen = ({navigation}) => {
  // const [secure, setSecure] = useState(props.secure);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isButtonDisabled = username === "" || password === "";
  return (
    <ScrollView style={{ flex: 1 }}>
      <View>
        <View
          style={
            {
              //   maxHeight: "60%",
            }
          }
        >
          <ImageBackground
            source={require("../../../assets/bgimg.png")}
            resizeMode="cover"
            style={{ width: "auto", height: 290, paddingHorizontal: 30 }}
          >
            {/* <Text>Image bG</Text> */}
            <Image
              style={{
                resizeMode: "contain",
                position: "absolute",
                left: -160,
                bottom: 75,
                height: "10%",
              }}
              source={require("../../../assets/susiairLogo.png")}
            />
          </ImageBackground>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            paddingHorizontal: 30,
            paddingVertical: 30,
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,
            marginTop: -50,
            height: "90%",
            paddingTop: 50,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 30,
                fontFamily: "Poppins_700Bold",
              }}
            >
              Sign In
            </Text>
            <Text>Please enter a valid account</Text>
          </View>
          <View
            style={{
              marginTop: 20,
              width: "100%",
            }}
          >
            <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 12 }}>
              Username
            </Text>
            <TextInput
              placeholder="Username"
              onChangeText={(text) => setUsername(text)}
              style={{
                height: 40,
                borderWidth: 1,
                borderRadius: 20,
                paddingHorizontal: 15,
                marginTop: 5,
              }}
            />
          </View>
          <View
            style={{
              marginTop: 20,
            }}
          >
            <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 12 }}>
              Password
            </Text>
            <TextInput
              placeholder="Password"
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
              style={{
                height: 40,
                borderWidth: 1,
                borderRadius: 20,
                paddingHorizontal: 15,
                marginTop: 5,
              }}
              // setFocus={focus}
              // onChangeText={(text) => props.onChangeText(text)}
              // onFocus={() => setFocus(true)}
              // onBlur={() => setFocus(false)}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              paddingHorizontal: 10,
              marginTop: 5,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Poppins_500Medium",
              }}
            >
              Need helps?
            </Text>
            <TouchableOpacity style={{}}>
              <Text
                style={{
                  color: "#E33F5A",
                  fontSize: 12,
                  fontFamily: "Poppins_500Medium",
                  marginLeft: 3,
                  textDecorationLine: "underline",
                }}
              >
                Contact CRD
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 20,
            }}
          >
            <TouchableOpacity
              style={[
                styles.button,
                isButtonDisabled ? styles.buttonDisabled : null,
              ]}
              disabled={isButtonDisabled}
            >
              <Text
                style={{
                  fontFamily: "Poppins_600SemiBold",
                  color: "white",
                }}
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <View style={styles.lines} />
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 14,
                paddingHorizontal: 8,
              }}
            >
              OR
            </Text>
            <View style={styles.lines} />
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("login")}>
              <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 14 }}>
                Login as Pilot
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 50,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                color: "#959595",
                fontSize: 14,
              }}
            >
              Don't have account?
            </Text>
            <TouchableOpacity
              style={{
                marginLeft: 5,
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins_600SemiBold",
                  fontSize: 14,
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginAdminScreen;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#162447",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  lines: {
    height: 1,
    flexBasis: "44%",
    backgroundColor: "black",
  },
});
