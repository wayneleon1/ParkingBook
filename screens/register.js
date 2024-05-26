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
const Register = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#130F26" }}>
      <StatusBar barStyle="light-content" backgroundColor="#130F26" />
      <HeaderComponent title="Let’s start!!" />
      <View style={styles.container}>
        <View style={{ flexDirection: "column", gap: 22 }}>
          <HSInput placeholder="Email" />
          <HSInput placeholder="Password" secureTextEntry={true} />
          <HSInput
            placeholder="Password Authentication"
            secureTextEntry={true}
          />
          <HSInput placeholder="Phone Number" keyboardType="numeric" />
        </View>
        <View>
          <CustomButton title="Register" />
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "center",
              gap: 10,
              alignItems: "center",
            }}
          >
            <Text style={globalStyles.paragraph}>Have an yaccount?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("LoginWithEmail");
              }}
            >
              <Text
                style={{ color: "crimson", fontFamily: "Ciutadella-medium" }}
              >
                Sign In
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

export default Register;
