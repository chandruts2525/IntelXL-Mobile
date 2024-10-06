import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

interface refreshInter {
  refresh() : void
}
const SomethingWenrWrong = ({refresh} : refreshInter): JSX.Element => {

  return (
    <View style ={styles.container}>
      <View style ={styles.wrongcontainer}>
      <Image style={styles.CautionImg} source={require('../../../assets/somethingWrong.png')} />
      <Text style={styles.SomethingwentText}>Oops! Something went wrong!</Text>
      <Text style={styles.CautionText}>We're sorry, but it seems like there's been a hiccup in the system.
         Our team is already on the case.</Text>
         <TouchableOpacity style={styles.RefreshButton} onPress={() => refresh()}>
          <Text style={styles.RefreshButtonText}>Refresh</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:20,
    },
    wrongcontainer:{
      justifyContent: 'center',
      alignItems: 'center',
    },
    CautionImg: {
      width: 100,
      height: 100,
    },
    CautionText:{
      color:'#000',
      paddingVertical:15,
      textAlign:'center',
      fontSize:13,
    },
    RefreshButton:{
      backgroundColor:'#ff1d28',
      padding:10,
      paddingHorizontal:25,
      borderRadius:5,
      marginVertical:20,
    },
    RefreshButtonText:{
      color:'#fff'
    },
    SomethingwentText:{
      fontSize:20,
      color:'#000',
      fontWeight:'bold',
    }
})

export default SomethingWenrWrong;
