import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { Movie } from "../interfaces/Movie";
import { styles } from "../styles/MovieComponent";

interface Props {
  movie: Movie;
}

export default function MovieComponent(props: Props) {
  const [showMore, setShowMore] = useState(false);

  // TODO: 
  const handleClickOutside = () => {
    setShowMore(false);
  };

  return (
    <View style={styles.movieContainer}>
      <TouchableWithoutFeedback onPress={() => setShowMore(!showMore)}>
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
                {props.movie.Star1}, {props.movie.Star2}, {props.movie.Star3}{" "}
                and {""}
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
      </TouchableWithoutFeedback>
    </View>
  );
}