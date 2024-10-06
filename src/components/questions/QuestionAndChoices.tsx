import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { QuestionType } from './Questions'
import AutoHeightWebViewHtml from './AutoHeightWebViewHtml'
import RenderHtml from './RenderHtml'

interface IQuestion {
    ques: QuestionType
    nthQues: number
    choiceSelect: (choiceId: number, choice: string) => void
    selectedChoiceId: number
}

const QuestionAndChoices = ({ ques, nthQues, choiceSelect, selectedChoiceId }: IQuestion) => {

    const [selectedChoice, setSelectedChoice] = useState<number>()
    return (
        <>
            <View style={styles.QusContainer}>
                <View>
                    {nthQues ? (<Text style={styles.questionNumberText}>{nthQues}. </Text>) : null}
                </View>
                <View style={styles.questionText}>
                    {ques?.questionType == 3 ? (
                        <AutoHeightWebViewHtml source={ques.question} width={60} />
                    ) : (
                        <RenderHtml source={ques.question} />
                    )}

                    {/* <WebView source={{html : ques.question}} style={{ flex: 1 }} /> */}
                    {/* <WebViewHtml source={ques.question} /> */}
                </View>
            </View>
            <View style={styles.optionsContainer}>
                {
                    ques.choiceMasters?.map(({ choiceId, choice }) => {
                        return (

                            <TouchableWithoutFeedback
                                key={choiceId}
                                onPress={() => { choiceSelect(choiceId, choice); setSelectedChoice(choiceId) }}
                                style={{ flex: 1 }}
                            >

                                <View style={[styles.Option,
                                {
                                    backgroundColor: selectedChoice === choiceId ? '#e8f6ff' : '#fff',
                                    borderColor: selectedChoice === choiceId ? '#08c' : '#82CAFA',
                                    borderLeftWidth: selectedChoice === choiceId ? 15 : 10,
                                },
                                ]}>
                                    {ques?.questionType == 3 ? (
                                        <AutoHeightWebViewHtml source={choice} width={90} />
                                    ) : (
                                        <RenderHtml source={choice} />
                                    )}

                                    {/* <WebViewHtml source={choice} /> */}
                                    {/* <WebView source={{html : '<h1>choice</h1>'}}  /> */}
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    })
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    QusContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 10,
        borderBottomColor: '#000',
        borderBottomWidth: 0.5,
    },
    questionNumberText: {
        color: '#000',
        fontWeight: 'bold',
    },
    questionText: {
        flex: 1
    },
    optionsContainer: {
        flex: 1,
        marginVertical: 30,
    },
    Option: {
        flex: 1,
        padding: 15,
        paddingHorizontal: 20,
        borderRadius: 8,
        color: '#000',
        marginVertical: 15,
        borderColor: '#b2ebff',
        borderWidth: 1.5,
        borderLeftWidth: 10,
    },
})
export default QuestionAndChoices