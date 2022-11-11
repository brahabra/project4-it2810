import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: "row",
    alignContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  leftArrow: {
    marginRight: 50,
  },
  leftArrowDisabled: {
    marginRight: 50,
    opacity: 0.1,
  },
  rightArrow: {
    marginLeft: 50,
  },
  rightArrowDisabled: {
    marginLeft: 50,
    opacity: 0.1,
  },
  pageText: {
    fontSize: 25,
    width: 45,
    color: "white",
    textAlign: "center",
  },
});