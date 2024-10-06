import axios from 'axios'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { userUpdateUrl } from '../../constants/Urls'
import { AuthContext } from '../context/AuthContext'
import { sha256 } from 'react-native-sha256'
import { ToastedMessage, errorToast } from '../alertMessages/ToastedMessage';
import globalStyles from '../../styles/globalStyles'

export type keyValuePair = {
    key: string | undefined,
    value: string | undefined,
    solidValue: string | undefined
}

interface modalParams {
    modalParams: keyValuePair | undefined,
    open: boolean,
    userId: number | undefined,
    editData: (newData: string) => void,
    close: () => void
}

export const resetStates = () => {

}

const errorColor = '#ff1d28';

const UserEditModal = ({ modalParams, editData, open, close, userId }: modalParams) => {

    const { authData, saveAuthData } = useContext(AuthContext)
    const isMounted = useRef(false)

    const [currentPwd, setCurrentPwd] = useState<string>('')
    const [confirmNewPwd, setConfirmNewPwd] = useState<string>('')
    const [firstName, setFirstName] = useState<string | null>(null)
    const [lastName, setLastName] = useState<string | null>(null)
    const [emailId, setEmailId] = useState<string | null>(null)
    const [newPwd, setNewPwd] = useState<string | null>(null)
    const [pwdValidError, setPwdValidError] = useState<boolean>(false)
    const [emailValidError, setEmailValidError] = useState<boolean>(false)
    const [confirmPwdValidError, setConfirmPwdValidError] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)
    const [currentPwdError, setCurrentPwdError] = useState<boolean>(false)
    const [confirmPwdError, setConfirmPwdError] = useState<boolean>(false)
    const [currentPwdVaalidError, setCurrentPwdValidError] = useState<boolean>(false)

    const resetErrorStates = () => {
        setCurrentPwdError(false)
        setCurrentPwdValidError(false)
        setIsError(false)
        setConfirmPwdError(false)
        setCurrentPwd('')
        setConfirmNewPwd('')
    }

    const isValidPwd = (password: string) => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_-]).{8,20}$/;
        return regex.test(password);
    };

    const isValidEmail = (email: string) => {
        const emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return emailRegex.test(email);
    };

    const updateEditedState = async () => {
        if (!modalParams?.value) {
            setIsError(true)
            return;
        }
        if (modalParams?.solidValue == modalParams?.value) {
            close();
            return;
        }
        // else
        //     close();

        switch (modalParams?.key) {
            case 'First name': {
                setFirstName(modalParams?.value)
                break;
            }
            case 'Last name': {
                setLastName(modalParams?.value)
                break;
            }
            case 'Email': {
                if (isValidEmail(modalParams?.value)) {
                    setEmailId(modalParams?.value)
                }
                else {
                    setEmailValidError(true)
                    setIsError(true)
                }
                break;
            }
            case 'Password': {
                if (isValidPwd(modalParams?.value))
                    if (confirmNewPwd) {
                        if (confirmNewPwd == modalParams?.value) {
                            if (currentPwd) {
                                if (await isCurrentPwdCorrect()) {
                                    setCurrentPwdValidError(false)
                                    setNewPwd(modalParams?.value)
                                }
                                else
                                    setCurrentPwdValidError(true)
                            }
                            else {
                                setCurrentPwdError(true)
                            }
                        }
                        else {
                            setConfirmPwdError(true)
                            setConfirmPwdValidError(true)
                        }
                    }
                    else {
                        setConfirmPwdValidError(false)
                        setConfirmPwdError(true)
                    }
                else {
                    setPwdValidError(true)
                    setIsError(true)
                }
                break;
            }
        }
    }

    const isCurrentPwdCorrect = async () => {
        console.log('Old : ', authData?.password);

        if (currentPwd && authData?.password) {
            // console.log('New : ', await sha256(currentPwd));

            if (authData.password == await sha256(currentPwd))
                return true
        }
        return false
    }

    const updateUserData = async () => {

        console.log('Auth data in user area : ', authData);
        

        let hashPwd : string | null = null;
        try {
            if (newPwd) {
                hashPwd = await sha256(newPwd)
                if (!hashPwd) throw new Error('Something went wrong.')
            }
            console.log(hashPwd)
            axios.put((userUpdateUrl + userId), {
                password: hashPwd,
                firstName: firstName,
                lastName: lastName,
                emailId: emailId
            })
                .then((res) => {
                    saveAuthData({
                        appUserId: authData?.appUserId,
                        firstName: firstName ?? authData?.firstName,
                        lastName: lastName ?? authData?.lastName,
                        userName: authData?.userName,
                        emailId: emailId ?? authData?.emailId,
                        password: hashPwd ?? authData?.password,
                        subscriptions: authData?.subscriptions
                    })
                })
                .catch((error) => {
                    errorToast()
                    console.log(error)
                })
        }
        catch (error) {
            errorToast()
            console.log(error)
        }
        finally {
            close();
        }
    };

    useEffect(() => {
        if (isMounted.current) {
            console.log('useEffect executed')
            updateUserData()
        }
        else {
            console.log('Initial mount')
            isMounted.current = true;
        }
    }, [firstName, lastName, emailId, newPwd])

    return (

        <Modal
            visible={open}
            animationType="slide"
            transparent={true}
            onRequestClose={() => console.log('modal closed')}
            onShow={() => resetErrorStates()}
        >
            <View style={styles.mainContainer}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalNameTittle}>
                        Edit your {modalParams?.key?.toLowerCase()}
                    </Text>

                    {(modalParams?.key == 'Password') ? (
                        <>
                            <Text style={[styles.modalNamePlaceHolder, { color: currentPwdError || currentPwdVaalidError ? '#ff1d28' : '#357ec7' }]}>
                                Current password
                            </Text>
                            <TextInput
                                style={[styles.ModalInput, { borderColor: currentPwdError || currentPwdVaalidError ? '#ff1d28' : '#000', }, globalStyles.textColor]}
                                value={currentPwd}
                                onChangeText={(v) => { setCurrentPwdError(false); setCurrentPwdValidError(false); setCurrentPwd(v) }}
                            />
                            {currentPwdError ? (
                                <Text style={styles.errorColor}>
                                    Please enter current password
                                </Text>
                            ) : currentPwdVaalidError ? (
                                <Text style={styles.errorColor}>
                                    Corrent password is wrong
                                </Text>
                            ) : null
                            }

                            <Text style={[styles.modalNamePlaceHolder, { color: isError ? '#ff1d28' : '#357ec7' }]}>
                                New password
                            </Text>
                            <TextInput
                                style={[styles.ModalInput, { borderColor: isError ? '#ff1d28' : '#000', }, globalStyles.textColor]}
                                value={modalParams?.value}
                                onChangeText={(v) => { setIsError(false); setPwdValidError(false); editData(v.replace(/\s/g, '')) }}
                            />
                            {isError && (
                                <Text style={styles.errorColor}>{
                                    pwdValidError ? 'Please use 8 - 20 characters long and includes a mix of uppercase, lowercase, symbols & numbers' : 'Please enter new password'
                                }</Text>
                            )
                            }

                            <Text style={[styles.modalNamePlaceHolder, { color: confirmPwdError ? '#ff1d28' : '#357ec7' }]}>
                                Confirm new password
                            </Text>
                            <TextInput
                                style={[styles.ModalInput, { borderColor: confirmPwdError ? '#ff1d28' : '#000', }, globalStyles.textColor]}
                                value={confirmNewPwd}
                                onChangeText={(v) => { setConfirmPwdError(false); setConfirmNewPwd(v.replace(/\s/g, '')) }}
                            />
                            {confirmPwdError && (
                                <Text style={styles.errorColor}>{
                                    confirmPwdValidError ? 'New password does not match' : 'Please enter confirm new password'
                                }</Text>
                            )
                            }
                        </>
                    ) : (
                        <>
                            <Text style={[styles.modalNamePlaceHolder, { color: isError ? '#ff1d28' : '#357ec7' }]}>
                                {modalParams?.key}
                            </Text>
                            <TextInput
                                style={[styles.ModalInput, { borderColor: isError ? '#ff1d28' : '#000', }, globalStyles.textColor]}
                                value={modalParams?.value}
                                onChangeText={(v) => { setEmailValidError(false); setIsError(false); editData(v) }}
                            />
                            {isError && (
                                <Text style={styles.errorColor}>{
                                    emailValidError ? 'Please enter a valid email' : `Please enter ${modalParams?.key?.toLowerCase()}`
                                }</Text>
                            )
                            }
                        </>
                    )}
                    <View style={styles.modalButtonsContainer}>
                        <View>
                            <TouchableOpacity onPress={close} style={styles.modalCancelButtons}>
                                <Text style={styles.modalCancelButtonsText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => updateEditedState()} style={styles.modalSaveButtons}>
                                <Text style={styles.modalSaveButtonsText}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: 350,
        padding: 25,
        backgroundColor: '#fff',
        borderRadius: 7,
        elevation: 20,
    },
    modalNameTittle: {
        fontWeight: '500',
        fontSize: 15,
        color: '#000',
    },
    modalNamePlaceHolder: {
        paddingTop: 20,
    },
    ModalInput: {
        padding: 5,
        borderBottomWidth: 0.5,
    },
    errorColor: {
        color: errorColor,
    },
    modalButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingTop: 30,
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

export default UserEditModal;