import { View, Text, StyleSheet, SafeAreaView, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { AntDesign } from '@expo/vector-icons'
//import { makeVar } from "@apollo/client";

//export const titleSearchedFor = makeVar<string>("");


export default function SearchBar() {
  const [search, setSearch] = useState("");

  function addSearch () {
    alert("Search after " + search + " ...")
  } 

  return (
    <SafeAreaView style={[styles.container]}>
      <AntDesign style={styles.searchIcon} name="search1" size={24} color="white" title="Search" onPress={addSearch} />
      <TextInput style={styles.searchField} onChangeText={setSearch} value={search} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  searchField: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white"
  },
  searchIcon: {
    marginTop: 20
  },

});
