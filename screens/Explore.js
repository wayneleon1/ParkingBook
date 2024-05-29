import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";
import SearchInput from "../components/SearchInput";
import parking from "../data/parking.json";

const Explore = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#130F26" />
      <View>
        <Text style={globalStyles.subTitleText}>Explore</Text>
      </View>
      <View>
        <SearchInput bgColor="#EAEAF3" />
      </View>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {options.map((item, index) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: 20,
                }}
              >
                <View
                  key={index}
                  style={
                    index == 0
                      ? {
                          backgroundColor: "#081024",
                          padding: 20,
                          borderRadius: 15,
                        }
                      : {}
                  }
                >
                  <Text
                    style={{
                      fontSize: 18,
                      lineHeight: 19.2,
                      color: index == 0 ? "white" : "#2D2D2D",
                      opacity: index == 0 ? 1 : 0.4,
                    }}
                  >
                    {item}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 20 }}
          data={parking}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.parkingCard}>
              <View style={{ width: "40%" }}>
                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={styles.image}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  padding: 5,
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#FFF3F3",
                    paddingVertical: 6,
                    width: 60,
                    borderRadius: 15,
                    alignItems: "center",
                    position: "absolute",
                    right: 0,
                  }}
                >
                  <Text
                    style={{
                      color: "#F43939",
                      fontSize: 12,
                      fontFamily: "Ciutadella-regular",
                      lineHeight: 14.4,
                    }}
                  >
                    {item.time_published}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{ fontSize: 18, fontFamily: "Ciutadella-medium" }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      marginTop: 5,
                      fontSize: 18,
                      lineHeight: 21.6,
                      color: "#2D2D2D",
                      opacity: 0.5,
                      fontFamily: "Ciutadella-regular",
                    }}
                  >
                    {item.street}
                  </Text>
                </View>
                <View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                      style={{
                        color: "#F43939",
                        fontSize: 20,
                        fontFamily: "Ciutadella-Bold",
                        lineHeight: 24,
                      }}
                    >
                      {item.price}
                    </Text>
                    <Text
                      style={{
                        color: "#F43939",
                        fontSize: 12,
                        fontFamily: "Ciutadella-regular",
                        lineHeight: 14.4,
                      }}
                    >
                      /hour
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4FA",
    flexDirection: "column",
    gap: 20,
    paddingHorizontal: 32,
    paddingTop: 50,
    paddingBottom: 20,
  },
  parkingCard: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
    borderRadius: 15,
    height: 126,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    borderRadius: 15,
  },
});

const options = ["Nearst", "Most Popular", "Most Wanted", "Secured"];

export default Explore;
