import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Appriciation = () => {

  const appreciations = [
    'Outstanding',
    'Exceptional',
    'Remarkable',
    'Admirable',
    'Commendable',
    'Exemplary',
    'Praiseworthy',
    'Splendid',
    'Superb',
    'Magnificent',
    'Fantastic',
  ];
  
  function randomAppreciation() {
    const randomIndex = Math.floor(Math.random() * 11);
    return appreciations[randomIndex];
  }

  return (

    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image style={styles.ticImg} source={require('../../../assets/Animationtic.gif')} />
        <Text style={styles.appriciationText}>{randomAppreciation()}</Text>
      </View>
    </View>

  )
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
    padding: 10,
    height: 70,
    width: 270,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#2b9923',
    backgroundColor: '#d7ffd4',
    borderRadius: 5,
    elevation: 15,
  },
  ticImg: {
    marginRight: 5,
    height: 60,
    width: 60,
  },
  appriciationText: {
    color: '#2b9923',
    fontSize: 25,
  },
})

export default Appriciation