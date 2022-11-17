import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "#212F3D",
    flex: 1,
  },
  displaySearches: {
    alignItems: "center",
    textAlign: "center",
  },
  searchBar: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },
  filterAndSortContainer: {
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
  },
  backButton: {
    display: "flex",
    marginLeft: 20,
    marginBottom: 20,
  },
  historyIcon: {
    marginTop: "auto",
    marginBottom: "auto",
    marginRight: 10
  }
});