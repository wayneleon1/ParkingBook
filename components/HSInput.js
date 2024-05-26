import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const HSInput = ({ placeholder, keyboardType, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={{ fontSize: 18 }}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry || false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
  },
});

export default HSInput;
