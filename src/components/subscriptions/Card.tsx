import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { planType } from '../../hooks/useFetchPlans'

interface params {
  plan: planType
}

const Card = ({ plan }: params) => {
  // console.log('Card called.', plan);

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>
        {plan?.subscriptionName}
      </Text>
      <ScrollView indicatorStyle='black'>
        <View style={styles.courseContainer}>
          <Text style={styles.courseName}>{plan?.courseMaster?.courseName} <Text style={styles.className}>({plan?.classMaster?.className})</Text></Text>
        </View>
        {
          plan?.classMaster?.subjectMasters?.map(({subjectId, subjectName}) => {
            return (
              <View style={{ flexDirection: 'row' }} key={subjectId}>
                <Text style={styles.subjectNames}> •</Text>
                <Text style={styles.subjectNames}>{subjectName}</Text>
              </View>
            )
          })
        }
      </ScrollView>
      <Text style={styles.amount}>₹ {plan?.subscriptionAmount}</Text>
      <Text style={styles.select}>Selected</Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#5ab24f',
    padding: 20,
    borderRadius: 10,
  },
  cardTitle: {
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 30,
    color: '#fff',
    backgroundColor: '#5ab24f',
    padding: 10,
    borderRadius: 7,
  },
  courseContainer: {
    marginTop: 15,
    marginLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  courseName: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 5,
  },
  className: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'normal',
  },
  subjectNames: {
    marginLeft: 10,
    paddingTop: 20,
    color: '#000',
    fontSize: 20
  },
  amount: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 10,
  },
  select: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: '#5ab24f',
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 7,
  }
})