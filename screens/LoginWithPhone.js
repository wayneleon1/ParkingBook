import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HSInput from "../components/HSInput";
import CustomButton from "../components/HSbutton";
import { globalStyles } from "../styles/global";
import HeaderComponent from "../components/Header";
const LoginWithphone = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#130F26" }}>
      <StatusBar barStyle="light-content" backgroundColor="#130F26" />
      <HeaderComponent title="Glad to see you!!" />
      <View style={styles.container}>
        <View style={{ flexDirection: "column", gap: 22 }}>
          <HSInput placeholder="Phone Number" keyboardType="numeric" />
          <HSInput placeholder="Password" secureTextEntry={true} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              gap: 10,
              alignItems: "center",
            }}
          >
            <Text style={globalStyles.paragraph}>Forgot password?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ForgetPassword");
              }}
            >
              <Text
                style={{ color: "crimson", fontFamily: "Ciutadella-medium" }}
              >
                Retrieve
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <CustomButton title="Login" />
          <View
            style={{
              marginTop: 20,
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4FA",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    paddingTop: 50,
    paddingBottom: 50,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
  },
});

export default LoginWithphone;
