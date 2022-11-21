import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { GET_SEARCHES } from "../queries/getSearches";
import { useQuery, useReactiveVar } from "@apollo/client";
import { PAGE_OPTIONS } from "../utils/enum";
import { selectedSorting, titleSearchedFor } from "../utils/stateManagement";
import { Octicons } from "@expo/vector-icons";
import { styles } from "../styles/DisplaySearches";
import { useNavigation } from "@react-navigation/native";
import Pagination from "./Pagination";
import { ISearch } from "../interfaces/ISearch";
import SortByAttribute from "./SortByAttribute";
import SearchComponent from "./SearchComponent";

/**
 * Component that displays the search results
 */
export default function DisplaySearches() {
  const [currentPage, setCurrentPage] = useState(0);
  const sort = useReactiveVar(selectedSorting);
  const navigation = useNavigation();
  const searchList: ISearch[] = [];

  //Query for getting search history.
  const { data, loading, error } = useQuery(GET_SEARCHES, {
    variables: {
      options: {
        offset: currentPage * PAGE_OPTIONS.PAGE_SIZE,
        limit: PAGE_OPTIONS.SEARCHES_SIZE + 1,
        sort: {
          created: sort,
        },
      },
    },
  });

  // Rerender the page when the user changes sort value
  useEffect(() => {
    setCurrentPage(0);
  }, [sort]);

  // When a search word is clicked, load the movies related to the search. Navigate the user back to home
  function handleSearchWordClick(clickedSearchWord: string) {
    titleSearchedFor(clickedSearchWord);
    navigation.navigate("Home");
  }

  // Placeholder while loading the page.
  if (loading)
    return (
      <View style={styles.feedbackSearchesContainer}>
        <View style={styles.loadingSearchesFeedback}>
          <ActivityIndicator size="large" />
          <Text style={styles.feedbackSearchesText}>Loading searches ...</Text>
        </View>
      </View>
    );

  // Displays error message if query fails.
  if (error)
    return (
      <View style={styles.feedbackSearchesContainer}>
        <View style={styles.errorSearchesFeedback}>
          <Octicons name="alert" size={40} color="white" />
          <Text style={styles.feedbackSearchesText}>
            Could not load searches ...
          </Text>
        </View>
      </View>
    );

  // If data is returned, puts each search element from query into searchList.
  if (data) {
    data.searches.forEach((search: ISearch) => {
      searchList.push(search);
    });
  }

  // Returns view with text "no searches found" if searchList is empty.
  if (searchList.length < 1) {
    return (
      <>
        <View style={styles.displaySearchesContainer}>
          <Text style={styles.displaySearchesHeader}>Searches</Text>
          {/* If we have data, show the data. If not, show feedback to the user */}
          <Text>No searches found!</Text>
        </View>
        <View style={styles.pagination}>
          <Pagination
            listLength={searchList.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </View>
      </>
    );
  }
  // Returns view of the search history.
  return (
    <View style={styles.displaySearchesContainer}>
      <View>
        <Text style={styles.displaySearchesHeader}>
          Showing most recent searches
        </Text>
        <View style={styles.sort}>
          <SortByAttribute />
        </View>
        {/* If we have data, show the data. If not, show feedback to the user */}
        {searchList.map((search: ISearch, id) => {
          if (id !== PAGE_OPTIONS.PAGE_SIZE) {
            return (
              <SearchComponent
                key={id}
                search={search}
                handleSearchWordClick={handleSearchWordClick}
              />
            );
          }
        })}
      </View>
      <View style={styles.pagination}>
        {/* Adds pagination navigation to search page */}
        <Pagination
          listLength={searchList.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </View>
    </View>
  );
}
