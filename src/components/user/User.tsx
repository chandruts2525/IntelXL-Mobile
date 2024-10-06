import React, { useContext, useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import UserEditModal, { keyValuePair } from './UserEditModal';
import { AuthContext } from '../context/AuthContext';
import CheckBox from '@react-native-community/checkbox';
import { ToastedMessage, errorToast } from '../alertMessages/ToastedMessage';

const User = (): JSX.Element => {

  const {rememberState, rememberMe} = useContext(AuthContext)
  const isMounted = useRef<boolean>(false)
  const { authData } = useContext(AuthContext)
  const [modalParams, setModalParams] = useState<keyValuePair | undefined>(undefined);
  const [isModalVisible, setModalVisible] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(rememberState);
  const [solidValue, setSolidValue] = useState<string | undefined>('');

  const editData = (newData: string) => {
    setModalParams({
      key: modalParams?.key,
      value: newData,
      solidValue: solidValue
    })
  }

  const openModal = (key: string, value: string | undefined) => {
    setModalParams({ key, value, solidValue : value })
    setModalVisible(true);
    setSolidValue(value)
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    if(isMounted.current){
      rememberMe(toggleCheckBox)
    }
    else{
      isMounted.current = true;
    }
  }, [toggleCheckBox])

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.Usercontainer}>
          <Image style={styles.UserImg} source={require('../../../assets/Nav-user.png')} />
          <View>
            <Text style={styles.screennametext}>Screen Name</Text>
            <Text style={styles.Usernametext}>
              {(authData?.firstName ?? '') + ' ' + (authData?.lastName ?? '')}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />

        <View style={styles.UserContainer}>
          <View>
            <TouchableOpacity style={styles.firstNameButton}
              onPress={() => openModal('First name', authData?.firstName)}
            >
              <Text style={styles.UserFirstNameText}>First name</Text>

              <Text style={styles.UserFirstName}>{authData?.firstName}</Text>
            </TouchableOpacity>
          </View>


          <TouchableOpacity style={styles.firstNameButton}
            onPress={() => openModal('Last name', authData?.lastName)}
          >
            <Text style={styles.UserFirstNameText}>Last name</Text>
            <Text style={styles.UserFirstName}>{authData?.lastName}</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity style={styles.firstNameButton} >
            <Text style={styles.UserFirstNameText}>Custom sigin-in @</Text>
            <Text style={styles.UserFirstName}>Your custom Domain</Text>
          </TouchableOpacity> */}

          <TouchableOpacity style={styles.firstNameButton}
            onPress={() => openModal('Password', '')}
          >
            <Text style={styles.UserFirstNameText}>Password</Text>
            <Text style={styles.UserFirstName}>********</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.firstNameButton}
            onPress={() => openModal('Email', authData?.emailId)}>
            <Text style={styles.UserFirstNameText}>Email</Text>
            <Text style={styles.UserFirstName}>{authData?.emailId}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.PreferencesContainer}>
          <Text style={styles.PreferencesText}>Preferences</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.firstNameButton} onPress={() => setToggleCheckBox(!toggleCheckBox)}>
            <View style={styles.rememberContainer}>
              <View style={styles.rememberTextContainer}>
                <Text style={styles.UserFirstNameText}>Remember me</Text>
                <Text style={styles.userLoginInfo}>Save login Information</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value = {toggleCheckBox}
                  onValueChange={(newValue) => setToggleCheckBox(newValue)}
                  tintColors={{ true: '#357ec7', false: 'gray' }}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <UserEditModal
        modalParams={modalParams}
        userId = {authData?.appUserId}
        editData={editData}
        open={isModalVisible}
        close={closeModal}
      />
      <ToastedMessage />
    </ScrollView>

  )
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  Usercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  UserImg: {
    marginRight: 20,
    borderRadius: 50,
    height: 50,
    width: 50,
  },
  UserIcon: {
    marginRight: 20,
    borderRadius: 50,
    height: 25,
    width: 25,
  },
  settingIcon: {
    marginRight: 20,
    borderRadius: 50,
    height: 25,
    width: 25,
  },
  aboutIcon: {
    marginRight: 20,
    borderRadius: 50,
    height: 25,
    width: 25,
  },
  contactIcon: {
    marginRight: 20,
    borderRadius: 50,
    height: 25,
    width: 25,
  },
  Usernametext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  screennametext: {
    fontSize: 14,
    color: '#8a8a8a',
  },
  signIntext: {
    fontSize: 15,
    color: '#000',
  },
  UserContainer: {
    paddingVertical: 10,
  },
  UserFirstNameText: {
    color: '#8a8a8a',
  },
  UserFirstName: {
    fontWeight: '500',
    fontSize: 14,
    color: '#000',
  },
  firstNameButton: {
    borderBottomColor: '#000',
    borderBottomWidth: 0.5,
    paddingVertical: 15,
  },
  userLoginInfo: {
    fontSize: 14,
    color: '#474747',
  },
  PreferencesContainer: {
    marginVertical: 15,
  },
  PreferencesText: {
    color: '#357ec7'
  },
  rememberContainer: {
    flexDirection: 'row',
  },
  checkboxContainer: {
    alignSelf: 'center'
  },
  rememberTextContainer:{
    flex:1,
  },
  modalContainer: {
    marginTop: '10%',
    padding: 15,
    backgroundColor: '#fff',
    height: 200,
    width: '90%',
    marginHorizontal: 20,
    borderRadius: 7,
    elevation: 20,
  },
  modalNameTittle: {
    fontWeight: '500',
    fontSize: 15,
    color: '#000',
  },
  modalNamePlaceHolder: {
    color: '#357ec7',
    paddingTop: 20,
  },
  ModalInput: {
    padding: 5,
    borderBottomWidth: 0.5,
    borderColor: '#000',
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 30,
  },
  modalCancelButtons: {
    marginHorizontal: 20,
  },
  modalSaveButtons: {

  },
  modalSaveButtonsText: {
    fontWeight: '500',
    color: '#357ec7',
  },
  modalCancelButtonsText: {
    fontWeight: '500',
    color: '#357ec7',
  },

})

export default User;