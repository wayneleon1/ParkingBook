import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const HSInput = ({
  placeholder,
  keyboardType,
  secureTextEntry,
  onChangeText,
  value,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={{ fontSize: 18 }}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry || false}
        value={value}
        onChangeText={onChangeText}
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
