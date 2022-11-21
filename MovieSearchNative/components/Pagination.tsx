import { View, Text } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { styles } from "../styles/Pagination";
import { PAGE_OPTIONS } from "../utils/enum";

interface Props {
  listLength: number;
  currentPage: number;
  setCurrentPage: (value: number) => void;
}

// Returns pagination component.
export default function Pagination(props: Props) {
  return (
    <View style={styles.paginationContainer}>
      {/*Handle left click*/}
      {props.currentPage > 0 ? (
        <Octicons
          style={styles.leftArrow}
          name="arrow-left"
          size={35}
          color="white"
          onPress={() => props.setCurrentPage(props.currentPage - 1)}
        />
      ) : (
        <Octicons
          style={styles.leftArrowDisabled}
          disabled
          name="arrow-left"
          size={35}
        />
      )}
      {/* Show current page*/}
      <Text style={styles.pageText}>{props.currentPage + 1}</Text>
      {/*Handle right click*/}
      {props.listLength === PAGE_OPTIONS.PAGE_SIZE + 1 ? (
        <Octicons
          style={styles.rightArrow}
          name="arrow-right"
          size={35}
          color="white"
          onPress={() => props.setCurrentPage(props.currentPage + 1)}
        />
      ) : (
        <Octicons
          style={styles.rightArrowDisabled}
          disabled
          name="arrow-right"
          size={35}
        />
      )}
    </View>
  );
}
