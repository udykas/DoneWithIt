import React from 'react';
import { SafeAreaView, View, Platform, StatusBar, StyleSheet } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';

export default function App() {
  return (
    <SafeAreaView style={styles}>
      <WelcomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
})
