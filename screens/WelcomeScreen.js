import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";


const WelcomeScreen = () => {
  return (
      <ImageBackground 
        style={styles.image} 
        source={require("../assets/background.jpg")} 
      >
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../assets/logo-red.png")} />
          <Text>Sell What you Don't Need</Text>
        </View>
        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ECDC4",
  },
  logo: {
    height: 100,
    width: 100,
    marginBottom: 10
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  }
})

export default WelcomeScreen;