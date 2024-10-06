import React from 'react';
import { ActivityIndicator, StatusBar, View, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = () => {
  return (
    <LinearGradient
      colors={['#c8ffb8', '#52b700']}
      style={{ flex: 1, justifyContent: 'center' }}
    >
      <View style={styles.mainContainer}>
        <Image style={styles.loginImg} source={require('../../assets/Intellogo.png')} />
      </View>
      <ActivityIndicator size="large" color="#ffffff" />
      <StatusBar backgroundColor={'#c8ffb8'} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginImg: {
    height: 60,
    width: 200,
    resizeMode: 'contain',
    marginVertical: 15,
  },
});

export default SplashScreen;
