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
            clickedSeriesTitle: props.movie.Series_Title,
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
