import axios from 'axios';
import React, { PropsWithChildren, SetStateAction, createContext, useEffect, useRef, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signInUrl, signUpUrl } from '../../constants/Urls';
import { sha256 } from 'react-native-sha256'
import { date } from 'yup';

type AuthContextData = {
  authData: authDataType | undefined,
  saveAuthData: (data: authDataType) => void,
  isLoading: boolean,
  isSplashLoading: boolean,
  signIn(userId: string, password: string, isHashed: boolean): void,
  signUp(params: signUpType): void,
  signOut(): void,
  isSignError: boolean,
  setIsSignError: (newValue: boolean) => void,
  isSignedIn(): void,
  isGuest: boolean,
  setIsGuest: (newValue: boolean) => void,
  nthPracQues: number,
  setNthPracQues: (newValue: number) => void,
  setGuestQuesCount(count: number): void,
  resetGuestCount(): void,
  rememberMe(newValue: boolean): void,
  rememberState: boolean,
  isSignInFromGuest: boolean,
  setIsSignInFromGuest: (newValue: boolean) => void
  hasSubscription: boolean,
  subscriptionCheck: (classId: number) => void
}

type subscriptionType = {
  classId: number,
  // expireDttm: Date
  remaingDays: number

}

type authDataType = {
  appUserId: number | undefined,
  firstName: string | undefined,
  lastName: string | undefined,
  userName: string | undefined,
  emailId: string | undefined,
  password: string | undefined,
  subscriptions: subscriptionType[] | undefined,
}

