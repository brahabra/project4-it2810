import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { IMovie } from "../interfaces/IMovie";
import { styles } from "../styles/Movie";
import { useNavigation } from "@react-navigation/native";

interface Props {
  movie: IMovie;
}
// Each movie loaded in DisplayMovies. This component shows a limited view of the movie.
export default function Movie(props: Props) {
  const navigation = useNavigation();

  // Returns the component that display "small" view of a movie.
  return (
    <View style={styles.movieContainer}>
      {/* When the movie is clicked, load a detailed view of the movie with more data shwon*/}
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
