import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  searchesContainer: {
    marginVertical: 20,
    marginHorizontal: "auto",
    justifyContent: "center",
    flexDirection: "row",
  },
  displaySearchesContainer: { 
    backgroundColor: "#212F3D",
    flex: 1
  },
  displaySearchesHeader: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
    color: "white",
  },
  searchIcon: {
    marginRight: 10,
  },
  searchesText: {
    color: "white",
  },
});