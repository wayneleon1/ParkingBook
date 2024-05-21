import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CustomButton from "../components/Button";
import { globalStyles } from "../styles/global";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";

const Home = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ position: "absolute", right: 0 }}>
        <Text style={globalStyles.paragraph}>Skip</Text>
      </TouchableOpacity>
      <View>
        <Image
          style={{ marginTop: 100 }}
          source={require("../assets/car.png")}
        />
      </View>

      <Text style={globalStyles.subTitleText}>Welcome</Text>
      <Text style={globalStyles.paragraph}>
        Find a best possible way to park
      </Text>

      <View>
        <View>
          <CustomButton
            title="Login with Email"
            buttonColor="#2D2D2D"
            textColor="white"
            icon={<FontAwesome name="envelope" size={24} color="white" />}
          />
        </View>
        <View>
          <CustomButton
            title="Login with Phone"
            buttonColor="white"
            textColor="#2D2D2D"
            icon={<Ionicons name="call" size={24} color="#2D2D2D" />}
          />
        </View>
        <View>
          <Text style={globalStyles.paragraph}>
            Don’t have an account? Sign Up
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
  },
});
