import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React, { useState } from "react";
import DisplayMovies from "./DisplayMovies";
import { Movie } from "../interfaces/Movie";
import SearchBar from "./SearchBar";
import { Octicons } from "@expo/vector-icons";
import Pagination from "./Pagination";
import { useQuery } from "@apollo/client";
import { PAGE_OPTIONS } from "../enum";
import { GET_ALL_MOVIES } from "../queries/getMovies";
import FilterByGenre from "./FilterByGenre";
import SortByAttribute from "./SortByAttribute";

export default function MovieSearch() {
  const [showSearches, setShowSearches] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const movieList: Movie[] = [];

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
      <View style={styles.container}>
        <Text>"Loading..."</Text>
      </View>
    );
  if (error)
    return (
      <View style={styles.container}>
        <Text>`Error! ${error.message}`</Text>
      </View>
    );

  if (data) {
    data.movies.forEach((movie: Movie) => {
      movieList.push(movie);
    });
  }

  // const fakeMovie: Movie = {
  //   Series_Title: "Kill Buljo",
  //   Certificate: "A",
  //   Director: "Dirketør Direktørsen",
  //   Genre: "Drama",
  //   Gross: "100 000",
  //   Meta_score: "5.8",
  //   No_of_Votes: "200 000",
  //   Overview:
  //     "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
  //   Poster_Link:
  //     "https://m.media-amazon.com/images/M/MV5BNzFjOTY0NGEtMzljYy00NmI5LTg0OGMtYjQxM2Y4ZDAwMmVkXkEyXkFqcGdeQXVyMjI4NTYxMTA@._V1_.jpg",
  //   Runtime: "128",
  //   Star1: "Emil Gillingham Aukner",
  //   Star2: "Brage Hagemann Brataas",
  //   Star3: "Tor Madsen",
  //   Star4: "Mats Klevstad",
  //   IMDB_Rating: "9.9",
  //   Released_Year: "2010",
  // };

  //movieList.push(fakeMovie);

  const onPressHistory = () => {
    setShowSearches(!showSearches);
  };

  return (
    <SafeAreaView style={styles.container}>
      {showSearches ? (
        <Octicons
          onPress={onPressHistory}
          name="history"
          size={35}
          color="white"
        />
      ) : (
        <>
          <View style={styles.searchBar}>
            <Octicons
              onPress={onPressHistory}
              name="history"
              size={35}
              color="white"
            />
            <SearchBar />
          </View>
          <View style={styles.filterAndSortContainer}>
            <FilterByGenre />
            <SortByAttribute />
          </View>
          <ScrollView style={styles.movies}>
            <DisplayMovies movieList={movieList} />
          </ScrollView>
          <View style={styles.pagination}>
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {},
  searchBar: {
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
  },
  movies: {
    marginTop: 10,
  },
  pagination: {
    marginTop: 5,
  },
  filterAndSortContainer: {
    flexDirection: "row"
  }
});
