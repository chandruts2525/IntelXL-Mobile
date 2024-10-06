import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, useWindowDimensions } from 'react-native';
import RenderHtml from './RenderHtml';
import LinearGradient from 'react-native-linear-gradient';
import AutoHeightWebViewHtml from './AutoHeightWebViewHtml';


interface WrongAnsProps {
    agreeWrongAns: () => void,
    answer: {
        answer: string,
        description: string
    }
    questionType: number
}

const WrongAns = ({ agreeWrongAns, answer, questionType }: WrongAnsProps): JSX.Element => {

    const { width } = useWindowDimensions();

    return (
        <View style={styles.container}>
            <View style={styles.CorrectAns}>
                <View style={styles.inccorectContainer}>
                    <Image style={styles.incorrectImg} source={require('../../../assets/incorrectimg.gif')} />
                    <Text style={styles.incorrectText}>Sorry, Incorrect</Text>
                </View>

                <View style={styles.CorrectAnsContainer}>
                    <Text style={styles.CorrectAnsText}>The Correct answer is :</Text>
                </View>
                <View style={styles.AnswerContent}>
                    {questionType == 3 ? (
                        <AutoHeightWebViewHtml source={answer?.answer} width={60} />
                    ) : (
                        <RenderHtml source={answer?.answer} />
                    )}

                    {/* <WebViewHtml source={answer?.answer} /> */}
                </View>
            </View>
            <View style={styles.ExplanationConent}>
                <Text style={styles.explanationText}>Explanation</Text>
                <View style={{ paddingHorizontal: 10 }}>
                    {questionType == 3 ? (
                        <AutoHeightWebViewHtml source={answer?.description} width={60} />
                    ) : (
                        <RenderHtml source={answer?.description} />
                    )}

                    {/* <WebViewHtml source={answer?.description} /> */}
                </View>
            </View>
            <View style={styles.nextBtnView}>
                <TouchableOpacity
                    style={styles.nextBtn}
                    onPress={() => { agreeWrongAns() }}
                >
                    <LinearGradient
                        colors={['#74B72E', '#2E7D32']}
                        style={styles.nextBtn}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Next</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {

    },
    CorrectAns: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#ff0000',
        borderRadius: 8,
    },
    ExplanationConent: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#0B863C',
        marginVertical: 10,
        borderRadius: 8,

    },
    incorrectText: {
        color: '#ff0000',
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 20,
        textAlign: 'center',
    },
    CorrectAnsContainer: {
        margin: 10,
        justifyContent: 'flex-start',
        borderBottomWidth: 1,
        padding: 5,
        borderBottomColor: '#f4f4f4',
    },
    CorrectAnsText: {
        color: '#000',
    },
    AnswerContent: {
        paddingHorizontal: 10
    },
    AnswerTextContent: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 20,
        padding: 10,
    },
    explanationText: {
        fontSize: 15,
        fontWeight: 'bold',
        margin: 10,
        color: '#0B863C',
    },
    explanationpara: {
        fontSize: 13,
        margin: 10,
    },
    nextBtnView: {
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'flex-end',
        color: '#fff',
    },
    nextBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 7,
        width: 100,
    },
    nextBtnText: {
        color: 'white',
        fontWeight: '600'
    },
    inccorectContainer: {
        flexDirection: 'row',
    },
    incorrectImg: {
        marginLeft: 10,
        marginTop: 14.5,
        marginRight: 7,
        height: 50,
        width: 50,
    }
})

export default WrongAns;