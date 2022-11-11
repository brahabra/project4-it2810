import { View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { selectedGenre } from "../utils/stateManagement";
import { useReactiveVar } from "@apollo/client";
import { styles } from "../styles/FilterByGenre";

export default function FilterByGenre() {
  const genre = useReactiveVar(selectedGenre);
  const checkSymbol = " \u2713";

  const genresList = [
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
  // @TODO! defaultButtonText should only be "Select genre", but not possible now because of rendering of MovieSearch when next page is clicked

  return (
    <View>
      <SelectDropdown
        selectedRowStyle={styles.selectedRow}
        rowStyle={styles.row}
        buttonStyle={styles.filterButton}
        data={genresList}
        defaultButtonText={"Select genre"}
        onSelect={(selectedItem, index) => {
          selectedGenre(selectedItem);
        }}
        buttonTextAfterSelection={() => {
          return genre + checkSymbol;
        }}
        rowTextForSelection={(item, index) => {
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