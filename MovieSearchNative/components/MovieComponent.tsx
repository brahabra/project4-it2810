import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";
import { Movie } from "../interfaces/Movie";

interface Props {
  movie: Movie;
}

export default function MovieComponent(props: Props) {
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    setShowMore(!showMore);
  }

  return (
    <View style={styles.movieContainer} onTouchStart={handleClick}>
      {showMore ? (
        <View>
          <Text style={styles.shortMovieHeader}>
            {props.movie.Series_Title} ({props.movie.Released_Year}){" "}
            {props.movie.IMDB_Rating} &#9733;
          </Text>
          <Text>
            <Text style={styles.movieText}>Description: </Text>
            {props.movie.Overview}
          </Text>
        </View>
      ) : (
        <View style={styles.extendedMovieContainer}>
          <Image
            style={styles.picture}
            source={{
              uri: props.movie.Poster_Link,
            }}
          />
          <View style={styles.extendedMovieText}>
            <Text style={styles.extendedMovieHeader}>
              {props.movie.Series_Title} ({props.movie.Released_Year}){" "}
              {props.movie.IMDB_Rating} &#9733;
            </Text>
            <Text>
              <Text style={styles.movieText}>Description: </Text>
              {props.movie.Overview}
            </Text>
            <Text>
              <Text style={styles.movieText}>Featuring:</Text>{" "}
              {props.movie.Star1}, {props.movie.Star2}, {props.movie.Star3},{" "}
              {props.movie.Star4}
            </Text>
            <Text>
              <Text style={styles.movieText}>Genre:</Text> {props.movie.Genre}
            </Text>
            <Text>
              <Text style={styles.movieText}>Runtime: </Text>
              {props.movie.Runtime} min
            </Text>
            <Text>
              <Text style={styles.movieText}>Directed by:</Text>{" "}
              {props.movie.Director}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  movieContainer: {
    backgroundColor: "white",
    padding: 15,
    marginTop: 15,
    marginLeft: 8,
    marginRight: 8,
    borderRadius: 20,
  },
  picture: {
    width: 100,
    height: 150,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
  },
  shortMovieHeader: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  extendedMovieHeader: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  extendedMovieText: {
    marginLeft: 5,
  },
  extendedMovieContainer: {
    //flexDirection: "row"
  },
  movieText: {
    fontWeight: "bold",
  },
});
