import { Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { titleSearchedFor } from "../utils/stateManagement";
import { GET_SEARCHES } from "../queries/getSearches";
import { useMutation } from "@apollo/client";
import { CREATE_SEARCHES } from "../queries/createSearches";
import { PAGE_OPTIONS } from "../utils/enum";
import { SearchBar } from "@rneui/themed";

export default function SearchBarComponent() {
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
          title: titleSearchedFor(),
          created: d.toISOString(),
        },
      });
    }
  }

  const onSubmit = () => {
    if (search.trim().length > 45) {
      alert("Search can not contain more than 45 characters!");
    }
    else {
      if (!format.test(search)) {
        addToSearchLog();
      } else {
        alert("No special characters allowed! Please try again.");
      }
    }
  };

  if (loading) return <Text>Saving search ...</Text>;
  if (error) return <Text>Could not save search ...</Text>;

  return (
    <SafeAreaView>
      <SearchBar
        placeholder={"Enter movie title ..."}
        onChangeText={(setSearch)}
        onSubmitEditing={onSubmit}
        value={search}
        inputContainerStyle={{ backgroundColor: "white", width: 290 }}
        leftIconContainerStyle={{ backgroundColor: "white" }}
        inputStyle={{ backgroundColor: "white", color: "black" }}
        containerStyle={{
          backgroundColor: "white",
          justifyContent: "space-around",
          borderTopWidth: 0,
          borderBottomWidth: 0,
        }}
      />
    </SafeAreaView>
  );
}
