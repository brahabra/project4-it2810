import { View, Text, StyleSheet, SafeAreaView, TextInput, Button } from "react-native";
import React, { useState } from "react";
//import { makeVar } from "@apollo/client";

//export const titleSearchedFor = makeVar<string>("");


export default function SearchBar() {
  const [search, setSearch] = useState("");

  function addSearch () {
    alert("Search after " + search + " ...")
  } 

  return (
    <SafeAreaView style={[styles.container]}>
      <TextInput style={styles.searchField} onChangeText={setSearch} value={search} />
      <Button title="Search" onPress={addSearch} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  searchField: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white"
  },

});
