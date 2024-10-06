import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const GuestLimit = () => {

  const {setIsGuest, setIsSignInFromGuest} = useContext(AuthContext)

  const signIn = () => {
    setIsGuest(false); 
  } 

  return (
    <View style={styles.Subscribecontainer}>
      <Image style={styles.SubscribeImg} source={require('../../../assets/login_logo.jpg')} />
      <Text style={styles.SubscribeText}>You've hit the maximum limit for daily practice.</Text>
      <Text style={styles.SubscribeTextpara}> Unlock unlimited practice by Sign in.</Text>
      <TouchableOpacity style={styles.RefreshButton} onPress={signIn}>
        <Text style={styles.RefreshButtonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Subscribecontainer: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  SubscribeImg: {
    width: 150,
    height: 150,
  },
  RefreshButton: {
    backgroundColor: '#52b700',
    padding: 10,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginVertical: 20,
  },
  RefreshButtonText: {
    color: '#fff'
  },
  SubscribeText: {
    color: '#fabc2f',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  SubscribeTextpara: {
    color: '#000',
    textAlign: 'center',
  }
})

export default GuestLimit;