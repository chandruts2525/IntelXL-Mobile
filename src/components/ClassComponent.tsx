import React, { useCallback, useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from './routes/Router';
import SomethingWenrWrong from './alertMessages/SomethingWentWrong';
import NoData from './alertMessages/NoData';
import { AuthContext } from './context/AuthContext';

type Props = NativeStackScreenProps<RootStackParamList, 'Class'>

type ClassType = {
  classId: number,
  className: String
}

const ClassComponent = ({ route, navigation }: Props): JSX.Element => {

  const {subscriptionCheck} = useContext(AuthContext)
  
  const [refresh, setRefresh] = useState<boolean>(false)
  const [classItems, setclassItems] = useState<ClassType[]>([])
  const [isLoading, setIsLoading] = useState<Boolean>(true)
  const [error, setError] = useState<any>(null)

  const { courseId } = route.params;

  const colorsArray = ['#10A0B6', '#F39317', '#0B863C', '#D74726', '#00A1DE', '#8D33AA', '#00B971'];

  let colorIndex = 0;
  const dynamicColor = () => {
    const color = colorsArray[colorIndex];
    colorIndex = (colorIndex + 1) % colorsArray.length;
    return color;
  };

  const classPress = (classId: number) => {
    navigation.navigate('Subject', { classId })
    subscriptionCheck(classId);
  }

  const pageRefresh = () => setRefresh(!refresh)

  useEffect(() => {
    setIsLoading(true);
    fetch('https://intelxlapi.azurewebsites.net/api/Classes/GetClassesByCourseId/' + courseId)
    // fetch('http://10.0.2.2:5034/api/Classes/GetClassesByCourseId/' + courseId)
    // fetch('https://agapeworkstech.bsite.net/api/Classes/GetClassesByCourseId/' + courseId)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setclassItems(data);
        setError(null);
      })
      .catch(error => {
        console.log(error)
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [refresh]);

  return (

    <View style={styles.Maincontainer}>
      {isLoading ? (
        <View style={[styles.loadingContainer, styles.loadingAnimation]}>
          <ActivityIndicator size={45} color="#74B72E" />
        </View>
      ) : error ? (
        <SomethingWenrWrong refresh = {pageRefresh}/>
      ) : (!classItems.length) ? (
        <NoData reload={pageRefresh}/>
      ) : (<FlatList
        style={styles.flatList}
        numColumns={2}
        data={classItems}
        renderItem={({ item }) => (
          <View style={styles.mainList}>
            <TouchableOpacity
              style={[styles.classButton, { backgroundColor: dynamicColor() }]}
              onPress={() => classPress(item?.classId)}
            >
              <Text style={styles.classButtonText}>{item?.className}</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.classId.toString()}
        showsVerticalScrollIndicator={false}
      />)
      }
    </View>
  )
};

const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1,
  },
  flatList: {
    paddingTop: 20,
  },
  mainList: {
    width: '50%',
    paddingHorizontal: '5%',
  },
  classContainer: {
    paddingTop: 20,
  },
  classButton: {
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    elevation: 5,
    alignItems: 'center',
  },
  classButtonText: {
    justifyContent: 'center',
    color: '#fff',
    fontSize: 18,
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

export default ClassComponent;
