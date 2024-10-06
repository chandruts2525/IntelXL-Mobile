import { View, Text, StyleSheet,Image} from 'react-native'
import React, { useState } from 'react'
import globalStyles from '../../styles/globalStyles'

interface ImageNameType{
  countImage : number
}

const Challenge = ({countImage} : ImageNameType) => {

  const imageNameArray = ['one', 'two', 'three']

  return (
    <View style={styles.container}>
      <View style={styles.challengeContainer}>
      <Text style={[styles.readyText, globalStyles.textColor]}>Now entering challenge zone. Are you ready?</Text>
      <View style={styles.appriciationContainer}>
      {
        (countImage == 0) ? (
          <Image style={styles.numberImg} source={require('../../../assets/Questions/three.png')} />
        ) : (countImage == 1) ? (
          <Image style={styles.numberImg} source={require('../../../assets/Questions/two.png')} />
        ) : (countImage == 2) ? (
          <Image style={styles.numberImg} source={require('../../../assets/Questions/one.png')} />
        ) : null
      }
      <Text style={styles.appriciationText}>Excellent</Text>
      </View>
    
      </View>
  </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
  },
  challengeContainer:{
    marginTop:150,
  },
  readyText:{
    padding:10,
    textAlign:'center',
  },
  appriciationText:{
   
    textAlign:'center',
    fontSize:20,
    color:'#bf246f',
  },
  numberImg:{
    height:40,
    width:40,
  },
  appriciationContainer:{
    borderColor:'#bf246f',
    backgroundColor:'#ffdeee',
    borderRadius:5,
    elevation:5,
    borderWidth:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    width:300,
  }
})

export default Challenge