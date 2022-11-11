import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import { Octicons } from "@expo/vector-icons";
import { useReactiveVar } from "@apollo/client";
import { selectedSorting } from "../utils/stateManagement";

export default function SortByAttribute() {
  const sortOption = useReactiveVar(selectedSorting);
  const sortList = ["Highest rating", "Lowest rating"];
  const checkSymbol = " \u2713";

  return (
    <View>
      <SelectDropdown
        selectedRowStyle={styles.selectedRow}
        rowStyle={styles.row}
        buttonStyle={styles.sortButton}
        data={sortList}
        defaultButtonText={"Sort by ..."}
        onSelect={(selectedItem, index) => {
          selectedSorting(selectedItem);
        }}
        buttonTextAfterSelection={() => {
          return sortOption + checkSymbol;
        }}
        rowTextForSelection={(item, index) => {
          if (item === sortOption) {
            return item + checkSymbol;
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
