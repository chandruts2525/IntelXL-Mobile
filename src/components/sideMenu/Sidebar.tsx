import React, { useContext, useState} from 'react'
import { Image, Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'

const Sidebar: React.FC<{ navigation: any }> = ({ navigation }) => {

    const { isGuest, setIsGuest, authData, signIn, signOut, setIsSignInFromGuest } = useContext(AuthContext)

    const [showModal, setShowModal] = useState(false)

    const redirectTo = (page: string) => {
        navigation.navigate(page)
        setShowModal(false);
    }

    return (
        <View>
            <TouchableWithoutFeedback onPress={() => { setShowModal(true) }}>
                <View style={styles.profileButton}>
                    <Image style={styles.profilePic} source={require('../../../assets/Nav-user.png')} resizeMode='cover' />
                </View>
            </TouchableWithoutFeedback>

            <View>
                <Modal visible={showModal} transparent={true} animationType='none' >
                    <TouchableWithoutFeedback onPress={() => { setShowModal(false) }}>
                        <View style={styles.modalContainer}>
                            <TouchableWithoutFeedback onPress={() => false}>
                                <View style={styles.modalContent}>

                                    <View style={styles.profileContainer}>
                                        <Image style={styles.profileImg} source={require('../../../assets/Nav-user.png')} />
                                        {isGuest ? (
                                            <Text style={styles.profileName}>Guest</Text>
                                        ) : (
                                            <Text style={styles.profileName}>{(authData?.firstName ?? '') + ' ' + (authData?.lastName ?? '')}</Text>
                                        )}
                                    </View>
                                    <TouchableOpacity onPress={() => { redirectTo('Course') }}>
                                        <Text style={styles.navItems}>Home</Text>
                                    </TouchableOpacity>
                                    {!isGuest ? (
                                        <TouchableOpacity onPress={() => { redirectTo('User') }}>
                                            <Text style={styles.navItems}>Settings</Text>
                                        </TouchableOpacity>
                                    ) : null
                                    }

                                    {/* <TouchableOpacity onPress={() => { redirectTo('ChatList') }}>
                                        <Text style={styles.navItems}>Chat</Text>
                                    </TouchableOpacity> */}

                                    <TouchableOpacity onPress={() => { redirectTo('About') }}>
                                        <Text style={styles.navItems}>About Us</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => { redirectTo('Contact') }}>
                                        <Text style={styles.navItems}>Contact Us</Text>
                                    </TouchableOpacity>

                                    {authData?.emailId ? (
                                        <TouchableOpacity onPress={() => { signOut() }}>
                                            <Text style={styles.navItems}>Sign Out</Text>
                                        </TouchableOpacity>
                                    ) : (
                                        <TouchableOpacity onPress={() => { setIsGuest(false) }}>
                                            <Text style={styles.navItems}>Sign In</Text>
                                        </TouchableOpacity>
                                    )}
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    profileButton: {
        backgroundColor: '#fff',
        height: 30,
        width: 30,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    profilePic: {
        height: 30,
        width: 30
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
    modalContent: {
        backgroundColor: '#fff',
        marginEnd: '2%',
        marginTop: '2%',
        paddingBottom: 5,
        paddingHorizontal: 20,
        paddingTop: 5,
        elevation: 5,
        borderRadius:5,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        borderBottomColor: '#b8bbbf',
        borderBottomWidth: 0.5,
        marginBottom: 7
    },
    profileImg: {
        height: 30,
        width: 30,
    },
    profileName: {
        paddingHorizontal: 10,
        fontSize: 16,
        color: 'black'
    },
    navItems: {
        paddingVertical: 7,
        fontSize: 14,
        color: '#4a4a4a'
    }
})

export default Sidebar