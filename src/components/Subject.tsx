import React, { useContext, useEffect, useState } from 'react';
import { Text, StyleSheet, ScrollView, TouchableOpacity, View, Image, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from './routes/Router';
import SomethingWenrWrong from './alertMessages/SomethingWentWrong';
import NoData from './alertMessages/NoData';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { AuthContext } from './context/AuthContext';

type Props = NativeStackScreenProps<RootStackParamList, 'Subject'>

export type SubjectType = {
  subjectId: number,
  subjectName: String
}
let lastIndex = 0;

const Subject = ({ route, navigation }: Props) => {

  const { hasSubscription } = useContext(AuthContext)
  const [refresh, setRefresh] = useState<boolean>(false)
  const [subjects, setsubjects] = useState<SubjectType[]>([])
  const [isLoading, setIsLoading] = useState<Boolean>(true)
  const [error, setError] = useState<any>(null)

  const { classId } = route.params;

  const colorsArray = ['#10A0B6', '#F39317', '#0B863C', '#D74726', '#00A1DE', '#8D33AA', '#00B971'];

  const dynamicColor = (index: number) => colorsArray[index % colorsArray.length];

  const subjectPress = (subjectId: Number) => navigation.navigate('Topics', { subjectId });

  const pastYearQuesPress = (classId: Number) => navigation.navigate('PastYears', { classId, subjects });

  const pageRefresh = () => setRefresh(!refresh)

  useEffect(() => {
    setIsLoading(true);
    fetch('https://intelxlapi.azurewebsites.net/api/Subjects/GetSubjectsByClassId/' + classId)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setsubjects(data);
        setError(null);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [refresh]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={[styles.loadingContainer, styles.loadingAnimation]}>
          <ActivityIndicator size={45} color="#74B72E" />
        </View>
      ) : error ? (
        <SomethingWenrWrong refresh={pageRefresh} />
      ) : (!subjects.length) ? (
        <NoData reload={pageRefresh} />
      ) : (
        <ScrollView
          style={styles.scrollContainer}
          horizontal={false}
          showsVerticalScrollIndicator={false}
        >
          {
            subjects.map(({ subjectId, subjectName }, index) => {
              const colorValue = dynamicColor(index);
              lastIndex = index;
              return (
                <TouchableOpacity
                  key={subjectId}
                  onPress={() => subjectPress(subjectId)}
                >
                  <Text
                    style={[styles.subjectText, { color: colorValue, borderColor: colorValue }]}
                  >
                    {subjectName}
                  </Text>
                </TouchableOpacity>
              )
            })
          }
          <TouchableOpacity
            onPress={() => hasSubscription && pastYearQuesPress(classId)}
          >
            <View style={[styles.pastYearContainer, { borderColor: dynamicColor(++lastIndex) }]}>
              <Text
                style={[styles.practiceText, { color: dynamicColor(lastIndex) }]}
              >
                Past Year Questions
              </Text>
              { !hasSubscription && <MaterialCommunityIcon name={'lock-outline'} size={20} color='#ffb100' />}
            </View>

          </TouchableOpacity>
        </ScrollView>)
      }
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingHorizontal: '5%',
  },
  practiceText: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
  pastYearContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    fontSize: 20,
    borderWidth: 1,
    fontWeight: 'bold',
    elevation: 5,
    borderRadius: 5,
    marginVertical: 10,
  },
  subjectText: {
    padding: 20,
    backgroundColor: '#fff',
    fontSize: 20,
    borderWidth: 1,
    fontWeight: 'bold',
    elevation: 5,
    borderRadius: 5,
    marginVertical: 10,
  },
  Loadingcontainer: {
    flex: 1,
    justifyContent: 'center',
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
})

export default Subject;