import {
  View,
  Text,
  Image,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { styles } from "../styles/ExtendedMovie";
import { useQuery } from "@apollo/client";
import { GET_CLICKED_MOVIE } from "../queries/getMovies";
import { IMovie } from "../interfaces/IMovie";
import { Octicons } from "@expo/vector-icons";
import { toHoursAndMinutes } from "../utils/toHoursAndMinutes";

export default function ExtendedMovie({ route }: { route: any }) {
  const { clickedSeriesTitle } = route.params;

  // Initializes an empty movie
  let movie: IMovie = {
    Series_Title: "",
    IMDB_Rating: "",
    Released_Year: "",
    Certificate: "",
    Director: "",
    Genre: "",
    Gross: "",
    Meta_score: "",
    No_of_Votes: "",
    Overview: "",
    Poster_Link: "",
    Runtime: "",
    Star1: "",
    Star2: "",
    Star3: "",
    Star4: "",
  };

  // Get all the data for the clicked movie
  const { loading, error, data } = useQuery(GET_CLICKED_MOVIE, {
    variables: {
      where: {
        Series_Title: clickedSeriesTitle,
      },
    },
  });

  // Placeholder while loading the page.
  if (loading)
    return (
      <View style={styles.feedbackContainer}>
        <View style={styles.loadingFeedback}>
          <ActivityIndicator size="large" />
          <Text style={styles.feedbackText}>
            Loading "{clickedSeriesTitle}"...
          </Text>
        </View>
      </View>
    );

  // Displays error message if query fails.
  if (error)
    return (
      <View style={styles.feedbackContainer}>
        <View style={styles.errorFeedback}>
          <Octicons name="alert" size={40} color="white" />
          <Text style={styles.feedbackText}>Error! ${error.message}</Text>
        </View>
      </View>
    );

  // Sets the movie initialized at the top to be the clicked movie
  if (data) {
    movie = data.movies[0];
  }

  // Returns view of the full movie view (extended movie).
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.movieContainer}>
        <Image
          style={styles.picture}
          source={{
            uri: movie.Poster_Link,
          }}
        />
        <View>
          <Text style={styles.extendedMovieHeader}>
            {movie.Series_Title} {movie.Released_Year} {movie.IMDB_Rating}{" "}
            &#9733;
          </Text>

          <Text style={styles.movieParagraph}>
            <Text style={styles.movieParagraphType}>Description: </Text>
            {movie.Overview}
          </Text>
          <Text style={styles.movieParagraph}>
            <Text style={styles.movieParagraphType}>Featuring:</Text>{" "}
            {movie.Star1}, {movie.Star2}, {movie.Star3} and {""}
            {movie.Star4}
          </Text>
          <Text style={styles.movieParagraph}>
            <Text style={styles.movieParagraphType}>Genre:</Text> {movie.Genre}
          </Text>
          <Text style={styles.movieParagraph}>
            <Text style={styles.movieParagraphType}>Runtime: </Text>
            {movie.Runtime} ({toHoursAndMinutes(parseInt(movie.Runtime))})
          </Text>
          <Text style={styles.movieParagraph}>
            <Text style={styles.movieParagraphType}>Directed by:</Text>{" "}
            {movie.Director}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
