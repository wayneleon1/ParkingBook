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
import { FIREBASE_AUTH } from "../Auth/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfrimPassword, setComfrimPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [comfrimPasswordError, setComfrimPasswordError] = useState("");

  // Basic email validation regex
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Basic phone  validation regex
  const isValidPhoneNumber = (phone) => {
    const phoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    return phoneRegex.test(phone);
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
    if (!comfrimPassword.trim()) {
      setComfrimPasswordError("Comfrim Password can't be empty");
      valid = false;
    } else if (comfrimPassword !== password) {
      setComfrimPasswordError("Comfrim Password doesn't match with Password");
      valid = false;
    } else {
      setComfrimPasswordError("");
    }
    if (!phone.trim()) {
      setPhoneError("Phone Number is required");
      valid = false;
    } else if (!isValidPhoneNumber(phone)) {
      setPhoneError("Phone provided is invalid ");
      valid = false;
    } else {
      setPhoneError("");
    }
    return valid;
  };

  const handleRegister = async () => {
    if (validForm() === true) {
      try {
        const response = await createUserWithEmailAndPassword(
          FIREBASE_AUTH,
          email,
          password
        );
        Alert.alert(
          `Hello ${response.user.email}`,
          "Account created successfully! Welcome aboard.",
          [
            {
              text: "Continue",
              onPress: () => navigation.navigate("LoginWithEmail"),
            },
          ]
        );
      } catch (error) {
        Alert.alert("OOPS!", "Something went wrong!", [
          { text: "OK", onPress: () => console.log("alert closed") },
        ]);
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#130F26" }}>
      <StatusBar barStyle="light-content" backgroundColor="#130F26" />
      <HeaderComponent title="Let’s start!!" />
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
            onChangeText={(e) => setPassword(e)}
          />
          {comfrimPasswordError ? (
            <Text style={{ color: "crimson", fontFamily: "Ciutadella-medium" }}>
              {comfrimPasswordError}
            </Text>
          ) : null}
          <HSInput
            placeholder="Comfrim Password"
            secureTextEntry={true}
            value={comfrimPassword}
            onChangeText={(e) => setComfrimPassword(e)}
          />
          {phoneError ? (
            <Text style={{ color: "crimson", fontFamily: "Ciutadella-medium" }}>
              {phoneError}
            </Text>
          ) : null}
          <HSInput
            placeholder="Phone Number"
            keyboardType="numeric"
            value={phone}
            onChangeText={(e) => setPhone(e)}
          />
        </View>
        <View>
          <CustomButton
            title="Register"
            onPress={() => {
              handleRegister();
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
