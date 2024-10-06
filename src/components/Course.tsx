import React, { useState, useEffect } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, StatusBar, FlatList, Touchable } from 'react-native';
import axios from 'axios'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from './routes/Router';
import { AuthContext } from './context/AuthContext';
import SomethingWenrWrong from './alertMessages/SomethingWentWrong';
import NoData from './alertMessages/NoData';
import { Button } from 'react-native-elements';

type Props = NativeStackScreenProps<RootStackParamList, 'Course'>

type CourseType = {
  courseId: Number,
  courseName: string
}

const Course = ({ navigation }: Props) => {

  const [refresh, setRefresh] = useState<boolean>(false)
  const [courses, setCourses] = useState<CourseType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<any>(null)

  const getImageUrl = (courseName: string) => {
    let imagePath;

    switch (courseName) {
      case 'school':
        imagePath = require('../../assets/Courses/School-logo.png');
        break;
      case 'bank':
        imagePath = require('../../assets/Courses/Bank-logo.png');
        break;
      case 'tnpsc':
        imagePath = require('../../assets/Courses/TNPSC-logo.png');
        break;
      case 'railway':
        imagePath = require('../../assets/Courses/Railway-logo.png');
        break;
      case 'ssc':
        imagePath = require('../../assets/Courses/SSC-logo.png');
        break;
      case 'tnusrb':
        imagePath = require('../../assets/Courses/TNUSRB.png');
        break;
      case 'upsc':
        imagePath = require('../../assets/Courses/UPSC-Logo.jpg');
        break;
        case 'neet':
        imagePath = require('../../assets/Courses/NeetLogo.png');
        break;
      default:
        imagePath = require('../../assets/Courses/default-course.png');
        break;
    }

    return imagePath;
  };

  const pageRefresh = () => setRefresh(!refresh)

  useEffect(() => {
    setIsLoading(true);
    fetch('https://intelxlapi.azurewebsites.net/api/Courses/GetAllCourse/1')
    // fetch('http://10.0.2.2:5034/api/Courses/GetAllCourse/1')
    // fetch('https://agapeworkstech.bsite.net/api/Courses/GetAllCourse')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCourses(data);
        setError(null);
      })
      .catch(error => {
        setError(error);
        console.log(error);
      })  
      .finally(() => {
        setIsLoading(false);
      });
  }, [refresh])


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#52b700'} barStyle="light-content"></StatusBar>
      {/* <Button title={'Just'} onPress={() => navigation.navigate('Just')}></Button> */}
      {isLoading ? (
        <View style={[styles.loadingContainer, styles.loadingAnimation]}>
          <ActivityIndicator size={45} color="#74B72E" />
        </View>
      ) : error ? (
        <SomethingWenrWrong refresh = {pageRefresh}/>
      ) : (!courses?.length) ? (
        <NoData reload={pageRefresh}/>
      ) : (<FlatList
        style={styles.flatList}
        numColumns={2}
        data={courses}
        renderItem={({ item }) => (
          <View style={styles.mainList}>
            <TouchableOpacity onPress={() => {
              navigation.navigate('Class', { courseId: item?.courseId })
            }}>
              <View style={styles.listItem}>
                <Image
                  source={getImageUrl(item?.courseName?.toLowerCase())}
                  style={{ width: 90, height: 90 }}
                />
                <Text style={styles.listText}>{item?.courseName}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.courseId.toString()}
        showsVerticalScrollIndicator={false}
      />)
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f6',
    flex: 1
  },
  flatList: {
    paddingTop: 20
  },
  mainList: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  listItem: {
    padding: 25,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
  },
  listText: {
    fontSize: 18,
    color: '#ff8036',
    textAlign: 'center',
    paddingTop: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  loadingAnimation: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
  },

});

export default Course;