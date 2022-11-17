import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import { GET_SEARCHES } from "../queries/getSearches";
import { useQuery } from "@apollo/client";
import { PAGE_OPTIONS } from "../utils/enum";
import { titleSearchedFor } from "../utils/stateManagement";
import { Octicons } from "@expo/vector-icons";
import { styles } from "../styles/DisplaySearches";
import { useNavigation } from "@react-navigation/native";

export default function DisplaySearches() {
  const navigation = useNavigation();

  const { data, loading, error } = useQuery(GET_SEARCHES, {
    variables: {
      options: {
        offset: 0,
        limit: PAGE_OPTIONS.SEARCHES_SIZE,
        sort: {
          created: "DESC",
        },
      },
    },
  });

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

  // If we have searches, view the searches. The search word and when it was searched after is showing.
  function showSearches() {
    return data?.searches.map(
      ({ title, created }: { title: string; created: string }) => (
        <View style={styles.searchesContainer} key={created}>
          <Octicons
            style={styles.searchIcon}
            name="search"
            size={15}
            color="white"
            onPress={() => handleSearchWordClick(title)}
          />
          <TouchableOpacity onPress={() => handleSearchWordClick(title)}>
            <Text style={styles.searchesText}>
              {title} {created.slice(0, 10)}
            </Text>
          </TouchableOpacity>
        </View>
      )
    );
  }

  return (
    <View style={styles.displaySearchesContainer}>
      <Text style={styles.displaySearchesHeader}>
        Showing the last {PAGE_OPTIONS.SEARCHES_SIZE} searches
      </Text>
      {/*If we have data, show the data. If not, show feedback to the user */}
      {data.searches.length > 0 ? (
        showSearches()
      ) : (
        <Text>No searches registered!</Text>
      )}
    </View>
  );
}
