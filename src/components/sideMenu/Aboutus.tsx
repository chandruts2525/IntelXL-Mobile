import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const About = (): JSX.Element => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
 <View style={styles.container}>
       <Image style={styles.educationImg} source={require('../../../assets/about-education.jpg')} />
       <View style={styles.educationTextConatiner}>
        <Text style={styles.educationText}>
        IntelXL is a leading provider of education practice questions and answers tailored for
         school and college students. Committed to enhancing the learning experience, IntelXL
          offers a comprehensive platform designed to help students excel in their academic pursuits.
           The company understands the importance of effective practice in mastering educational 
           content, and as such, it provides a diverse range of thoughtfully crafted questions and
            detailed answers across various subjects.
        </Text>
       
       </View>
       <Image style={styles.educationImg} source={require('../../../assets/gov-exam.png')} />
       <View style={styles.educationTextConatiner}>
       <Text style={styles.educationText}>
       IntelXL caters to a wide range of exams across various educational levels, offering a
        comprehensive suite of practice questions and answers. The platform recognizes the 
        diversity of educational systems and examination formats, tailoring its resources
         to meet the needs of students preparing for different types of exams.
        </Text>
       </View>
       
     
      <View style={styles.subcontainer}>
        <View style={styles.TermsContainer}>
        <Text style={styles.Termstext}>Terms of service</Text>
        </View>
        <View style={styles.TermsContainer}>
        <Text style={styles.Termstext}>Privacy Policy</Text>
        </View>
        <View style={styles.TermsContainer}>
        <Text style={styles.Termstext}>Version</Text>
        </View>

        <Text style={styles.copytext}>2023 IntelXL. All rights reserved.</Text>
        
        
      </View>
    </View>
    </ScrollView>
   

  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    margin:20,
  },
  subcontainer: {
    marginVertical: 20,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
  // logoImg: {
  //   marginVertical: 20,
  //   height: 100,
  //   width: 170,
  //   objectFit: 'contain',
  // },
  educationImg: {
    marginVertical: 20,
    height: 200,
    width: '100%',
    objectFit: 'cover',
  },
  educationTextConatiner:{

  },
  educationText:{
    textAlign:'left',
    fontSize:14,
    color:'#000',
  },
  copytext: {
    color: '#9E9E9E',
    fontWeight:'bold',
    fontSize: 15,
  },
  TermsContainer:{
  },
  Termstext: {
    textAlign:'center',
    marginVertical: 20,
    fontSize: 17,
    color:'#000',
   
  }

})

export default About;