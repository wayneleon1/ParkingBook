import React from "react";
import car from "../assets/NewCar.png";
import bike from "../assets/bike.png";
import bus from "../assets/bus.png";
import van from "../assets/van.png";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Pressable,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import SearchInput from "../components/SearchInput";
import { globalStyles } from "../styles/global";
import { ScrollView } from "react-native-gesture-handler";

const Welcome = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#130F26" }}>
      <StatusBar barStyle="light-content" backgroundColor="#130F26" />
      <View>
        <Image
          source={require("../assets/wire.png")}
          style={{
            position: "absolute",
            resizeMode: "stretch",
            width: "100%",
          }}
        />
        <View
          style={{
            padding: 30,
            flexDirection: "column",
            justifyContent: "center",
            gap: 40,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={{
                  color: "white",
                  fontSize: 32,
                  lineHeight: 38.4,
                  fontFamily: "Ciutadella-Bold",
                }}
              >
                Hola, Echa👋🏻
              </Text>
              <Text style={styles.paragraph}>Find an easy parking spot</Text>
            </View>
            <Pressable
              onPress={() => {
                navigation.goBack();
              }}
              style={{
                backgroundColor: "#2A344E",
                width: 44,
                height: 44,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="notifications" size={24} color="white" />
            </Pressable>
          </View>
          <SearchInput />
        </View>
      </View>
      <View style={styles.container}>
        {/* Categorie  */}
        <View>
          <Text style={globalStyles.titleText}>Categories</Text>
          <ScrollView
            horizontal
            style={{ marginTop: 20 }}
            showsHorizontalScrollIndicator={false}
          >
            {categories.map((item, index) => {
              return (
                <View key={index} style={styles.card}>
                  <Image source={item.icon} />
                  <Text>{item.name}</Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4FA",
    flexDirection: "column",
    paddingHorizontal: 32,
    paddingTop: 50,
    paddingBottom: 50,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
  },
  paragraph: {
    fontSize: 18,
    lineHeight: 19.2,
    color: "white",
    opacity: 0.5,
    fontFamily: "Ciutadella-regular",
    marginTop: 10,
  },
  card: {
    marginRight: 14,
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 30,
    flexDirection: "column",
    gap: 10,
    borderRadius: 10,
  },
});

const categories = [
  {
    name: "Car",
    icon: car,
  },
  {
    name: "Bike",
    icon: bike,
  },
  {
    name: "Bus",
    icon: bus,
  },
  {
    name: "Van",
    icon: van,
  },
];
export default Welcome;
