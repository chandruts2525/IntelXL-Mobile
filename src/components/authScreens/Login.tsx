import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback, useContext, useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, StatusBar, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard } from 'react-native';
import { RootStackParamList } from '../routes/Router';
import { AuthContext } from '../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';
import globalStyles from '../../styles/globalStyles';
import { Formik } from 'formik';
import loginSchema from '../../yupScemas/loginSchema';

type Props = NativeStackScreenProps<RootStackParamList>
const Login = ({ navigation }: Props): JSX.Element => {

  const [isNoError, setIsNoError] = useState(true)

  const { isLoading, signIn, isSignError, setIsSignError, isSignInFromGuest, setIsSignInFromGuest } = useContext(AuthContext)

  const handleSubmitt = async (values: any) => {
    signIn(values.userName?.toLowerCase(), values.password, false)
  }

  useLayoutEffect(
    useCallback(() => {
      setIsSignError(false)
    }, [])
  )

  useEffect(() => {
    if (isSignInFromGuest)
      setIsSignInFromGuest(false)
  }, [])

  return (
    <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      <Spinner visible={isLoading} />
      <StatusBar backgroundColor={'#f5fff0'} barStyle="dark-content"></StatusBar>
      <Formik
        initialValues={{
          userName: '',
          password: ''
        }}
        validationSchema={loginSchema}
        onSubmit={(values, isValid) => isValid && handleSubmitt(values)}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.container}>
                <Image style={styles.LoginImg} source={require('../../../assets/Login_img.png')} />
                <Text style={styles.loginText}>Sign in</Text>
                {isSignError && <Text style={styles.loginError}>Incorrect Username or Password</Text>}
                <View style={styles.inputContainer}>
                  <TextInput
                    style={[styles.input, globalStyles.textColor]}
                    placeholder="Username"
                    placeholderTextColor="darkgray"
                    autoCapitalize='none'
                    value={values.userName}
                    onBlur={handleBlur('userName')}
                    onChangeText={(text) => { handleChange('userName')(text); setIsSignError(false) }}
                  />
                  {touched.userName && errors.userName && (<Text style={styles.errorText}>{errors.userName}</Text>)}
                </View>

                <View style={styles.inputContainer}>
                  <TextInput
                    style={[styles.input, globalStyles.textColor]}
                    placeholder="Password"
                    placeholderTextColor="darkgray"
                    secureTextEntry
                    value={values.password}
                    onBlur={handleBlur('password')}
                    onChangeText={(text) => { handleChange('password')(text); setIsSignError(false) }}
                  />
                  {touched.password && errors.password && (<Text style={styles.errorText}>{errors.password}</Text>)}
                </View>
                {/* <Text style={styles.forgotText}>Forgot Password ?</Text> */}
                <TouchableOpacity style={styles.loginButton} onPress={() => handleSubmit()}>
                  <Text style={styles.buttonText}>Sign in</Text>
                </TouchableOpacity>
                {/* <Text style={{ color: 'darkgray' }}>Or</Text>
                <Image style={styles.googleImg} source={require('../../../assets/Google-logo.png')} /> */}
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        )}

      </Formik>
    </ScrollView>
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
    marginTop: 30,

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
  loginError: {
    color: 'red',
    marginBottom: 10
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
  LoginImg: {
    height: 300,
    width: 300,
    objectFit: 'cover',
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
  },
});

export default Login;
