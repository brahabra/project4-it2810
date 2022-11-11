import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import { styles } from "../styles/ExtendedMovieComponent";

export default function ExtendedMovieComponent({ route }: { route: any }) {
  const {
    Series_Title,
    IMDB_Rating,
    Released_Year,
    Director,
    Genre,
    Overview,
    Poster_Link,
    Runtime,
    Star1,
    Star2,
    Star3,
    Star4,
  } = route.params;

  return (
    <SafeAreaView style={styles.wrapper}> 
      <View style={styles.movieContainer}>
        <Image
          style={styles.picture}
          source={{
            uri: Poster_Link,
          }}
        />
        <View>
          <Text style={styles.extendedMovieHeader}>
            {Series_Title} {Released_Year} {IMDB_Rating} &#9733;
          </Text>
       
          <Text style={styles.movieParagraph}>
            <Text style={styles.movieParagraphType}>Description: </Text>
            {Overview}
          </Text>
          <Text style={styles.movieParagraph}>
            <Text style={styles.movieParagraphType}>Featuring:</Text> {Star1}, {Star2},{" "}
            {Star3} and {""}
            {Star4}
          </Text>
          <Text style={styles.movieParagraph}>
            <Text style={styles.movieParagraphType}>Genre:</Text> {Genre}
          </Text>
          <Text style={styles.movieParagraph}>
            <Text style={styles.movieParagraphType}>Runtime: </Text>
            {Runtime} 
          </Text>
          <Text style={styles.movieParagraph}>
            <Text style={styles.movieParagraphType}>Directed by:</Text> {Director}
          </Text>
  
        </View>
      </View>
    </SafeAreaView>
  );
}
