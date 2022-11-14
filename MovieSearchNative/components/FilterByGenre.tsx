import { View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { selectedGenre } from "../utils/stateManagement";
import { useReactiveVar } from "@apollo/client";
import { styles } from "../styles/FilterByGenre";

export default function FilterByGenre() {
  const genre = useReactiveVar(selectedGenre);
  const checkSymbol = " \u2713";

  const genresList = [
    "None",
    "Drama",
    "War",
    "Action",
    "Comedy",
    "Crime",
    "History",
    "Thriller",
    "Sci-Fi",
    "Fantasy",
    "Family",
    "Music",
  ];

  return (
    <View>
      <SelectDropdown
        selectedRowStyle={styles.selectedRow}
        rowStyle={styles.row}
        buttonStyle={styles.filterButton}
        data={genresList}
        defaultButtonText={"Select genre"}
        onSelect={(selectedItem) => {
          if (selectedItem === "None") {
            selectedGenre("");
          } else {
            selectedGenre(selectedItem);
          }
        }}
        buttonTextAfterSelection={() => {
          if (genre === "") {
            return "Select genre"
          } else {
            return genre + checkSymbol;
          }
        }}
        rowTextForSelection={(item) => {
          if (item === genre) {
            return item + checkSymbol;
          } else {
            return item;
          }
        }}
      />
    </View>
  );
}