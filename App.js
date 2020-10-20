import React from 'react';
import { SafeAreaView, View, Platform, StatusBar, StyleSheet } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';


export default function App() {
  return (
    <SafeAreaView style={styles}>
      {/* <WelcomeScreen /> */}
      <ViewImageScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
})
