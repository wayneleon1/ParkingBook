import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
const CustomButton = ({ title, color }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: `${color}`,
        paddingHorizontal: 55,
        paddingVertical: 18,
        borderRadius: 15,
      }}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  text: {
    color: "#FFFFFF",
    fontSize: 20,
    lineHeight: 24,
    fontFamily: "Ciutadella-medium",
  },
});

export default CustomButton;
