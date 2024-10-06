import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback, useContext, useLayoutEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, StatusBar, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { RootStackParamList } from '../routes/Router';
import Spinner from 'react-native-loading-spinner-overlay';
import { AuthContext, signUpType } from '../context/AuthContext';
import { Formik } from 'formik';
import signUpSchema from '../../yupScemas/signUpScema';
import globalStyles from '../../styles/globalStyles';

type Props = NativeStackScreenProps<RootStackParamList>

const Register = ({ navigation }: Props): JSX.Element => {

  const { isLoading, isSignError, setIsSignError, signUp } = useContext(AuthContext)

  const handleSubmitt = async (values: signUpType) => {
    signUp(values);
    // console.log('values : ', values);
  }

  useLayoutEffect(
    useCallback(() => {
      setIsSignError(false)
    }, [])
  )

  return (

    <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      <Spinner visible={isLoading} />
      <StatusBar backgroundColor={'#f5fff0'} barStyle="dark-content"></StatusBar>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPwd: '',
        }}
        validationSchema={signUpSchema}
        onSubmit={(values, isValid) => isValid && handleSubmitt(values)}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'position'} style={{ display: 'flex' }}>
            <View style={styles.container}>
              <Image style={styles.BusImg} source={require('../../../assets/registerimg.png')} />
              <Text style={styles.loginText}>Sign Up</Text>
              {isSignError && <Text style={styles.signUpError}>Something went wrong please try again</Text>}
              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.input, globalStyles.textColor]}
                  placeholder="Firstname"
                  placeholderTextColor="darkgray"
                  value={values.firstName}
                  onBlur={handleBlur('firstName')}
                  onChangeText={(text) => { handleChange('firstName')(text) }}
                />
                {touched.firstName && errors.firstName && (<Text style={styles.errorText}>{errors.firstName}</Text>)}
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.input, globalStyles.textColor]}
                  placeholder="Lastname"
                  placeholderTextColor="darkgray"
                  value={values.lastName}
                  onBlur={handleBlur('lastName')}
                  onChangeText={(text) => { handleChange('lastName')(text) }}
                />
                {touched.lastName && errors.lastName && (<Text style={styles.errorText}>{errors.lastName}</Text>)}
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.input, globalStyles.textColor]}
                  placeholder="Email"
                  placeholderTextColor="darkgray"
                  autoCapitalize='none'
                  value={values.email}
                  onBlur={handleBlur('email')}
                  onChangeText={(text) => { handleChange('email')(text) }}
                />
                {touched.email && errors.email && (<Text style={styles.errorText}>{errors.email}</Text>)}
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.input, globalStyles.textColor]}
                  placeholder="Password"
                  placeholderTextColor="darkgray"
                  secureTextEntry
                  value={values.password}
                  onBlur={handleBlur('password')}
                  onChangeText={(text) => { handleChange('password')(text) }}
                />
                {touched.password && errors.password && (<Text style={styles.errorText}>{errors.password}</Text>)}
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.input, globalStyles.textColor]}
                  placeholder="Confirm password"
                  placeholderTextColor="darkgray"
                  secureTextEntry
                  value={values.confirmPwd}
                  onBlur={handleBlur('confirmPwd')}
                  onChangeText={(text) => { handleChange('confirmPwd')(text) }}
                />
                {touched.confirmPwd && errors.confirmPwd && (<Text style={styles.errorText}>{errors.confirmPwd}</Text>)}
              </View>
              <TouchableOpacity style={styles.loginButton} onPress={() => handleSubmit()}>
                <Text style={styles.buttonText}>Sign up</Text>
              </TouchableOpacity>
              {/* <Text>Or</Text>
              <Image style={styles.googleImg} source={require('../../../assets/Google-logo.png')} /> */}
            </View>
          </KeyboardAvoidingView>
        )}

      </Formik>
    </ScrollView >
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#f5fff0',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginText: {
    fontSize: 38,
    color: '#52b700',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderColor: '#52b700',
    borderWidth: 1,
    borderRadius: 15,
    elevation: 5,
  },
  errorText: {
    color: 'red',
    paddingLeft: 20
  },
  loginButton: {
    backgroundColor: '#52b700',
    paddingVertical: 10,
    paddingHorizontal: 120,
    borderRadius: 20,
    marginVertical: 30,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
  },
  forgotText: {
    marginStart: 185,
    color: '#282491',
  },
  BusImg: {
    height: 300,
    width: 300,
    objectFit: 'contain',
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
  },
  googleImg: {
    marginTop: 30,
    height: 45,
    width: 45,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: '#52b700',
    marginVertical: 15,
  },
  signUpError: {
    color: 'red',
    marginBottom: 10
  },
});

export default Register;
