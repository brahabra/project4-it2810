import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Movie } from "../interfaces/Movie";
import MovieComponent from "./MovieComponent";
import { useQuery, useReactiveVar } from "@apollo/client";
import { GET_ALL_MOVIES } from "../queries/getMovies";
import { PAGE_OPTIONS } from "../utils/enum";
import Pagination from "./Pagination";
import { selectedGenre, selectedSorting, titleSearchedFor } from "../utils/stateManagement";
import { styles } from "../styles/DisplayMovies";
import { Octicons } from '@expo/vector-icons';

interface Props {
  navigation: any
}

export default function DisplayMovies(props: Props) {
  const [currentPage, setCurrentPage] = useState(0);
  const movieList: Movie[] = [];
  const title = useReactiveVar(titleSearchedFor)
  const genre = useReactiveVar(selectedGenre)
  const sort = useReactiveVar(selectedSorting)

  useEffect(() => {
    setCurrentPage(0)
  }, [title, genre, sort])
  

  const { loading, error, data } = useQuery(GET_ALL_MOVIES, {
    variables: {
      options: {
        offset: currentPage * PAGE_OPTIONS.PAGE_SIZE,
        limit: PAGE_OPTIONS.PAGE_SIZE,
        sort: {
          IMDB_Rating: "DESC",
        },
      },
    },
  });

  if (loading)
    return (
      <View style={styles.feedbackContainer}>
        <View style={styles.loadingFeedback}>
          <ActivityIndicator size="large" />
          <Text style={styles.feedbackText}>Loading movies...</Text>
        </View>
      </View>
    );
    
  if (error)
    return (
      <View style={styles.feedbackContainer}>
        <View style={styles.errorFeedback}>
          <Octicons name="alert" size={40} color="white" />
          <Text style={styles.feedbackText}>Error! ${error.message}</Text>
        </View>
      </View>
    );

  if (data) {
    data.movies.forEach((movie: Movie) => {
      movieList.push(movie);
    });
  }

  return (
    <>
      <ScrollView>
        {movieList.map((movie: Movie, id) => {
          return <MovieComponent navigation={props.navigation} key={id} movie={movie} />;
        })}
      </ScrollView>
      <View style={styles.pagination}>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </View>
    </>
  );
}