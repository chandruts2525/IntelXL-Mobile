import React, { useContext } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../authScreens/Welcome';
import Login from '../authScreens/Login';
import Register from '../authScreens/Register';
import User from '../user/User';
import About from '../sideMenu/Aboutus';
import Contact from '../sideMenu/Contact';
import ClassComponent from '../ClassComponent';
import Subject, { SubjectType } from '../Subject';
import Topics from '../Topics';
import Questions from '../questions/Questions';
import Course from '../Course';
import { AuthContext } from '../context/AuthContext';
import SplashScreen from '../SplashScreen';
import Sidebar from '../sideMenu/Sidebar';
import ChatList from '../chat/ChatList';
import Just from '../Just';
import PastYears from '../questions/pastYearQuestions/PastYears';
import PastYearPractice from '../questions/pastYearQuestions/PastYearPractice';
import Subscriptions from '../subscriptions/Subscriptions';

export type RootStackParamList = {
  Welcome: undefined,
  Login: undefined,
  Register: undefined,
  User: undefined,
  About: undefined,
  Contact: undefined,
  Course: undefined,
  Class: { courseId: Number },
  Subject: { classId: Number },
  Topics: { subjectId: Number },
  Questions: { subTopicId: Number, subjectId: Number },
  WrongAns: undefined,
  Certificate: undefined,
  SplashScreen: undefined,
  ChatList: undefined,
  Just: undefined,
  PastYears: { classId: Number, subjects: SubjectType[] },
  PastYearPractice: { subjectId: Number, year: string },
  Subscriptions: undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = (): JSX.Element => {

  const { isSplashLoading, authData, isGuest } = useContext(AuthContext)

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Subscriptions'
        // initialRouteName='Course'
        screenOptions={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#52b700' }, headerTintColor: 'white',
          headerRight: () => {
            return (
              <Sidebar navigation={useNavigation()} />
            )
          }
        }}
      >

        {isSplashLoading ? (
          <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
        ) : authData?.firstName || isGuest ? (
          <>
            <Stack.Screen name='Course' component={Course} options={{ title: 'Pick your course' }} />
            <Stack.Screen name='Class' component={ClassComponent} options={{ title: 'Classes' }} />
            <Stack.Screen name='Subject' component={Subject} options={{ title: 'Subjects' }} />
            <Stack.Screen name='Topics' component={Topics} options={{ title: 'Topics' }} />
            <Stack.Screen name='Questions' component={Questions} options={{ headerShown: false }} />
            <Stack.Screen name='PastYears' component={PastYears} options={{ title: 'Past Year Questions' }} />
            <Stack.Screen name='PastYearPractice' component={PastYearPractice} options={{ headerShown: false }} />
            <Stack.Screen name='User' component={User} options={{ title: 'Settings', headerTitleAlign: 'left', headerRight: () => null }} />
            <Stack.Screen name='About' component={About} options={{ title: 'About Us', headerTitleAlign: 'left', headerRight: () => null }} />
            <Stack.Screen name='Contact' component={Contact} options={{ title: 'Contact Us', headerTitleAlign: 'left', headerRight: () => null }} />
            <Stack.Screen name='ChatList' component={ChatList} />
            <Stack.Screen name='Just' component={Just} />
            <Stack.Screen name='Subscriptions' component={Subscriptions} />
          </>
        ) : (
          <>
            <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
            <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
          </>
        )}

      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Router;