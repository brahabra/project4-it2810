import { View, Text } from "react-native";
import React from "react";
import { Movie } from "../interfaces/Movie";
import MovieComponent from "./MovieComponent";

interface Props {
  movieList: Movie[];
}

export default function DisplayMovies(props: Props) {
  return (
    <View>
      {props.movieList.map((movie: Movie, id) => {
        return <MovieComponent key={id} movie={movie} />;
      })}
    </View>
  );
}
