import React, { useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
// import { LineChart } from "react-native-chart-kit";

import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";

const Chart2 = () => {
    const data1 = [
        { x: 'Jan', y: 10 },
        { x: 'Feb', y: 20 },
        { x: 'Mar', y: 15 },
        { x: 'Apr', y: 25 },
        { x: 'May', y: 30 },
      ];
    
      const data2 = [
        { x: 'Jan', y: 15 },
        { x: 'Feb', y: 25 },
        { x: 'Mar', y: 20 },
        { x: 'Apr', y: 30 },
        { x: 'May', y: 35 },
      ];

      const combinedData = [
        {
          data: data1.map(item => ({ x: item.x, y: item.y })),
          color: () => '#2979FF',
          strokeWidth: 2,
        },
        {
          data: data2.map(item => ({ x: item.x, y: item.y })),
          color: () => '#FF6F00',
          strokeWidth: 2,
        },
      ];
    

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
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginVertical: 10,
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
          <Text style={{ color: visibility.line1 ? "#FFF" : "#a6a6a6" }}>
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
          <Text style={{ color: visibility.line2 ? "#FFF" : "#a6a6a6" }}>
            Logbook2
          </Text>
        </TouchableOpacity>
      </View>
      <LineChart
      dataset={combinedData}
      width={300}
      height={200}
      yAxisLabel="Y"
      xAxisLabel="X"
      yAxisSuffix="k"
      chartConfig={{
        backgroundColor: '#FFF',
        backgroundGradientFrom: '#FFF',
        backgroundGradientTo: '#FFF',
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
          borderRadius: 16,
        },
        propsForDots: {
          r: '6',
          strokeWidth: '2',
          stroke: '#2979FF',
        },
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
      <View>

      </View>
    </View>
  );
};

export default Chart2;
