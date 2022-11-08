import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Movie } from "../interfaces/Movie";
import { red } from "@material-ui/core/colors";

interface Props {
  movie: Movie;
}

export default function MovieComponent(props: Props) {
  const [showMore, setShowMore] = useState(false);

  const handleClickOutside = () => {
    setShowMore(false);
  }

  function showExtendedInfo() {
    setShowMore(!showMore);
  }

  return (
    <View style={styles.movieContainer} onTouchStart={showExtendedInfo}>
      {!showMore ? (
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
              {props.movie.Star1}, {props.movie.Star2}, {props.movie.Star3} and {""}
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
