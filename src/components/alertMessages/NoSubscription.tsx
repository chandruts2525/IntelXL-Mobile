import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const NoSubscription = (): JSX.Element => {

  const {setIsGuest, setIsSignInFromGuest, signOut} = useContext(AuthContext)

  const SubscribeLink = async (url: string) => {
    await Linking.openURL(url);
    
    setIsGuest(false); 
    setIsSignInFromGuest(true)
    signOut()
  } 

  return (
    <View style={styles.Subscribecontainer}>
      <Image style={styles.SubscribeImg} source={require('../../../assets/NoSubscribe.png')} />
      <Text style={styles.SubscribeText}>No Subscription</Text>
      <Text style={styles.SubscribeTextpara}>You've hit the maximum limit for daily practice. Unlock unlimited practice by subscribing.</Text>
      <TouchableOpacity style={styles.RefreshButton} onPress={() => SubscribeLink('https://intelxl.azurewebsites.net/Membership/Join?isSignedIn=true')}>
        <Text style={styles.RefreshButtonText}>See plans</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Subscribecontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  SubscribeImg: {
    width: 100,
    height: 100,
  },
  RefreshButton: {
    backgroundColor: '#fed9a1',
    padding: 10,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginVertical: 20,
  },
  RefreshButtonText: {
    color: '#000'
  },
  SubscribeText: {
    color: '#000',
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

export default NoSubscription;