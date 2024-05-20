import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Register = () => {
  return (
    <View style={styles.container}>
      <Text>This page is for Register</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "pink",
  },
});

export default Register;
