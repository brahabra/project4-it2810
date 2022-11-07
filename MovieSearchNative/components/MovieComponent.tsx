import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";
import { Movie } from "../interfaces/Movie";

interface Props {
  movie: Movie;
}

export default function MovieComponent(props: Props) {
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    setShowMore(!showMore);
  }

  return (
    <View style={styles.container} onTouchStart={handleClick}>
      {showMore ? (
        <Text>
          {props.movie.Series_Title} {props.movie.Released_Year}{" "}
          {props.movie.IMDB_Rating}
        </Text>
      ) : (
        <View>
          <Image
            style={styles.picture}
            source={{
              uri: props.movie.Poster_Link,
            }}
          />
          <Text>
            {props.movie.Series_Title} {props.movie.Released_Year}{" "}
            {props.movie.IMDB_Rating}
            <Text>Description: {props.movie.Overview}</Text>
            <Text>
              Featuring: {props.movie.Star1}, {props.movie.Star2},{" "}
              {props.movie.Star3}, {props.movie.Star4}
            </Text>
            <Text>Genre: {props.movie.Genre}</Text>
            <Text>Runtime: {props.movie.Runtime}</Text>
            <Text>Directed by: {props.movie.Director}</Text>
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
  },
  picture: {
    width: 50,
    height: 50,
  },
});
