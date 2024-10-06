import React, { useCallback, useContext, useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, ActivityIndicator, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from './routes/Router';
import SomethingWenrWrong from './alertMessages/SomethingWentWrong';
import NoData from './alertMessages/NoData';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { AuthContext } from './context/AuthContext';
import { useFocusEffect } from '@react-navigation/native';

type TopicsType = {
  topicId: number,
  topic: String,
  subTopicMasters: [{
    subTopicId: number,
    subTopic: String
  }]
}

type Props = NativeStackScreenProps<RootStackParamList, 'Topics'>

let round = 0;
let subTopicLimit = 0;
let noLockLimit = 1;
let isShowLock = false;

const Topics = ({ route, navigation }: Props): JSX.Element => {

  const { hasSubscription } = useContext(AuthContext);
  const [refresh, setRefresh] = useState<boolean>(false)
  const [topics, settopics] = useState<TopicsType[]>([])
  const [isLoading, setIsLoading] = useState<Boolean>(true)
  const [error, setError] = useState<any>(null)

  const { subjectId } = route.params;

  // console.log('Sub Id : ', subjectId);
  // console.log('Topics length : ', topics?.length);


  const subTopicPress = (subTopicId: Number) => {
    navigation.navigate('Questions', { subTopicId, subjectId })
  }

  // Serial number logic
  const getAlphabeticSerialNumber = (index: number) => {
    // console.log('Round : ', round);

    let prefix = '';
    let alphabeticIndex = index % 26;
    if (!alphabeticIndex)
      round++;
    if (round > 1)
      prefix = String.fromCharCode(63 + round);
    return prefix + String.fromCharCode(65 + alphabeticIndex);
  }

  const pageRefresh = () => setRefresh(!refresh)

  useEffect(() => {
    setIsLoading(true);

    fetch('https://intelxlapi.azurewebsites.net/api/Topics/GetTopicsWithSubTopicsBySubjectId/' + subjectId)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // console.log('Data : ', data);

        settopics(data?.topics);
        subTopicLimit = data?.subTopicLimit
        setError(null);
        round = 0;
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    return () => {

    }
  }, [refresh]);
  useLayoutEffect(
    useCallback(() => {
      round = 0;
      noLockLimit = 1;
      isShowLock = false;
    }, [])
  )

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={[styles.loadingContainer, styles.loadingAnimation]}>
          <ActivityIndicator size={45} color="#74B72E" />
        </View>
      ) : error ? (
        <SomethingWenrWrong refresh={pageRefresh} />
      ) : (!topics?.length) ? (
        <NoData reload={pageRefresh} />
      ) :
        <ScrollView
          style={styles.scrollContainer}
          horizontal={false}
          showsVerticalScrollIndicator={false}
        >
          {
            topics?.map(({ topicId, topic, subTopicMasters }, index) => {

              return (subTopicMasters.length) ? (
                <View style={styles.topics} key={topicId}>
                  <Text style={styles.topicName}>
                    <Text style={styles.serialNumber}> {getAlphabeticSerialNumber(index)}. </Text>
                    {topic}
                  </Text>
                  <View>
                    {
                      subTopicMasters?.map(({ subTopicId, subTopic }, i) => {
                        let handlePress: (() => void) = () => subTopicPress(subTopicId)
                        if (noLockLimit > subTopicLimit && !hasSubscription) {
                          isShowLock = true;
                          handlePress = () => { };
                        }
                        noLockLimit++;
                        return (
                          <TouchableOpacity key={subTopicId} onPress={handlePress}>
                            <View style={styles.subTopicContainer}>
                              <Text style={styles.serialNumber}>{i + 1}. </Text>
                              <Text style={styles.Subtopictext}>
                                {subTopic} {
                                  (isShowLock) && <MaterialCommunityIcon name={'lock-outline'} size={15} color='#ffb100' />
                                }
                              </Text>
                            </View>
                          </TouchableOpacity>
                        )
                      })
                    }
                  </View>
                </View>
              ) : null;
            })
          }
        </ScrollView>
      }
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    backgroundColor: '#f5f5f5',
  },
  topics: {
    marginBottom: 12,
    backgroundColor: '#fff',
    padding: 20,
  },
  topicName: {
    color: '#ff0000',
    fontWeight: 'bold',
    fontSize: 18,
    borderBottomWidth: 0.5,
    borderColor: '#d4d4d4',
    paddingBottom: 10,
  },
  serialNumber: {
    fontWeight: 'normal',
    color: '#0000ff',
  },
  Subtopictext: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 15,
    color: '#0000ff',
  },
  subTopicContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 15,
    marginVertical: 10,
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

export default Topics;