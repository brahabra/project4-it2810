import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#212F3D",
    flex: 1
  },
  movieContainer: {
    backgroundColor: "white",
    padding: 15,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 20,
  },
  picture: {
    width: 200,
    height: 300,
    marginLeft: "auto",
    marginRight: "auto"
  },
  extendedMovieHeader: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 5,
    marginTop: 10
  },
  movieParagraph: {
    fontSize: 17,
    paddingBottom: 10
  },
  movieParagraphType: {
    fontWeight: "bold",
  },
  feedbackText: {
    color: "white",
    textAlign: "center",
    padding: 20,
  },
  feedbackContainer: {
    backgroundColor:"#212F3D", 
    flex: 1
  },
  errorFeedback: {
    alignItems:  "center",
    marginTop: "auto",
    marginBottom: "auto"
  },
  loadingFeedback: {
    alignItems: "center",
    marginTop: "auto",
    marginBottom: "auto"
  }
});