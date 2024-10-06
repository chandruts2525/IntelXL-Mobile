import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

interface refreshInter {
  practiceAgain(): void
  showWrongBtn?: boolean
  retryIncorrect?(): void
}

const PracticeAgain = ({ practiceAgain, showWrongBtn, retryIncorrect }: refreshInter): JSX.Element => {

  return (
    <View style={styles.container}>
      <Image style={styles.CautionImg} source={require('../../../assets/praticagainImg.png')} />
      <Text style={styles.NodataText}>Well done</Text>
      <Text style={styles.NodataTextpara}>You've finished all the questions in this section</Text>
      {
        showWrongBtn ? (<TouchableOpacity
          style={[styles.RefreshButton, { backgroundColor: 'red' }]}
          onPress={() => retryIncorrect && retryIncorrect()}
        >
          <Text style={styles.RefreshButtonText}>Retry Incorrect Answers</Text>
        </TouchableOpacity>)
          : null
      }
      <TouchableOpacity
        style={[styles.RefreshButton, { backgroundColor: '#52B701' }]}
        onPress={() => practiceAgain()}
      >
        <Text style={styles.RefreshButtonText}>Practice Again</Text>
      </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  CautionImg: {
    width: 150,
    height: 150,
  },
  RefreshButton: {
    padding: 10,
    paddingHorizontal: 45,
    borderRadius: 5,
    marginVertical: 20,
  },
  RefreshButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  NodataText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  NodataTextpara: {
    color: '#000',
    textAlign: 'center',
  }



})

export default PracticeAgain;
