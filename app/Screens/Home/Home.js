import {
  ArrowRight,
  ArrowRight2,
  Notification,
  RecordCircle,
} from "iconsax-react-native";
import {
  Button,
  Text,
  Image,
  View,
  FlatList,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { data } from "../../Utils/Data/Data";
import NewsSlide from "./Slides/NewsSlide";
import Chart from "./Slides/Chart";
import Chart2 from "./Slides/Chart2";
import { Badge } from "@rneui/themed";

export default function Home({ navigation }) {
  const { width: screenWidth } = Dimensions.get("window");

  const sliderWidth = screenWidth;
  const itemWidth = Math.round(sliderWidth * 0.8);

  const FlightSlide = ({ item }) => (
    <View
      style={{
        backgroundColor: "#fff",
        Width: 280,
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: 20,
        shadowColor: "#000",
        elevation: 5,
        shadowOffset: {
          height: 5,
          width: 3,
        },
        marginLeft: 5,
        marginBottom: 20,
      }}
    >
      <TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 14 }}>
            {item.from}
          </Text>
          <ArrowRight size="15" color="black" />
          <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 14 }}>
            {item.to}
          </Text>
          <ArrowRight2 size="13" color="black" variant="Bold" />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingRight: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 12,
              color: "#949da8",
            }}
          >
            {item.date}
          </Text>
          <RecordCircle size="5" color="#949da8" variant="Bold" />
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 12,
              color: "#949da8",
            }}
          >
            {item.flightTime}
          </Text>
          <RecordCircle size="5" color="#949da8" variant="Bold" />
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 12,
              color: "#949da8",
            }}
          >
            {item.flightType}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View>
        <View
          style={{
            backgroundColor: "#162447",
            minHeight: 230,
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
              justifyContent: "space-between",
            }}
          >
            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  // paddingHorizontal: 15,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Poppins_400Regular",
                    fontSize: 12,
                    color: "white",
                  }}
                >
                  Welcome back -{" "}
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins_600SemiBold",
                    fontSize: 13,
                    color: "white",
                  }}
                >
                  Person 1
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  // paddingHorizontal: 15,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Poppins_600SemiBold",
                    fontSize: 16,
                    color: "white",
                  }}
                >
                  1,904{" "}
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins_400Regular",
                    fontSize: 12,
                    color: "white",
                  }}
                >
                  Total Flight Hours
                </Text>
              </View>
            </View>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}>

            <TouchableOpacity onPress={() => console.log("Button pressed")}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../../../assets/profile.png")}
                  style={{ width: 40, height: 40, marginRight: 10 }}
                />
                <Badge
                  status="success"
                  containerStyle={{ position: "absolute", top: 0, left: 30 }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 60,
                height: "auto",
                marginLeft: 10
              }}
            >
              <Notification size="32" color="#ffffff" />
              <Badge
                value={5}
                status="error"
                textStyle={{
                  color: "#EFE",
                  fontSize: 9,
                  fontFamily: "Poppins_700Bold",
                }}
                badgeStyle={{
                  height: 15,
                  width: 13,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "#fff",
                }}
                containerStyle={{ position: "absolute", top: 0, left: 16 }}
              />
            </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            position: "relative",
            top: -100,
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 15,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins_600SemiBold",
                fontSize: 18,
                color: "white",
              }}
            >
              Upcoming Flight
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontFamily: "Poppins_500Medium",
                  fontSize: 12,
                  color: "white",
                }}
              >
                See all
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginLeft: -50,
              // marginRight: 40
            }}
          >
            <Carousel
              layout={"default"}
              data={data}
              renderItem={FlightSlide}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
            />
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins_600SemiBold",
                  fontSize: 18,
                  color: "#000",
                }}
              >
                News & Information
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontFamily: "Poppins_500Medium",
                    fontSize: 12,
                    color: "#000",
                  }}
                >
                  See all
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <NewsSlide />
            </View>
            <View
              style={{
                marginVertical: 15,
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins_600SemiBold",
                  fontSize: 18,
                  color: "#000",
                }}
              >
                My Statistics
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#162447",
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View>
                  <Text
                    style={{
                      color: "white",
                      fontFamily: "Poppins_400Regular",
                      fontSize: 12,
                    }}
                  >
                    Today
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      fontFamily: "Poppins_400Regular",
                      fontSize: 12,
                    }}
                  >
                    17 Apr 2024
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      color: "white",
                      fontFamily: "Poppins_600SemiBold",
                      fontSize: 24,
                    }}
                  >
                    3.6
                  </Text>
                  <Text
                    style={{
                      color: "tomato",
                      fontFamily: "Poppins_400Regular",
                      fontSize: 12,
                    }}
                  >
                    4.4 hours to limit
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: "#3D3E48",
                  height: 1,
                  marginVertical: 10,
                  // width: screenWidth
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View>
                  <Text
                    style={{
                      color: "white",
                      fontFamily: "Poppins_400Regular",
                      fontSize: 12,
                    }}
                  >
                    Today
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      fontFamily: "Poppins_400Regular",
                      fontSize: 12,
                    }}
                  >
                    17 Apr 2024
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      color: "white",
                      fontFamily: "Poppins_600SemiBold",
                      fontSize: 24,
                    }}
                  >
                    3.6
                  </Text>
                  <Text
                    style={{
                      color: "tomato",
                      fontFamily: "Poppins_400Regular",
                      fontSize: 12,
                    }}
                  >
                    4.4 hours to limit
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                // backgroundColor: 'tomato',
                marginVertical: 20,
                borderRadius: 20,
              }}
            >
              <Chart />
              {/* <Chart2/> */}
            </View>

            <View style={{
              marginVertical: 20
            }}>
              <TouchableOpacity style={{
                backgroundColor: '#aeaeae',
                paddingVertical: 15,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20
              }}>
                <Text style={{
                  color: '#fff',
                  fontFamily: 'Poppins_600SemiBold',
                  fontSize: 13
                }}>Download Logbook (PDF)</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
