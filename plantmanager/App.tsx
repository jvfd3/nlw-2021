import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Welcome } from './src/pages/Welcome';

export default function App() {
  return (
    <View style={styles.view1}>
      <Welcome/>
    </View>
  );
}

const styles = StyleSheet.create({
  whiteText: {
    color: 'white',
  },
  view1: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});