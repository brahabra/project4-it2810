import {
  SafeAreaView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Octicons } from "@expo/vector-icons";
import { titleSearchedFor } from "../utils/stateManagement";
import { styles } from "../styles/SearchBar";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  function addSearch() {
    alert("Search after '" + search + "', and set page to first page");
    titleSearchedFor(search);
  }

  return (
    <SafeAreaView style={[styles.searchBarContainer]}>
      <TextInput
        style={styles.searchField}
        onChangeText={setSearch}
        value={search}
        placeholder={"Enter movie title ..."}
      />
      <Octicons
        name="search"
        size={35}
        color="white"
        title="Search"
        onPress={addSearch}
      />
    </SafeAreaView>
  );
}