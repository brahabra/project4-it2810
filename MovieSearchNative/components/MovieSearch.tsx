import { View, Text } from "react-native";
import React from "react";
import DisplayMovies from "./DisplayMovies";
import { Movie } from "../interfaces/Movie";
import MovieComponent from "./MovieComponent";
import SearchBar from "./SearchBar";

export default function MovieSearch() {
  const movieList: Movie[] = [];
  const fakeMovie: Movie = {
    Series_Title: "Kill Buljo", Certificate: "A",
    Director: "Dirketør Direktørsen",
    Genre: "Drama",
    Gross: "100 000",
    Meta_score: "5.8",
    No_of_Votes: "200 000",
    Overview: "Kill Buljo yo yo yo",
    Poster_Link: "https://m.media-amazon.com/images/M/MV5BNzFjOTY0NGEtMzljYy00NmI5LTg0OGMtYjQxM2Y4ZDAwMmVkXkEyXkFqcGdeQXVyMjI4NTYxMTA@._V1_.jpg",
    Runtime: "128",
    Star1: "Emil Gillingham Aukner",
    Star2: "Brage Hagemann Brataas",
    Star3: "Tor Madsen",
    Star4: "Mats Klevstad",
    IMDB_Rating: "9.9",
    Released_Year: "2010"
  }

  const fakeMovie2: Movie = {
    Series_Title: "Rottefilmen 4", Certificate: "A",
    Director: "Dirketør Direktørsen",
    Genre: "Drama",
    Gross: "100 000",
    Meta_score: "5.8",
    No_of_Votes: "200 000",
    Overview: "Kill Buljo yo yo yo",
    Poster_Link: "https://lumiere-a.akamaihd.net/v1/images/p_ratatouille_19736_0814231f.jpeg",
    Runtime: "128",
    Star1: "Emil Gillingham Aukner",
    Star2: "Brage Hagemann Brataas",
    Star3: "Tor Madsen",
    Star4: "Mats Klevstad",
    IMDB_Rating: "9.9",
    Released_Year: "2010"
  }

  movieList.push(fakeMovie);
  movieList.push(fakeMovie2);

  return (
    <View>
      <SearchBar/>
      <DisplayMovies movieList={movieList} />
    </View>
  );
}
