import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  movieContainer: {
    backgroundColor: "white",
    padding: 15,
    marginTop: 15,
    marginLeft: 8,
    marginRight: 8,
    borderRadius: 20,
  },
  shortMovieHeader: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 5,
  },
  extendedMovieContainer: {
    flex: 2,
    marginHorizontal: "auto",
    flexDirection: "row",
  },
  picture: {
    width: 100,
    height: 150,
    marginBottom: 10,
  },
  extendedMovieText: {
    marginLeft: 5,
    marginRight: 90,
  },
  extendedMovieHeader: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 5,
  },
  movieText: {
    fontWeight: "bold",
  },
});