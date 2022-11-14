import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  feedbackSearchesContainer: {
    backgroundColor:"#212F3D", 
    flex: 1,
  },
  errorSearchesFeedback: {
    alignItems: "center",
    marginTop: "auto",
    marginBottom: "auto"
  },
  loadingSearchesFeedback: {
    alignItems: "center",
    marginTop: "auto",
    marginBottom: "auto"
  },
  feedbackSearchesText: {
    color: "white",
    marginTop: 20
  },
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