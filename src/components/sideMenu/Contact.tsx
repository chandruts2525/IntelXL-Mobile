import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const Contact = (): JSX.Element => {


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.ContactContainer}>
          <TextInput style={styles.nameContact} placeholder="Name" placeholderTextColor="darkgray" defaultValue="" />
          <TextInput style={styles.userContact} placeholder="Username" placeholderTextColor="darkgray" defaultValue="" />
          <TextInput style={styles.emailContact} placeholder="Email" placeholderTextColor="darkgray" defaultValue="" />
          <TextInput style={styles.phoneContact} placeholder="Phone" placeholderTextColor="darkgray" defaultValue="" />
          <Text style={styles.discripttext}>Discription</Text>
          <TextInput style={styles.discriptContact} multiline={true} placeholder="Description"
            numberOfLines={4} textAlignVertical="top" placeholderTextColor="darkgray" />
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundImage: require('../../assets/bg-img.jpg'),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  ContactContainer: {

  },
  nameContact: {
    marginVertical: 10,
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    width: 300,
    color: '#000',
  },
  phoneContact: {
    marginVertical: 10,
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    width: 300,
    color: '#000',
  },
  emailContact: {
    marginVertical: 10,
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    width: 300,
    color: '#000',
  },
  userContact: {
    marginVertical: 10,
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    width: 300,
    color: '#000',
  },
  discriptContact: {
    marginVertical: 10,
    height: 150,
    borderColor: 'gray',
    borderWidth: 1,
    width: 300,
    borderRadius: 5,
    color: '#000',
  },
  discripttext: {
    color: '#000',
    marginVertical: 10,
    justifyContent: 'flex-start'
  },
  submitButton: {
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderWidth: 0,
    borderRadius: 5,
    backgroundColor: '#74B72E',
    marginVertical: 5,
  },
  submitText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
    color: '#fff',
  },
  cancelButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#74B72E',
  },
  cancelText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
  },
})

export default Contact;