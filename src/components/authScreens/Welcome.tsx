import React, { useContext, useLayoutEffect } from 'react';
import { Text, StyleSheet, TouchableOpacity, ImageBackground, StatusBar, Linking, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../routes/Router';
import { AuthContext } from '../context/AuthContext';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';

type Props = NativeStackScreenProps<RootStackParamList>

const Welcome = (props: Props) => {

  const { setIsGuest, isSignInFromGuest } = useContext(AuthContext)

  const { navigation } = props;

  const onRegister = async (url: string) => {
    await Linking.openURL(url);
  }

  useLayoutEffect(() => {
    if (isSignInFromGuest) {
      navigation.navigate('Login')
    }
  }, [])

  return (
    <ImageBackground source={require('../../../assets/bg-img.jpg')} style={styles.container}>
      <StatusBar backgroundColor={'#6fecfe'}></StatusBar>
      <Text style={styles.welcometext}>Welcome to</Text>
      <Text style={styles.ProjectText}>IntelXL</Text>
      <TouchableOpacity
        style={styles.Signupbtn}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.Signupbtn}
        // onPress={() => onRegister('https://intelxl.azurewebsites.net/Home?isSignedIn=true')}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIsGuest(true)}>
        <Text style={styles.Textguest}>Continue as Guest</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={{
        borderRadius: 20, 
        overflow: 'hidden', 
        backgroundColor: 'red',
        }}>
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={() => {
            // initiate sign in
          }}
        // disabled={isInProgress}
        />
      </TouchableOpacity> */}
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'contain',
  },
  welcometext: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#FFF500',
    textAlign: 'center',
  },
  ProjectText: {
    fontSize: 38,
    color: '#52b700',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Createbtn: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 20,
    marginVertical: 10,
    marginTop: 50,
    elevation: 5,
  },
  Signupbtn: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 130,
    borderRadius: 20,
    marginVertical: 10,
    elevation: 5,
  },
  buttonText: {
    color: '#52b700',
  },
  Textguest: {
    color: '#007bff',
    margin: 20,
  }
})

export default Welcome;