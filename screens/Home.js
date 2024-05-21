import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CustomButton from "../components/Button";
import { globalStyles } from "../styles/global";

const Home = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ position: "absolute", right: 0 }}>
        <Text style={globalStyles.paragraph}>Skip</Text>
      </TouchableOpacity>
      <View>
        <Image
          style={{ position: "absolute", top: 100 }}
          source={require("../assets/car.png")}
        />
      </View>
      <Text style={globalStyles.subTitleText}>Welcome</Text>
      <Text style={globalStyles.paragraph}>
        Find a best possible way to park
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
