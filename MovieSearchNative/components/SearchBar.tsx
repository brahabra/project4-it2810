import {
  Keyboard,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { Octicons } from "@expo/vector-icons";
import { titleSearchedFor } from "../utils/stateManagement";
import { styles } from "../styles/SearchBar";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  function addSearch() {
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
          onPress={addSearch}
        />
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
