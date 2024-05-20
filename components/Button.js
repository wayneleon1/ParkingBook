import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
const CustomButton = ({ title }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#130F26",
    paddingHorizontal: 55,
    paddingVertical: 18,
    borderRadius: 15,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 20,
    lineHeight: 24,
  },
});

export default CustomButton;
