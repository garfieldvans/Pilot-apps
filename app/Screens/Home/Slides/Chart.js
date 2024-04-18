import React, { useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

const Chart = () => {
  const { width: screenWidth } = Dimensions.get("window");
  const sliderWidth = screenWidth - 40;

  const [visibility, setVisibility] = useState({
    line1: true,
    line2: true,
  });

  const toggleVisibility = (line) => {
    setVisibility((prevState) => ({
      ...prevState,
      [line]: !prevState[line],
    }));
  };

  return (
    <View
      style={{
        backgroundColor: "#162447",
        borderRadius: 20,
        paddingHorizontal: 25,
        paddingVertical: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderLeftWidth: 2,
          borderLeftColor: "cyan",
          paddingLeft: 10,
        }}
      >
        <View>
          <Text
            style={{
              color: "#fff",
              fontFamily: "Poppins_400Regular",
              fontSize: 12,
            }}
          >
            This Week
          </Text>
          <Text
            style={{
              color: "#fff",
              fontFamily: "Poppins_400Regular",
              fontSize: 12,
            }}
          >
            Entity
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: "#fff",
              fontFamily: "Poppins_600SemiBold",
              fontSize: 16,
            }}
          >
            408.0
          </Text>
          <Text
            style={{
              color: "crimson",
              fontFamily: "Poppins_400Regular",
              fontSize: 11,
            }}
          >
            15%YoY
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginVertical: 10,
          marginLeft: -10,
        }}
      >
        <TouchableOpacity
          onPress={() => toggleVisibility("line1")}
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 5,
              width: 5,
              backgroundColor: visibility.line1 ? "#22ccee" : "#a6a6a6",
            }}
          />
          <Text
            style={{
              color: visibility.line1 ? "#FFF" : "#a6a6a6",
              fontFamily: "Poppins_400Regular",
              fontSize: 12,
            }}
          >
            Logbook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleVisibility("line2")}
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 5,
              width: 5,
              backgroundColor: visibility.line2 ? "#E98862" : "#a6a6a6",
            }}
          />
          <Text
            style={{
              color: visibility.line2 ? "#FFF" : "#a6a6a6",
              fontFamily: "Poppins_400Regular",
              fontSize: 12,
            }}
          >
            Logbook2
          </Text>
        </TouchableOpacity>
      </View>
      <LineChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              data: visibility.line1 ? [24, 26, 14, 44, 20, 44, 27, 70] : [0],
              color: (opacity = 1) => `rgba(10, 189, 209, ${opacity})`,
              strokeWidth: 3,
            },
            {
              data: visibility.line2 ? [50, 60, 40, 70, 30, 80, 55, 90] : [0],
              color: (opacity = 0.1) => `rgba(252, 144, 3, ${opacity})`,
              strokeWidth: 3,
            },
          ],
        }}
        width={sliderWidth} // from react-native
        height={230}
        yAxisLabel="Rp"
        // yAxisSuffix="k"
        // formatYLabel={'right'}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          // yAxisAlign: "right",
          backgroundColor: "#162447",
          backgroundGradientFrom: "#162447",
          backgroundGradientTo: "#162447",
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 0.0) => `rgba(34, 204, 238, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 1,
            // marginLeft: -40
          },
          propsForDots: {
            r: "0",
            strokeWidth: "1",
            stroke: "#24ccee",
          },
        }}
        // bezier
        style={{
          marginLeft: -25,
          borderRadius: 16,
        }}
        // onDataPointClick={}
        // horizontalLabelRotation={45}
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity>
          <Text
            style={{
              color: "#fff",
              fontFamily: "Poppins_400Regular",
              fontSize: 14,
            }}
          >
            1w
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              color: "#fff",
              fontFamily: "Poppins_400Regular",
              fontSize: 14,
            }}
          >
            1m
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              color: "#fff",
              fontFamily: "Poppins_400Regular",
              fontSize: 14,
            }}
          >
            3m
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              color: "#fff",
              fontFamily: "Poppins_400Regular",
              fontSize: 14,
            }}
          >
            6m
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              color: "#fff",
              fontFamily: "Poppins_400Regular",
              fontSize: 14,
            }}
          >
            1y
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Chart;
