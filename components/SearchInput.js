import { View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import React from "react";

const SearchInput = ({ bgColor }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 18,
        alignItems: "center",
        backgroundColor: bgColor || "#EAEAF3",
        padding: 15,
        borderRadius: 15,
      }}
    >
      <Feather name="search" size={24} color="#2D2D2D" />
      <TextInput placeholder="Search" style={{ fontSize: 18 }} />
    </View>
  );
};
export default SearchInput;
