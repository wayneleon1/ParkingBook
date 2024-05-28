import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HSInput from "../components/HSInput";
import CustomButton from "../components/HSbutton";
import { globalStyles } from "../styles/global";
import HeaderComponent from "../components/Header";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../Auth/FirebaseConfig";

const LoginWithEmail = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Basic email validation regex
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validForm = () => {
    let valid = true;

    if (!email.trim()) {
      setEmailError("Email is required");
      valid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Email provided is invalid ");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password.trim()) {
      setPasswordError("Password is invalid");
      valid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must be over 8 chars long ");
      valid = false;
    } else {
      setPasswordError("");
    }

    return valid;
  };

  const handleLogin = async () => {
    if (validForm() === true) {
      try {
        const response = await signInWithEmailAndPassword(
          FIREBASE_AUTH,
          email,
          password
        );
        Alert.alert(
          `Welcome ${response.user.email}`,
          "You're successufuly logged in!",
          [
            {
              text: "Continue",
              onPress: () => navigation.navigate("HomeRoutes"),
            },
          ]
        );
      } catch (error) {
        Alert.alert("Error", "Invalid-credential", [
          { text: "OK", onPress: () => console.log("alert closed") },
        ]);
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#130F26" }}>
      <StatusBar barStyle="light-content" backgroundColor="#130F26" />
      <HeaderComponent title="Glad to see you!!" />
      <View style={styles.container}>
        <View style={{ flexDirection: "column", gap: 22 }}>
          {emailError ? (
            <Text style={{ color: "crimson", fontFamily: "Ciutadella-medium" }}>
              {emailError}
            </Text>
          ) : null}
          <HSInput
            placeholder="Email"
            value={email}
            onChangeText={(e) => setEmail(e)}
          />
          {passwordError ? (
            <Text style={{ color: "crimson", fontFamily: "Ciutadella-medium" }}>
              {passwordError}
            </Text>
          ) : null}
          <HSInput
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(p) => setPassword(p)}
          />
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
          <CustomButton
            title="Login"
            onPress={() => {
              handleLogin();
            }}
          />
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

export default LoginWithEmail;
