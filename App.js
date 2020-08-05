import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button,ThemeProvider} from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
  <ThemeProvider>
      <Button title="Hey how you are doing !" />
    </ThemeProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
