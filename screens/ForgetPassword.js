import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";
import { useNavigation } from "@react-navigation/native";
import HSInput from "../components/HSInput";
import CustomButton from "../components/HSbutton";

const ForgetPassword = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 32,
        backgroundColor: "#F4F4FA",
        paddingTop: 60,
        paddingBottom: 40,
        justifyContent: "space-between",
      }}
    >
      <View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              backgroundColor: "#EAEAF3",
              width: 44,
              height: 44,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="left" size={24} color="#2D2D2D" />
          </Pressable>
          <Text
            style={{
              flex: 1,
              textAlign: "center",
              fontSize: 24,
              lineHeight: 28.8,
              fontFamily: "Ciutadella-medium",
            }}
          >
            Forgot Password
          </Text>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={globalStyles.titleText}>Reset Password</Text>
          <Text style={styles.paragraph}>
            Enter the email associated with your account and we’ll send an email
            with instructions to reset your password.
          </Text>
        </View>
        <View style={{ marginTop: 30, gap: 16 }}>
          <Text style={styles.paragraph}>Email address</Text>
          <HSInput placeholder="Email" />
        </View>
      </View>
      <View>
        <CustomButton
          title="Send"
          onPress={() => {
            navigation.navigate("ComfirmForgetPassword");
          }}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  paragraph: {
    fontSize: 18,
    lineHeight: 19.2,
    color: "#2D2D2D",
    opacity: 0.7,
    fontFamily: "Ciutadella-regular",
    marginTop: 10,
  },
});
export default ForgetPassword;
