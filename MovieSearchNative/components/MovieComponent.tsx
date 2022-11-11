import { View, Text, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import { Movie } from "../interfaces/Movie";
import { styles } from "../styles/MovieComponent";

interface Props {
  movie: Movie;
  navigation: any;
}

export default function MovieComponent(props: Props) {
  return (
    <View style={styles.movieContainer}>
      <TouchableWithoutFeedback
        onPress={() =>
          props.navigation.navigate("Details", {
            Series_Title: props.movie.Series_Title,
            IMDB_Rating: props.movie.IMDB_Rating,
            Released_Year: props.movie.Released_Year,
            Director: props.movie.Director,
            Genre: props.movie.Genre,
            Overview: props.movie.Overview,
            Poster_Link: props.movie.Poster_Link,
            Runtime: props.movie.Runtime,
            Star1: props.movie.Star1,
            Star2: props.movie.Star2,
            Star3: props.movie.Star3,
            Star4: props.movie.Star4,
          })
        }
      >
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
      </TouchableWithoutFeedback>
    </View>
  );
}
