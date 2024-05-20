import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/Button";

const ComfirmForgetPassword = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <View style={styles.circle}></View>
        <Image
          style={{ position: "absolute", top: 100 }}
          source={require("../assets/Asset1.png")}
        />
        <Text style={styles.bold}>Check your Email</Text>
        <Text style={styles.text}>We have sent a password recover</Text>
        <Text style={styles.text}>instructions to your email.</Text>
        <View style={{ marginTop: 70, marginBottom: 16 }}>
          <CustomButton title="Open email app" />
        </View>
        <View>
          <Text style={styles.text}>Skip I’ll confirm later</Text>
        </View>
      </View>
      <View>
        <Text style={styles.text}>
          Didn’t receive the email? Check your spam filter,
        </Text>
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            lineHeight: 21.6,
            color: "crimson",
          }}
        >
          or try another email address
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "F4F4FA",
  },
  circle: {
    position: "relative",
    backgroundColor: "#2D2D2D",
    width: 292,
    height: 292,
    borderRadius: 146,
    opacity: 0.1,
  },
  bold: {
    marginVertical: 24,
    color: "#2D2D2D",
    fontSize: 28,
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    lineHeight: 21.6,
    color: "#2D2D2D",
    opacity: 0.5,
  },
});

export default ComfirmForgetPassword;
