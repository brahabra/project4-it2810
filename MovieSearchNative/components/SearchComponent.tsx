import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Search } from "../interfaces/Search";
import { styles } from "../styles/DisplaySearches";
import { Octicons } from "@expo/vector-icons";


interface Props {
  search: Search;
  handleSearchWordClick: (title: string) => void;
}
export default function SearchComponent(props: Props) {
  return (
  <View style={styles.searchesContainer} >
    <Octicons
      style={styles.searchIcon}
      name="search"
      size={15}
      color="white"
      onPress={() => props.handleSearchWordClick(props.search.title)}
    />
    <TouchableOpacity onPress={() => props.handleSearchWordClick(props.search.title)}>
      <Text style={styles.searchesText}>
        {props.search.title} {props.search.created.slice(0, 10)}
      </Text>
    </TouchableOpacity>
  </View>
  )
}
