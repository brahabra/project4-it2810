import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
  useQuery,
} from "@apollo/client";
import React, { useState } from "react";
import {
  AppRegistry,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import FilterByGenre from "./components/FilterByGenre";
import MovieSearch from "./components/MovieSearch";
import SearchBar from "./components/SearchBar";
import SortByAttribute from "./components/SortByAttribute";
import { Octicons, MaterialCommunityIcons } from "@expo/vector-icons";
import DisplaySearches from "./components/DisplaySearches";
import DisplayMovies from "./components/DisplayMovies";

const client = new ApolloClient({
  uri: "http://it2810-03.idi.ntnu.no:4000",
  cache: new InMemoryCache(),
});

export default function App() {
  const [showSearches, setShowSearches] = useState(false);

  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={styles.container}>
        {showSearches ? (
          <>
            <MaterialCommunityIcons
              style={styles.backButton}
              onPress={() => setShowSearches(!showSearches)}
              name="arrow-left-top"
              size={35}
              color="white"
            />
            <View style={styles.displaySearches}>
            <DisplaySearches setShowSearches={setShowSearches} />
            </View>
          </>
        ) : (
          <>
            <View style={styles.searchBar}>
              <Octicons
                onPress={() => setShowSearches(!showSearches)}
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

            <DisplayMovies />
          </>
        )}
      </SafeAreaView>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212F3D",
    flex: 1,
  },
  displaySearches: {
    alignItems: "center",
    textAlign: "center"
  },
  searchBar: {
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
  },
  filterAndSortContainer: {
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
  },
  backButton: {
    display: "flex",
    marginBottom: 20,
  },
});
