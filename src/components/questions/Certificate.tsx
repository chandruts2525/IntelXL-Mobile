import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'

type certificateProps = {
    score: number,
    timeSpent: string,
    correctQues: number,
    numOfQues: number,
    keepPracticing: () => void
}

const Certificate = ({ score, timeSpent, correctQues, numOfQues, keepPracticing }: certificateProps): JSX.Element => {

    const navigation = useNavigation();

    const nthCertificate = Math.floor(Math.random() * 3)

    switch (nthCertificate) {
        case 0: {
            return (
                <ImageBackground source={require('../../../assets/certificate-bg.jpg')} style={styles.container}>
                    <Image style={styles.medalImg} source={require('../../../assets/medal.png')} />
                    <View >
                        <Text style={styles.congratsText}>Congratulations</Text>
                        <Text style={styles.congratsTextpara}>You have perfected the skill
                            and achieved a gold medal.</Text>
                        <Text style={styles.winText}>Win more prizes!</Text>
                        <View style={styles.mainscore}>
                            <View>
                                <Text style={styles.ScoreText}>SmartScore</Text>
                                <Text style={styles.smartValue}>{score}</Text>
                            </View>
                            <View>
                                <Text style={styles.ScoreText}>TimeSpent</Text>
                                <Text style={styles.smartValue}>{timeSpent}</Text>
                            </View>
                            <View>
                                <Text style={styles.ScoreText}>Correct</Text>

                                <Text style={styles.smartValue}>{correctQues}/{numOfQues}</Text>
                            </View>
                        </View>
                        <View style={styles.praticeview}>
                            <TouchableOpacity
                                style={styles.praticeButton}
                                onPress={() => keepPracticing()}
                            >
                                <Text style={styles.praticeText}>Keep Practicing</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </ImageBackground>
            )
            break;
        }
        case 1: {
            return (
                <ImageBackground source={require('../../../assets/certificate3.jpg')} style={styles.container}>
                    <Image style={styles.medalImg1} source={require('../../../assets/medal1.png')} />
                    <View >
                        <View style={styles.mainscore1}>
                            <View>
                                <Text style={styles.ScoreText1}>SmartScore</Text>
                                <Text style={styles.smartValue1}>{score}</Text>
                            </View>
                            <View>
                                <Text style={styles.ScoreText1}>TimeSpent</Text>
                                <Text style={styles.smartValue1}>{timeSpent}</Text>
                            </View>
                            <View>
                                <Text style={styles.ScoreText1}>Correct</Text>
                                <Text style={styles.smartValue1}>{correctQues}/{numOfQues}</Text>
                            </View>
                        </View>
                        <Text style={styles.congratsText1}>Congratulations</Text>
                        <Text style={styles.congratsTextpara1}>You have mastered the craft and earned a prestigious gold medal.</Text>
                        <Text style={styles.winText1}>Win more prizes!</Text>

                        <View style={styles.praticeview}>
                            <TouchableOpacity
                                style={styles.praticeButton1}
                                onPress={() => keepPracticing()}
                            >
                                <Text style={styles.praticeText1}>Keep Practicing</Text>
                            </TouchableOpacity>

                        </View>

                    </View>

                </ImageBackground>
            )
            break;
        }
        default: {
            return (
                <ImageBackground source={require('../../../assets/certificate4.jpg')} style={styles.container}>
                    <View >
                        <View style={styles.mainscore2}>
                            <View>
                                <Text style={styles.ScoreText2}>SmartScore</Text>
                                <Text style={styles.smartValue2}>{score}</Text>
                            </View>
                            <View>
                                <Text style={styles.ScoreText2}>TimeSpent</Text>
                                <Text style={styles.smartValue2}>{timeSpent}</Text>
                            </View>
                            <View>
                                <Text style={styles.ScoreText2}>Correct</Text>
                                <Text style={styles.smartValue2}>{correctQues}/{numOfQues}</Text>
                            </View>
                        </View>
                        <Text style={styles.congratsText2}>Outstanding</Text>
                        <Text style={styles.congratsTextpara1}>You have mastered the craft and earned a prestigious gold medal.</Text>
                        <Text style={styles.winText2}>Win more prizes!</Text>

                        <View style={styles.praticeview}>
                            <TouchableOpacity
                                style={styles.praticeButton2}
                                onPress={() => keepPracticing()}
                            >
                                <Text style={styles.praticeText2}>Keep Practicing</Text>
                            </TouchableOpacity>

                        </View>

                    </View>

                </ImageBackground>

            )
            break;
        }
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        objectFit: 'cover',
    },
    medalImg: {
        height: 250,
        width: 250,
    },
    congratsText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40,
        color: '#fff',
    },
    congratsTextpara: {
        margin: 10,
        textAlign: 'center',
        fontSize: 16,
        color: '#fff',
    },
    winText: {
        margin: 10,
        textAlign: 'center',
        fontSize: 30,
        color: '#fff',
    },
    praticeview: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    praticeButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF500',
        width: 220,
        height: 50,
        borderRadius: 5,
        elevation: 5,
        marginVertical: 20,
    },
    praticeText: {
        color: '#000',
        fontSize: 15,
    },
    mainscore: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 20,
        borderWidth: 0.5,
        borderColor: '#fff',
        padding: 20,
        borderRadius: 5,
    },
    smartValue: {
        height: 80,
        width: 80,
        borderRadius: 50,
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        backgroundColor: '#fff',
        textAlign: 'center',
        textAlignVertical: 'center',
        elevation: 5,
    },
    ScoreText: {
        textAlign: 'center',
        paddingBottom: 15,
        color: '#fff',
    },



    congratsText1: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40,
        color: '#ffff00',
    },
    medalImg1: {
        height: 150,
        width: 150,
    },
    congratsTextpara1: {
        margin: 10,
        textAlign: 'center',
        fontSize: 16,
        color: '#000',
    },
    winText1: {
        margin: 5,
        textAlign: 'center',
        fontSize: 25,
        color: '#000',
    },
    mainscore1: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 20,
        borderWidth: 1,
        borderColor: '#000',
        padding: 20,
        borderRadius: 5,
    },
    smartValue1: {
        height: 80,
        width: 80,
        borderRadius: 50,
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        backgroundColor: '#fff',
        textAlign: 'center',
        textAlignVertical: 'center',
        elevation: 5,
    },
    ScoreText1: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 15,
        color: '#000',
    },
    praticeButton1: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#357ec7',
        width: 220,
        height: 50,
        borderRadius: 5,
        elevation: 5,
        marginVertical: 20,
    },
    praticeText1: {
        color: '#fff',
        fontSize: 15,
    },






    mainscore2: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 280,
        padding: 20,
    },
    smartValue2: {
        height: 60,
        width: 80,
        borderRadius: 5,
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        backgroundColor: '#fff',
        textAlign: 'center',
        textAlignVertical: 'center',
        elevation: 5,
    },
    ScoreText2: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 15,
        color: '#fff',
    },
    congratsText2: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40,
        color: '#00ff00',
    },
    winText2: {
        margin: 5,
        textAlign: 'center',
        fontSize: 25,
        color: '#fff',
    },
    praticeButton2: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3ded97',
        width: 220,
        height: 50,
        borderRadius: 50,
        elevation: 5,
        marginVertical: 20,
    },
    praticeText2: {
        color: '#000',
        fontSize: 15,
    },
})

export default Certificate;