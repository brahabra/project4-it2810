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
//import { makeVar } from "@apollo/client";

//export const titleSearchedFor = makeVar<string>("");

export default function SearchBar() {
  const [search, setSearch] = useState("");

  function addSearch() {
    alert("Search after " + search + " ...");
  }

  return (
    <SafeAreaView style={[styles.container]}>
      <TextInput
        style={styles.searchField}
        onChangeText={setSearch}
        value={search}
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
    height: 35,
    width: 250,
    marginLeft: 5,
    marginRight: 5,
    padding: 10,
    backgroundColor: "white",
  },
});
