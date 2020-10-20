import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config.js/colors';

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={[styles.closeIcon, styles.icon]}></View>
      <View style={[styles.deleteIcon, styles.icon]}></View>
      <Image 
        resizeMode="contain"
        style={styles.image} 
        source={require("../assets/chair.jpg")} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    backgroundColor: colors.primary,
    left: 10,
  },
  container: {
    backgroundColor: colors.black,
  },
  deleteIcon: {
    backgroundColor: colors.secondary,
    right: 10,
  },
  icon: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 15,
  },
  image: {
    width: "100%",
    height: "100%",
  },
})

export default ViewImageScreen;