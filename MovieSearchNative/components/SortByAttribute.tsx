import { View } from "react-native";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import { useReactiveVar } from "@apollo/client";
import { selectedSorting } from "../utils/stateManagement";
import { styles } from "../styles/SortByAttribute";

export default function SortByAttribute() {
  const sortOption = useReactiveVar(selectedSorting);
  const sortList = ["ASC", "DESC"];
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