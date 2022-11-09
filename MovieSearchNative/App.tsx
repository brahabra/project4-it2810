import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
  useQuery,
} from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import Movies from "./components/Movies";
import { PAGE_OPTIONS } from "./enum";
import { IExtendedMovie } from "./interfaces/IMovie";
import { GET_ALL_MOVIES } from "./queries/getMovies";
import MovieSearch from "./components/MovieSearch";

const client = new ApolloClient({
  uri: "http://it2810-03.idi.ntnu.no:4000",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <MovieSearch />
      </View>
      //<Movies />
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212F3D",
    alignItems: "center",
    justifyContent: "center",
  },
});

