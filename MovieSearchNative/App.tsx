import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import { SafeAreaView, View } from "react-native";
import FilterByGenre from "./components/FilterByGenre";
import SortByAttribute from "./components/SortByAttribute";
import { Octicons } from "@expo/vector-icons";
import DisplaySearches from "./components/DisplaySearches";
import DisplayMovies from "./components/DisplayMovies";
import { styles } from "./styles/App";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExtendedMovie from "./components/ExtendedMovie";
import Search from "./components/Search";
import { NativeStackNavigationHelpers } from "@react-navigation/native-stack/lib/typescript/src/types";

const client = new ApolloClient({
  uri: "http://it2810-03s.idi.ntnu.no/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  const Stack = createNativeStackNavigator();

  function MainScreen({ navigation }: { navigation: NativeStackNavigationHelpers }) {
    
    return (
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.searchBar}>
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
          <Stack.Screen name="Details" component={ExtendedMovie} />
          <Stack.Screen name="History" component={DisplaySearches} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
