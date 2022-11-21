import {
  View,
  Text,
  ActivityIndicator
} from "react-native";
import React, { useEffect, useState } from "react";
import { GET_SEARCHES } from "../queries/getSearches";
import { useQuery, useReactiveVar } from "@apollo/client";
import { PAGE_OPTIONS } from "../utils/enum";
import { selectedSorting, titleSearchedFor } from "../utils/stateManagement";
import { Octicons } from "@expo/vector-icons";
import { styles } from "../styles/DisplaySearches";
import { useNavigation } from "@react-navigation/native";
import Pagination from "./Pagination";
import { Search } from "../interfaces/Search";
import SortByAttribute from "./SortByAttribute";
import SearchComponent from "./SearchComponent";

export default function DisplaySearches() {
  const [currentPage, setCurrentPage] = useState(0);
  const sort = useReactiveVar(selectedSorting);
  const navigation = useNavigation();
  const searchList: Search[] = [];

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

  useEffect(() => {
    setCurrentPage(0);
  }, [sort]);

  function handleSearchWordClick(clickedSearchWord: string) {
    titleSearchedFor(clickedSearchWord);
    navigation.navigate("Home");
  }

  if (loading)
    return (
      <View style={styles.feedbackSearchesContainer}>
        <View style={styles.loadingSearchesFeedback}>
          <ActivityIndicator size="large" />
          <Text style={styles.feedbackSearchesText}>Loading searches ...</Text>
        </View>
      </View>
    );

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

  if (data) {
    data.searches.forEach((search: Search) => {
      searchList.push(search);
    });
  }

  if (searchList.length < 1) {
    return (
      <>
        <View style={styles.displaySearchesContainer}>
          <Text style={styles.displaySearchesHeader}>
            Searches
          </Text>
          {/*If we have data, show the data. If not, show feedback to the user */}
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

  return (
    <View style={styles.displaySearchesContainer}>
      <View>
        <Text style={styles.displaySearchesHeader}>
          Showing most recent searches
        </Text>
        <View style={styles.sort}>
        <SortByAttribute />
        </View>
        {/*If we have data, show the data. If not, show feedback to the user */}
        {searchList.map((search: Search, id) => {
          if (id !== PAGE_OPTIONS.PAGE_SIZE) {
            return(
            <SearchComponent key={id} search={search} handleSearchWordClick={handleSearchWordClick}/>
        )}
          })}
      </View>
      <View style={styles.pagination}>
        <Pagination
          listLength={searchList.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </View>
    </View>
  );
}
