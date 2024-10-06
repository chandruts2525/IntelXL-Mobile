import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

interface refreshInter {
  reload(): void
}

const NoData = ({ reload }: refreshInter): JSX.Element => {

  return (
    <View style={styles.container}>
      <Image style={styles.CautionImg} source={require('../../../assets/NoData.png')} />
      <Text style={styles.NodataText}>No Data Available</Text>
      <Text style={styles.NodataTextpara}>We're sorry, but it seems that the data you are looking
        for is currently unavailable. </Text>
      <TouchableOpacity style={styles.RefreshButton} onPress={() => reload()}>
        <Text style={styles.RefreshButtonText}>Reload</Text>
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
    width: 100,
    height: 100,
  },
  RefreshButton: {
    backgroundColor: '#1576ed',
    padding: 10,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginVertical: 20,
  },
  RefreshButtonText: {
    color: '#fff'
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

export default NoData;
