import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { Movie } from "../interfaces/Movie";
import MovieComponent from "./MovieComponent";
import { useQuery, useReactiveVar } from "@apollo/client";
import {
  GET_ALL_MOVIES,
  GET_ALL_MOVIES_FILTER_BY_GENRE,
  GET_MOVIES_BY_TITLE,
  GET_MOVIES_BY_TITLE_ASC,
  GET_MOVIES_BY_TITLE_FILTER_BY_GENRE,
  GET_MOVIES_BY_TITLE_FILTER_BY_GENRE_ASC,
} from "../queries/getMovies";
import { PAGE_OPTIONS } from "../utils/enum";
import Pagination from "./Pagination";
import {
  selectedGenre,
  selectedSorting,
  titleSearchedFor,
} from "../utils/stateManagement";
import { styles } from "../styles/DisplayMovies";
import { Octicons } from "@expo/vector-icons";

export default function DisplayMovies() {
  const [currentPage, setCurrentPage] = useState(0);
  const movieList: Movie[] = [];
  const title = useReactiveVar(titleSearchedFor);
  const genre = useReactiveVar(selectedGenre);
  const sort = useReactiveVar(selectedSorting);

  useEffect(() => {
    setCurrentPage(0);
  }, [title, genre, sort]);

  function setQuery() {
    if (title && !genre) {
      if (sort === "ASC") {
        return GET_MOVIES_BY_TITLE_ASC;
      } else {
        return GET_MOVIES_BY_TITLE;
      }
    }
    if (!title && genre) {
      return GET_ALL_MOVIES_FILTER_BY_GENRE;
    }
    if (title && genre) {
      if (sort === "ASC") {
        return GET_MOVIES_BY_TITLE_FILTER_BY_GENRE_ASC;
      } else {
        return GET_MOVIES_BY_TITLE_FILTER_BY_GENRE;
      }
    } else {
      return GET_ALL_MOVIES;
    }
  }

  const { loading, error, data } = useQuery(setQuery(), {
    variables: {
      where: {
        Genre_CONTAINS: genre,
      },
      filterString: genre,
      searchString: title,
      options: {
        offset: currentPage * PAGE_OPTIONS.PAGE_SIZE,
        limit: PAGE_OPTIONS.PAGE_SIZE + 1,
        sort: {
          Series_Title: "DESC",
          IMDB_Rating: sort,
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
    if (title && !genre) {
      if (sort === "ASC") {
        data.findMovieByTitleASC.forEach((movie: Movie) => {
          movieList.push(movie);
        });
      } else {
        data.findMovieByTitleDESC.forEach((movie: Movie) => {
          movieList.push(movie);
        });
      }
    } else if (title && genre) {
      if (sort === "ASC") {
        data.findMovieByTitleWithGenreFilterASC.forEach((movie: Movie) => {
          movieList.push(movie);
        });
      } else {
        data.findMovieByTitleWithGenreFilterDESC.forEach((movie: Movie) => {
          movieList.push(movie);
        });
      }
    } else {
      data.movies.forEach((movie: Movie) => {
        movieList.push(movie);
      });
    }
  }

  if (movieList.length < 1) {
    return (
      <>
        <ScrollView style={styles.feedbackContainer}>
          <Text style={styles.feedbackText}>
            No movies found matching search '{titleSearchedFor()}'!
          </Text>
        </ScrollView>
        <View style={styles.pagination}>
        <Pagination listLength={movieList.length} 
                    currentPage={currentPage} 
                    setCurrentPage={setCurrentPage} />
        </View>
      </>
    );
  }

  return (
    <>
      <ScrollView>
        {movieList.map((movie: Movie, id) => {
          if (id !== PAGE_OPTIONS.PAGE_SIZE) {
            return <MovieComponent key={id} movie={movie} />;
          }
        })}
      </ScrollView>
      <View style={styles.pagination}>
        <Pagination listLength={movieList.length} 
                    currentPage={currentPage} 
                    setCurrentPage={setCurrentPage} 
        />
      </View>
    </>
  );
}
