import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { View } from "react-native";
import { globalStyles } from "./styles/global";
import ComfirmForgetPassword from "./screens/comfrimForgetPassword";
import Home from "./screens/Home";

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
      <View style={globalStyles.container}>
        <ComfirmForgetPassword />
        {/* <Home /> */}
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
