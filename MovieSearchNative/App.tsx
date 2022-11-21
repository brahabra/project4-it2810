import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Octicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackNavigationHelpers } from "@react-navigation/native-stack/lib/typescript/src/types";
import React from "react";
import { SafeAreaView, View } from "react-native";
import DisplayMovies from "./components/DisplayMovies";
import DisplaySearches from "./components/DisplaySearches";
import ExtendedMovie from "./components/ExtendedMovie";
import FilterByGenre from "./components/FilterByGenre";
import Search from "./components/Search";
import SortByAttribute from "./components/SortByAttribute";
import { styles } from "./styles/App";


const client = new ApolloClient({
  uri: "http://it2810-03s.idi.ntnu.no/graphql",
  cache: new InMemoryCache(),
});

/**
 * Every component is rendered in the app.
 */
export default function App() {
  const Stack = createNativeStackNavigator();

  function MainScreen({
    navigation,
  }: {
    navigation: NativeStackNavigationHelpers;
  }) {
    return (
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.searchBar}>
          {/*Handle click on history icon*/}
          <Octicons
            style={styles.historyIcon}
            onPress={() => navigation.navigate("History")}
            name="history"
            size={35}
            color="white"
          />
          <Search />
        </View>
        <View style={styles.filterAndSortContainer}>
          <FilterByGenre />
          <SortByAttribute />
        </View>
        <DisplayMovies />
      </SafeAreaView>
    );
  }

  /**
   * The navigation between differenct screens is defined here.
   */
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#295963",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen name="Home" component={MainScreen} />
          <Stack.Screen name="Details" component={ExtendedMovie} />
          <Stack.Screen name="History" component={DisplaySearches} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
