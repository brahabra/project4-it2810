import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Movie } from "../interfaces/Movie";
import MovieComponent from "./MovieComponent";
import { useQuery, useReactiveVar } from "@apollo/client";
import { GET_ALL_MOVIES } from "../queries/getMovies";
import { PAGE_OPTIONS } from "../utils/enum";
import Pagination from "./Pagination";
import { titleSearchedFor } from "../utils/stateManagement";

export default function DisplayMovies() {
  const [currentPage, setCurrentPage] = useState(0);
  const movieList: Movie[] = [];
  const title = useReactiveVar(titleSearchedFor)

  useEffect(() => {
    setCurrentPage(0)
  }, [title])
  

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
      <View>
        <ActivityIndicator size="large" />
        <Text style={styles.feedbackText}>Loading...</Text>
      </View>
    );
  if (error)
    return (
      <View>
        <Text style={styles.feedbackText}>Error! ${error.message}</Text>
      </View>
    );

  if (data) {
    data.movies.forEach((movie: Movie) => {
      movieList.push(movie);
    });
  }

  return (
    <>
      <ScrollView style={styles.movies}>
        {movieList.map((movie: Movie, id) => {
          return <MovieComponent key={id} movie={movie} />;
        })}
      </ScrollView>
      <View style={styles.pagination}>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  movies: {

  },
  pagination: {
    marginTop: 10
  },
  feedbackText: {
    color: "white",
    textAlign: "center",
  },
});
