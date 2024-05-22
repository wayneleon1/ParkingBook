import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/HSbutton";
import { globalStyles } from "../styles/global";

const ComfirmForgetPassword = () => {
  return (
    <View style={styles.container}>
      <View>
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
          <View style={{ marginVertical: 24 }}>
            <Text style={globalStyles.titleText}>Check your Email</Text>
          </View>
          <Text style={globalStyles.paragraph}>
            We have sent a password recover
          </Text>
          <Text style={globalStyles.paragraph}>
            instructions to your email.
          </Text>
        </View>
        <View style={{ marginTop: 60, marginBottom: 16 }}>
          <CustomButton
            title="Open email app"
            textColor="#FFFFFF"
            buttonColor="#130F26"
          />
        </View>
        <View>
          <Text style={globalStyles.paragraph}>Skip I’ll confirm later</Text>
        </View>
      </View>
      <View>
        <Text style={globalStyles.paragraph}>
          Didn’t receive the email? Check your spam filter,
        </Text>
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            lineHeight: 21.6,
            color: "crimson",
            fontFamily: "Ciutadella-regular",
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
  },
  circle: {
    position: "relative",
    backgroundColor: "#2D2D2D",
    width: 292,
    height: 292,
    borderRadius: 146,
    opacity: 0.1,
  },
});

export default ComfirmForgetPassword;
