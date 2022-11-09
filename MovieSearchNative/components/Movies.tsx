// import { useQuery } from "@apollo/client";
// import React, { useState } from "react";
// import { FlatList, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
// import { PAGE_OPTIONS } from "../enum";
// import { IExtendedMovie } from "../interfaces/IMovie";
// import { GET_ALL_MOVIES } from "../queries/getMovies";

// export default function Movies() {
//   const [currentPage, setCurrentPage] = useState(0);
//   let loadedMoviesList: IExtendedMovie[] = [];

//   // const styles = StyleSheet.create({
//   //   container: {
//   //     flex: 1,
//   //     paddingTop: StatusBar.currentHeight,
//   //   },
//   //   scrollView: {
//   //     backgroundColor: 'pink',
//   //     marginHorizontal: 20,
//   //   },
//   //   text: {
//   //     fontSize: 42,
//   //   },
//   // });

//   const { loading, error, data } = useQuery(GET_ALL_MOVIES, {
//     variables: {
//       options: {
//         offset: currentPage * PAGE_OPTIONS.PAGE_SIZE,
//         limit: PAGE_OPTIONS.PAGE_SIZE,
//         sort: {
//           IMDB_Rating: "DESC",
//         },
//       },
//     },
//   });

//   if (loading)
//     return (
//       <View style={styles.container}>
//         <Text>"Loading..."</Text>
//       </View>
//     );
//   if (error)
//     return (
//       <View style={styles.container}>
//         <Text>`Error! ${error.message}`</Text>
//       </View>
//     );

//   if (data) {
//     data.movies.forEach((movie: IExtendedMovie) => {
//       loadedMoviesList.push(movie);
//     });
//   }


// return()

// }


