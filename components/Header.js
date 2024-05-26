import { View, Text, Image } from "react-native";
import React from "react";

const HeaderComponent = ({ title }) => {
  return (
    <View>
      <Image
        source={require("../assets/wire.png")}
        style={{
          position: "absolute",
          resizeMode: "stretch",
          width: "100%",
        }}
      />
      <View
        style={{
          paddingHorizontal: 32,
          height: 200,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 32,
            lineHeight: 38.4,
            fontFamily: "Ciutadella-regular",
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
};

export default HeaderComponent;
