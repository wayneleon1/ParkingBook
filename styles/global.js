import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 50,
    backgroundColor: "#EAEAF3",
    // backgroundColor: "#F4F4FA",
  },
  titleText: {
    color: "#2D2D2D",
    fontSize: 28,
    lineHeight: 33.6,
    fontFamily: "Ciutadella-Bold",
  },
  subTitleText: {
    color: "#2D2D2D",
    textAlign: "center",
    fontSize: 24,
    lineHeight: 28.8,
    fontFamily: "Ciutadella-medium",
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
    lineHeight: 21.6,
    color: "#2D2D2D",
    opacity: 0.5,
    fontFamily: "Ciutadella-regular",
  },
});
