import { View, Text } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { styles } from "../styles/Pagination";

interface Props {
  currentPage: number;
  setCurrentPage: (value: number) => void;
}

export default function Pagination(props: Props) {

  function handleLeftClick() {
    if (props.currentPage > 0) {
      props.setCurrentPage(props.currentPage - 1);
    } else {
      alert("First page is showing");
    }
  }

  function handleRightClick() {
    props.setCurrentPage(props.currentPage + 1);
    /*   TODO: Handle showing last page when Apollo data is connected
    
    if (props.currentPage < 10) {
      props.setCurrentPage(props.currentPage + 1);
    } else {
      alert("Last page is showing");
    }*/
  }

  return (
    <View style={styles.paginationContainer}>
      {props.currentPage > 0 ? (
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
      <Text style={styles.pageText}>{props.currentPage + 1}</Text>
      {/* TODO: Handle showing last page when Apollo data is connected: */}
      {props.currentPage < 10 ? (
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