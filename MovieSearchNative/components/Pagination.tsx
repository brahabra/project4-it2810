import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Octicons } from "@expo/vector-icons";

export default function Pagination() {
  const [page, setPage] = useState<number>(0);

  function handleLeftClick() {
    if (page > 0) {
      setPage(page - 1);
    } else {
      alert("First page is showing");
    }
  }

  function handleRightClick() {
    if (page < 10) {
      setPage(page + 1);
    } else {
      alert("Last page is showing");
    }
  }

  return (
    <View style={styles.paginationContainer}>
      {page > 0 ? (
        <Octicons
          style={styles.leftArrow}
          name="arrow-left"
          size={35}
          color="white"
          onPress={handleLeftClick}
        />
      ) : (
        <Octicons
          style={styles.leftArrowDisabled}
          name="arrow-left"
          size={35}
          color="white"
          onPress={handleLeftClick}
        />
      )}
      <Text style={styles.pageText}>{page}</Text>
      {/* Handle showing last page when Apollo data is connected: */}
      {page < 10 ? (
        <Octicons
          style={styles.rightArrow}
          name="arrow-right"
          size={35}
          color="white"
          onPress={handleRightClick}
        />
      ) : (
        <Octicons
          style={styles.rightArrowDisabled}
          name="arrow-right"
          size={35}
          color="white"
          onPress={handleRightClick}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: "row",
    alignContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  leftArrow: {
    marginRight: 50,
  },
  leftArrowDisabled: {
    marginRight: 50,
    opacity: 0.1,
  },
  rightArrow: {
    marginLeft: 50,
  },
  rightArrowDisabled: {
    marginLeft: 50,
    opacity: 0.1,
  },
  pageText: {
    fontSize: 25,
    width: 45,
    color: "white",
    textAlign: "center",
  },
});
