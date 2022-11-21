import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { ISearch } from "../interfaces/ISearch";
import { styles } from "../styles/DisplaySearches";
import { Octicons } from "@expo/vector-icons";

interface Props {
  search: ISearch;
  handleSearchWordClick: (title: string) => void;
}

// Each search loaded in DisplaySearches 
export default function SearchComponent(props: Props) {
  return (
    <View style={styles.searchesContainer}>
      <Octicons
        style={styles.searchIcon}
        name="search"
        size={15}
        color="white"
        onPress={() => props.handleSearchWordClick(props.search.title)}
      />
      <TouchableOpacity
        onPress={() => props.handleSearchWordClick(props.search.title)}
      >
        <Text style={styles.searchesText}>
          {props.search.title} {props.search.created.slice(0, 10)}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
