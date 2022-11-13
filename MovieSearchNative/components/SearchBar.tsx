import {
  Text,
  Keyboard,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { Octicons } from "@expo/vector-icons";
import { titleSearchedFor } from "../utils/stateManagement";
import { styles } from "../styles/SearchBar";
import { GET_SEARCHES } from "../queries/getSearches";
import { useMutation } from "@apollo/client";
import { CREATE_SEARCHES } from "../queries/createSearches";
import { PAGE_OPTIONS } from "../utils/enum";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const d = new Date();

  // String of invalid characters
  const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|<>\/]+/;

  // Createa search
  const [addSearch, { loading, error }] = useMutation(CREATE_SEARCHES, {
    refetchQueries: [
      {
        query: GET_SEARCHES,
        variables: {
          options: {
            offset: 0,
            limit: PAGE_OPTIONS.SEARCHES_SIZE,
            sort: {
              created: "DESC",
            },
          },
        },
      },
      "getSearches",
    ],
  });

  // Adds the word searched for to the database
  function addToSearchLog() {
    titleSearchedFor(search.trim());
    if (search.trim()) {
      addSearch({
        variables: {
          title: search,
          created: d.toISOString(),
        },
      });
    }
  }

  const onSubmit = () => {
    if (!format.test(search)) {
      addToSearchLog();
    } else {
      alert(
        "No special characters allowed! Please try again."
      );
    }
  };

  if (loading) return <Text>Saving search ...</Text>;
  if (error) return <Text>Could not save search ...</Text>;

  return (
    <SafeAreaView style={[styles.searchBarContainer]}>
      <TextInput
        style={styles.searchField}
        onChangeText={setSearch}
        value={search}
        placeholder={"Enter movie title ..."}
      />
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <Octicons
          name="search"
          size={35}
          color="white"
          title="Search"
          onPress={onSubmit}
        />
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
