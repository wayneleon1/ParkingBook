import React from "react";
import ComfirmForgetPassword from "./screens/comfrimForgetPassword";
import { View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ComfirmForgetPassword />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 50,
  },
});
