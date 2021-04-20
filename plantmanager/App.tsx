import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Welcome } from './src/pages/Welcome';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';
export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if(fontsLoaded)
    return(
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}} >
        <Text>
          A fonte está carregando!
        </Text>
      </View>
    )

  return (
      <Welcome/>
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