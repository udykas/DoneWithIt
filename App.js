import React from 'react';
import { StyleSheet, Platform, StatusBar, SafeAreaView, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
