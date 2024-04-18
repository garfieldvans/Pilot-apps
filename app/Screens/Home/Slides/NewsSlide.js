import React from "react";
import { Dimensions, ImageBackground, Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { news } from "../../../Utils/Data/Data";
import ImageOverlay from "react-native-image-overlay";

const NewsSlide = () => {
  const { width: screenWidth } = Dimensions.get("window");

  const sliderWidth = screenWidth;
  const itemWidth = Math.round(sliderWidth * 0.76);

  const News = ({ item }) => (
    <View
      style={{
        // backgroundColor: "tomato",
        height: 100,
        // paddingHorizontal: 20
      }}
    >
      {/* <ImageOverlay
      source={item.image}
      // resizeMode="cover"
      title = {item.title}
      rounded = {20}
      height = {100}
      width = {50}
      contentPosition = {'bottom'}
      // marginHorizontal=  {30}
      > */}
        {/* <Text>{item.title}</Text> */}
      {/* </ImageOverlay> */}
      <ImageBackground
        source={item.image}
        resizeMode="cover"
        // height={100}
        width={itemWidth}
        style={{
          flex: 1,
          justifyContent: "flex-end",
          padding: 10,
          alignItems: "center",
        }}
        borderRadius={20}
      >
        <Text style={{ color: "#fff" }}>{item.title}</Text>
      </ImageBackground>
    </View>
  );

  return (
    <View style={{
        marginLeft: -50,
    }}>
      <Carousel
        layout={"default"}
        data={news}
        renderItem={News}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
      />
    </View>
  );
};

export default NewsSlide;
