import React from "react";
import { View, Text } from "react-native";

const ParkingDetails = ({ route }) => {
  const routes = route.params;
  return (
    <View>
      <Text>{routes.title}</Text>
    </View>
  );
};

export default ParkingDetails;
