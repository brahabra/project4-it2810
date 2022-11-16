import { View, Text, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import { Movie } from "../interfaces/Movie";
import { styles } from "../styles/MovieComponent";
import { useNavigation } from "@react-navigation/native";

interface Props {
  movie: Movie;
}

export default function MovieComponent(props: Props) {
  const navigation = useNavigation();

  return (
    <View style={styles.movieContainer}>
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate("Details", {
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
