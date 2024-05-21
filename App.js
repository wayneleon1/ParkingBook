import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import ComfirmForgetPassword from "./screens/comfrimForgetPassword";
import { View, StyleSheet } from "react-native";

const getFonts = () =>
  Font.loadAsync({
    "Ciutadella-Bold": require("./assets/fonts/Ciutadella Bold.ttf"),
    "Ciutadella-regular": require("./assets/fonts/Ciutadella Regular.ttf"),
    "Ciutadella-medium": require("./assets/fonts/Ciutadella Medium.ttf"),
  });

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (fontLoaded) {
    return (
      <View style={styles.container}>
        <ComfirmForgetPassword />
      </View>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.error(err)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 50,
  },
});
