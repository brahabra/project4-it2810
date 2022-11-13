import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React, { useState } from "react";
import { Button, SafeAreaView, View } from "react-native";
import FilterByGenre from "./components/FilterByGenre";
import SearchBar from "./components/SearchBar";
import SortByAttribute from "./components/SortByAttribute";
import { Octicons, MaterialCommunityIcons } from "@expo/vector-icons";
import DisplaySearches from "./components/DisplaySearches";
import DisplayMovies from "./components/DisplayMovies";
import { styles } from "./styles/App";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExtendedMovieComponent from "./components/ExtendedMovieComponent";

const client = new ApolloClient({
  uri: "http://it2810-03.idi.ntnu.no:4000",
  cache: new InMemoryCache(),
});

export default function App() {
  //const [showSearches, setShowSearches] = useState(false);
  const Stack = createNativeStackNavigator();

  function MainScreen({ navigation }: { navigation: any }) {
    return (
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.searchBar}>
          <Octicons
            onPress={() => navigation.navigate("Search history")}
            name="history"
            size={35}
            color="white"
          />
          <SearchBar />
        </View>
        <View style={styles.filterAndSortContainer}>
          <FilterByGenre />
          <SortByAttribute />
        </View>
        <DisplayMovies navigation={navigation} />
      </SafeAreaView>
    );
  }

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#28213D",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen name="Home" component={MainScreen} />
          <Stack.Screen name="Details" component={ExtendedMovieComponent} />
          <Stack.Screen name="Search history" component={DisplaySearches} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
