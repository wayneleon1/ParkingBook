import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { Text, TouchableOpacity, View } from "react-native";
const CustomButton = ({ title, buttonColor, textColor, icon }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "center",
        gap: 20,
        backgroundColor: `${buttonColor}`,
        paddingHorizontal: 55,
        paddingVertical: 19,
        borderRadius: 15,
      }}
    >
      <View>{icon ? icon : ""}</View>
      <View>
        <Text
          style={{
            color: `${textColor}`,
            fontSize: 20,
            lineHeight: 24,
            fontFamily: "Ciutadella-medium",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
