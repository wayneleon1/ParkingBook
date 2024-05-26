import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/HSbutton";
import { globalStyles } from "../styles/global";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.container}>
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 0,
            top: "10%",
          }}
        >
          <Text style={globalStyles.paragraph}>Skip</Text>
        </TouchableOpacity>
        <View style={{ marginTop: "60%", alignItems: "center" }}>
          <Image source={require("../assets/car.png")} />
        </View>
        <View style={{ marginTop: 80, gap: 8 }}>
          <Text style={globalStyles.subTitleText}>Welcome</Text>
          <Text style={globalStyles.paragraph}>
            Find a best possible way to park
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "center", gap: 5 }}
          >
            <View style={styles.point}></View>
            <View style={styles.point}></View>
            <View style={styles.point}></View>
          </View>
        </View>
        <View
          style={{ marginTop: 50, flex: 1, justifyContent: "space-between" }}
        >
          <View style={{ gap: 20 }}>
            <CustomButton
              title="Login with Email"
              buttonColor="#2D2D2D"
              textColor="white"
              icon={<FontAwesome name="envelope" size={24} color="white" />}
              onPress={() => {
                navigation.navigate("LoginWithEmail");
              }}
            />

            <CustomButton
              title="Login with Phone"
              buttonColor="white"
              textColor="#2D2D2D"
              icon={<Ionicons name="call" size={24} color="#2D2D2D" />}
              onPress={() => {
                navigation.navigate("ComfirmForgetPassword");
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              gap: 10,
              alignItems: "center",
            }}
          >
            <Text style={globalStyles.paragraph}>Don’t have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <Text
                style={{ color: "crimson", fontFamily: "Ciutadella-medium" }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    position: "relative",
    paddingBottom: 50,
  },
  point: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#2D2D2D",
    opacity: 0.2,
  },
});