export type signUpType = {
  firstName: string,
  lastName: string,
  email: string,
  password: string
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {

  const isMounted = useRef(false)
  const [authData, setAuthData] = useState<authDataType | undefined>();
  const [isSplashLoading, setIsSplashLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGuest, setIsGuest] = useState<boolean>(false);
  const [nthPracQues, setNthPracQues] = useState<number>(0);
  const [rememberState, setRememberState] = useState<boolean>(true);
  const [isSignInFromGuest, setIsSignInFromGuest] = useState<boolean>(false)
  const [isSignError, setIsSignError] = useState<boolean>(false)
  const [hasSubscription, setHasSubscription] = useState<boolean>(false)

  const signIn = async (userId: string, password: string, isHashed: boolean) => {
    let hashPwd = password;
    try {
      setIsLoading(true)

      if (password && !isHashed) {
        hashPwd = await sha256(password)
        if (!hashPwd) throw new Error('Something went wrong.')
      }
      axios
        .get(signInUrl(userId, hashPwd ?? ''))
        .then(res => {
          // console.log('Login result : ', res.data)
          if (res.data) {
            saveAuthData(res.data)
            setNthPracQues(0)
          }
          else {
            throw new Error('User NotFound')
          }
        })
        .catch(e => {
          setIsSignError(true)
          console.log(`signin error ${e}`)
        })
        .finally(() => {
          // setTimeout(() => {
          setIsLoading(false)
          // }, 3000)
        })
    }
    catch (error) {
      console.log(error)
    }
  }

  const saveAuthData = async (resData: any) => {

    const { appUserId, firstName, emailId, lastName, userName, password } = resData;

    let subscriptionArray: subscriptionType[] | undefined;

    if (resData?.userSubscriptions?.length) {
      subscriptionArray = resData?.userSubscriptions?.map((item: any): subscriptionType => {
        return {
          classId: item?.subscription?.classId,
          // expireDttm: item?.expireDttm
          remaingDays: item?.remaingDays
        }
      })
    }

    const authData = {
      appUserId,
      firstName,
      lastName,
      userName,
      emailId,
      password,
      subscriptions: subscriptionArray ? subscriptionArray : resData?.subscriptions
    }
    // console.log('Sign in data : ', authData);
    setAuthData(authData)

    if (rememberState)
      AsyncStorage.setItem('authData', JSON.stringify(authData))
  }

  const signUp = async (params: signUpType) => {
    setIsLoading(true)
    const { firstName, lastName, email, password } = params
    const jsonObj = await JSON.stringify({
      firstName,
      lastName,
      userName: email?.toLowerCase().split('@')[0],
      emailId: email?.toLowerCase(),
      password: await sha256(password),
      createdDttm: new Date,
      appRoleId: 1
    })
    const config = {
      headers: {
        'Content-Type': 'application/json'
      },
    };
    axios
      .post(signUpUrl, jsonObj, config)
      .then(res => {
        // console.log(res.data)
        if (res.data) {
          saveAuthData(res.data)
          setNthPracQues(0)
        }
        else {
          throw new Error('Something went wrong.')
        }
      })
      .catch(e => {
        setIsSignError(true)
        console.log(`signin error ${e}`)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const signOut = async () => {

    await AsyncStorage.removeItem('authData')
    setAuthData(undefined)
  }

  const isSignedIn = async () => {
    console.log('isSignedIn called')
    try {
      setIsSplashLoading(true)

      let authData: any = await AsyncStorage.getItem('authData')
      authData = JSON.parse(authData)
      // console.log('isSignedIn data: ', authData)

      if (authData) {
        setAuthData(authData)
        signIn(authData?.emailId, authData.password, true)
      }
    }
    catch (error) {
      console.log(`is signed in error ${error}`)
    }
    finally {
      setIsSplashLoading(false)
    }
  }

  const subscriptionCheck = async (classId: number) => {

    // setHasSubscription(true)

    let isSubscribed = false;
    const foundSubscription = authData?.subscriptions?.find((item) => item.classId == classId)

    if (foundSubscription) {
      if (foundSubscription?.remaingDays)
        isSubscribed = true
    }
    setHasSubscription(isSubscribed)
  }

  const setGuestQuesCount = async (count: number) => {
    console.log('setGuestQuesCount called')
    console.log('setCount : ' + count)

    setNthPracQues(count)

    await AsyncStorage.setItem('guestQuesCount', JSON.stringify(count))

    const currentDate = new Date();
    const formatedDate = currentDate.getFullYear() + '' + currentDate.getMonth() + '' + currentDate.getDate();

    await AsyncStorage.setItem('guestQuesCountCreatedTime', formatedDate)
  }

  const getGuestQuesCount = async () => {
    console.log('getGuestQuesCount called')

    try {
      let storedDate = await AsyncStorage.getItem('guestQuesCountCreatedTime')
      if (storedDate)
        storedDate = await JSON.parse(storedDate);
      console.log('storedDate : ' + storedDate)

      const today = new Date();
      const currentDate = today.getFullYear() + '' + today.getMonth() + '' + today.getDate();
      console.log('today : ' + currentDate)

      console.log(storedDate == currentDate)

      if (storedDate == currentDate) {
        const count = await AsyncStorage.getItem('guestQuesCount')
        console.log('count : ' + count)

        if (count) {
          const parsedCount = await JSON.parse(count)
          console.log('parsedCount : ' + parsedCount)
          setNthPracQues(parsedCount)
        }
      }
    }
    catch (error) {
      console.log(`error on getGuestQuesCount from AsyncStorage ${error}`)
    }
  }

  const resetGuestCount = async () => {
    console.log('resetGuestCount called')
    await AsyncStorage.setItem('guestQuesCount', JSON.stringify(0))
  }

  const rememberMe = async (flag: boolean) => {
    try {
      if (flag) {
        AsyncStorage.removeItem('rememberMe');
        AsyncStorage.setItem('authData', JSON.stringify(authData));
      }
      else {
        AsyncStorage.setItem('rememberMe', JSON.stringify(1));
        AsyncStorage.removeItem('authData');
      }
    }
    catch (error) {
      console.log(`error on set remember me to AsyncStorage : ${error}`)
    }
    finally {
      setRememberState(flag)
    }
  }

  const isRememberMe = async () => {
    try {
      const rememberMeString = await AsyncStorage.getItem('rememberMe')
      if (rememberMeString)
        setRememberState(false);
    }
    catch (error) {
      console.log(`error on check remember me ${error}`)
    }
  }

  useEffect(() => {
    if (isMounted.current) {
      isGuest ? getGuestQuesCount() : (setNthPracQues(0))
    }
    else {
      isMounted.current = true;
      isSignedIn()
      isRememberMe();
      // getGuestQuesCount()
    }
  }, [isGuest])
  // }, [])

  return (
    <AuthContext.Provider value={
      {
        authData,
        saveAuthData,
        isLoading,
        isSplashLoading,
        signIn,
        isSignError,
        setIsSignError,
        signUp,
        signOut,
        isSignedIn,
        isGuest,
        setIsGuest,
        nthPracQues,
        setNthPracQues,
        setGuestQuesCount,
        resetGuestCount,
        rememberState,
        rememberMe,
        isSignInFromGuest,
        setIsSignInFromGuest,
        hasSubscription,
        subscriptionCheck,
      }
    }>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }