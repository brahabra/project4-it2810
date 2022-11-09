import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import { Octicons } from "@expo/vector-icons";

export default function SortByAttribute() {
  const sortList = ["Highest rating", "Lowest rating"];
  let selectedItemGlobal = "";

  return (
    <View>
      <SelectDropdown
        selectedRowStyle={styles.selectedRow}
        rowStyle={styles.row}
        buttonStyle={styles.sortButton}
        data={sortList}
        defaultButtonText={"Sort by ..."}
        onSelect={(selectedItem, index) => {
          // Handle select
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          selectedItemGlobal = selectedItem;
          return selectedItem + " \u2713";
        }}
        rowTextForSelection={(item, index) => {
          if (item === selectedItemGlobal) {
            return item + " \u2713";
          } else {
            return item;
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  selectedRow: {
    backgroundColor: "lightgrey",
  },
  row: {
    backgroundColor: "white",
  },
  sortButton: {
    backgroundColor: "white",
    marginLeft: "auto",
    marginRight: 10,
    marginTop: 5,
    height: 40,
    width: 200,
  },
});
