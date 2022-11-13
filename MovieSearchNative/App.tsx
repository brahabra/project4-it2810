import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import FilterByGenre from "./components/FilterByGenre";
import SortByAttribute from "./components/SortByAttribute";
import { Octicons, MaterialCommunityIcons } from "@expo/vector-icons";
import DisplaySearches from "./components/DisplaySearches";
import DisplayMovies from "./components/DisplayMovies";
import { styles } from "./styles/App";
import SearchBarComponent from "./components/SearchBarComponent";

const client = new ApolloClient({
  uri: "http://it2810-03.idi.ntnu.no:4000",
  cache: new InMemoryCache(),
});

export default function App() {
  const [showSearches, setShowSearches] = useState(false);

  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={styles.appContainer}>
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
              style={styles.searchIcon}
                onPress={() => setShowSearches(!showSearches)}
                name="history"
                size={35}
                color="white"
              />
              <SearchBarComponent />
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