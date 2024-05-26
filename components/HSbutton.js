import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const CustomButton = ({ title, buttonColor, textColor, icon, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        justifyContent: "center",
        gap: 20,
        backgroundColor: buttonColor || "#130F26",
        paddingHorizontal: 55,
        paddingVertical: 19,
        borderRadius: 15,
      }}
    >
      <View>{icon ? icon : ""}</View>
      <View>
        <Text
          style={{
            color: textColor || "white",
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
