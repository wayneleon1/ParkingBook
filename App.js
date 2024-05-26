import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

import AppRoutes from "./routes/AppRoutes";

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

const getFonts = () =>
  Font.loadAsync({
    "Ciutadella-Bold": require("./assets/fonts/Ciutadella Bold.ttf"),
    "Ciutadella-regular": require("./assets/fonts/Ciutadella Regular.ttf"),
    "Ciutadella-medium": require("./assets/fonts/Ciutadella Medium.ttf"),
  });

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadResources = async () => {
      try {
        await getFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setFontLoaded(true);
        await SplashScreen.hideAsync();
      }
    };

    loadResources();
  }, []);

  if (!fontLoaded) {
    return null; // Render nothing until the fonts are loaded
  }

  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
