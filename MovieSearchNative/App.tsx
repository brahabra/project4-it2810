import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
  useQuery,
} from "@apollo/client";
import React, { useState } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
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
