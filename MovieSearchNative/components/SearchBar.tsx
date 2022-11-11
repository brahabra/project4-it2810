import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";
import { Octicons } from "@expo/vector-icons";
import { titleSearchedFor } from "../utils/stateManagement";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  function addSearch() {
    alert("Search after '" + search + "', and set page to first page");
    titleSearchedFor(search);
  }

  return (
    <SafeAreaView style={[styles.container]}>
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
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  searchField: {
    height: 40,
    width: 270,
    marginLeft: 5,
    marginRight: 5,
    padding: 5,
    backgroundColor: "white",
    fontSize: 20,
    textAlign: "center",
  },
});
