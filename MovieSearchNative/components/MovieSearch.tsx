import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import DisplayMovies from "./DisplayMovies";
import { Movie } from "../interfaces/Movie";
import SearchBar from "./SearchBar";
import { FontAwesome5 } from "@expo/vector-icons";
import { Row } from "react-bootstrap";

export default function MovieSearch() {
  const movieList: Movie[] = [];
  const fakeMovie: Movie = {
    Series_Title: "Kill Buljo",
    Certificate: "A",
    Director: "Dirketør Direktørsen",
    Genre: "Drama",
    Gross: "100 000",
    Meta_score: "5.8",
    No_of_Votes: "200 000",
    Overview:
      "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    Poster_Link:
      "https://m.media-amazon.com/images/M/MV5BNzFjOTY0NGEtMzljYy00NmI5LTg0OGMtYjQxM2Y4ZDAwMmVkXkEyXkFqcGdeQXVyMjI4NTYxMTA@._V1_.jpg",
    Runtime: "128",
    Star1: "Emil Gillingham Aukner",
    Star2: "Brage Hagemann Brataas",
    Star3: "Tor Madsen",
    Star4: "Mats Klevstad",
    IMDB_Rating: "9.9",
    Released_Year: "2010",
  };

  const fakeMovie2: Movie = {
    Series_Title: "Rottefilmen 4",
    Certificate: "A",
    Director: "Dirketør Direktørsen",
    Genre: "Drama",
    Gross: "100 000",
    Meta_score: "5.8",
    No_of_Votes: "200 000",
    Overview:
      " Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    Poster_Link:
      "https://lumiere-a.akamaihd.net/v1/images/p_ratatouille_19736_0814231f.jpeg",
    Runtime: "128",
    Star1: "Emil Gillingham Aukner",
    Star2: "Brage Hagemann Brataas",
    Star3: "Tor Madsen",
    Star4: "Mats Klevstad",
    IMDB_Rating: "9.9",
    Released_Year: "2010",
  };

  movieList.push(fakeMovie);
  movieList.push(fakeMovie2);
  movieList.push(fakeMovie);
  movieList.push(fakeMovie2);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <FontAwesome5
          style={styles.historyIcon}
          name="history"
          size={35}
          color="white"
        />
        <SearchBar />
      </View>
      <ScrollView  style={styles.movies} >
        <DisplayMovies movieList={movieList} />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {},
  historyIcon: {
    backgroundColor: "#4c3c43",
  },
  searchBar: {
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
  },
  movies: {
    marginTop: 10
  }
});
