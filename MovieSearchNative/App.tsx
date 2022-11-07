import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MovieSearch from './components/MovieSearch';

export default function App() {
  return (
    <View style={styles.container}>
      <MovieSearch/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212F3D',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
