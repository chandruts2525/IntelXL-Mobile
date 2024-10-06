import React, { useContext, useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, TouchableWithoutFeedback } from 'react-native';
import WrongAns from '../WrongAns';
import Certificate from '../Certificate';
import { AuthContext } from '../../context/AuthContext';
import SomethingWenrWrong from '../../alertMessages/SomethingWentWrong';
import NoData from '../../alertMessages/NoData';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/Router';
import PracticeAgain from '../PracticeAgain';
import QuestionAndChoices from '../QuestionAndChoices';

export type QuestionType = {
    questionId: number,
    question: string,
    questionType: number,
    answer: {
        answer: string,
        description: string
    },
    choiceMasters: [{
        choiceId: number,
        choice: string
    }]
}

let nthQues = 1, nthCorrectQues = 0, selectedAns = '', timeSpent = '';
let smartScore = 0, minutes = 0, seconds = 0;
let timerHolder: any;
let quesLength = 0;
let practiceQuesLength = 0;
let completedQuesCount = 1;
let totalQuesCount = 0;

type Props = NativeStackScreenProps<RootStackParamList, 'PastYearPractice'>

const PastYearPractice = ({ route }: Props): JSX.Element => {

    const { subjectId, year } = route.params

    const { isGuest, authData, hasSubscription } = useContext(AuthContext)
    const [questions, setquestions] = useState<QuestionType[]>([])
    const [practiceQues, setPracticeQues] = useState<QuestionType>()
    const [practiceAgainAlert, setPracticeAgainAlert] = useState<boolean>(false)

    const [refresh, setRefresh] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<any>(null)
    const [isWrong, setIsWrong] = useState<boolean>(false)
    const [isShowWrongBtn, setIsShowWrongBtn] = useState<boolean>()
    // const [isChallenge, setIsChallenge] = useState<boolean>(false)
    const [isCertificate, setIsCertificate] = useState<boolean>(false)
    const [selectedChoice, setSelectedChoice] = useState<string>('')
    const [selectedChoiceId, setSelectedChoiceId] = useState<number>(0)
    // const [countImage, setCountImage] = useState<number>(0);
    // const [isGuestLimitOver, setIsGuestLimitOver] = useState<boolean>(false);

    const questionSubmit = () => {
        completedQuesCount++;
        if (verifyAns()) {
            nthCorrectQues++;
            postAttendedQuestion(practiceQues?.questionId, 1)
            nextQuestion();
        }
        else {
            setIsWrong(true)
            postAttendedQuestion(practiceQues?.questionId, 3)
        }
    }

    const aagreeWrongAns = (): void => {
        nextQuestion();
    };

    const nextQuestion = () => {
        if (practiceQuesLength > nthQues) {
            const selectedQues = questions[nthQues];
            selectedAns = selectedQues?.answer?.answer;
            console.log(selectedAns);
            nthQues++;
            setPracticeQues(selectedQues);
        }
        else {
            setIsShowWrongBtn(true)
            setPracticeAgainAlert(true)
            console.log('Practice again');
        }
        setIsWrong(false);
    }

    const verifyAns = () => {
        return selectedAns === selectedChoice;
    }

    const choiceSelect = (choiceId: number, choice: string) => {
        setSelectedChoice(choice)
        setSelectedChoiceId(choiceId)
    }

    const createCertificate = () => {
        setIsCertificate(true)
        timeSpent = minutes + ' : ' + seconds;
        clearInterval(timerHolder)
    }

    const postAttendedQuestion = async (que_id: number | undefined, ans_status: number) => {
        if (!isGuest) {
            let url = `https://intelxlapi.azurewebsites.net/api/UserExams/IsQuestionExists/${authData?.appUserId}?questionId=${que_id}&type=previous&year=${year}`;

            fetch(url, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
                .then((res) => {
                    if (!res.ok){
                        if (res.status != 404) {
                            throw new Error('Network response was not ok')
                        }
                        postOrPutQuestion('POST', 0, que_id, ans_status, new Date)
                        throw new Error('Not Found')
                    }
                    return res.json();
                })
                .then((data) => {
                    postOrPutQuestion('PUT', data?.userExamId, que_id, ans_status, data?.createdDttm)
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    const postOrPutQuestion = (method: string, id: number, que_id: number | undefined, ans_status: number, createdAt: Date) => {
        let userExam = {
            userExamId: id,
            appUserId: authData?.appUserId,
            questionId: que_id,
            // subtopicId: subTopicId,
            answeredStatus: ans_status,
            subjectId: subjectId,
            practiceType: 'previous',
            createdDttm: createdAt,
            updatedDttm: new Date,
            yearOfQuestion: year
        }
        let url = `https://intelxlapi.azurewebsites.net/api/UserExams${method === 'PUT' ? `/${id}` : ''}`;

        fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userExam),
        })
            .then((res) => {
                if (!res.ok)
                    throw new Error('Network response was not ok')
                else
                    console.log('Attened question posted')
            })
            .catch(error => {
                console.log(error);
            })
    }

    const practiceAgain = () => {
        setPracticeAgainAlert(false);
        setIsLoading(true);

        let url = `https://intelxlapi.azurewebsites.net/api/UserExams/DeletePreviousRange/${subjectId}?userId=${authData?.appUserId}&type=previous&year=${year}`;

        console.log(url);

        fetch(url, {
            method: 'Delete'
        })
            .then((res) => {
                if (!res.ok)
                    throw new Error('Network response was not ok')
                pageRefresh()
                console.log('Resource deleted successfully');
            })
            .catch(error => {
                console.log(error)
                setError(error);
                setIsLoading(false);
            })
    }

    // const stopTimer = () => clearInterval(timerHolder)

    const pageRefresh = () => {
        setPracticeAgainAlert(false);
        setRefresh(!refresh)
    }

    useEffect(() => {
        completedQuesCount = 1;
        setIsLoading(true);

        fetch(`https://intelxlapi.azurewebsites.net/api/Questions/GetPracticeQuestionsByYear/${subjectId}?userId=${authData?.appUserId ?? 0}&year=${year}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                setError('');
                return response.json();
            })
            .then(data => {
                // console.log('Ques : ', data);
                console.log('Ques length : ', data?.questions?.length);
                console.log('Total Ques length : ', data?.totalCount);
                practiceQuesLength = data?.questions?.length;
                totalQuesCount = data?.totalCount;
                completedQuesCount += (data?.totalCount - practiceQuesLength)

                if (!practiceQuesLength && data?.totalCount) {
                    setIsShowWrongBtn(false)
                    setPracticeAgainAlert(true)
                    console.log('Practice again');
                }
                else if (practiceQuesLength) {
                    setquestions(data.questions);
                    selectedAns = data.questions[0]?.answer?.answer;
                    console.log(selectedAns);
                    setPracticeQues(data.questions[0]);
                }
                else {
                    setquestions([])
                }
            })
            .catch(error => {
                console.log(error)
                setError(error);
            })
            .finally(() => {
                setIsLoading(false);
            });

        return () => {
            nthQues = 1, quesLength = 0;
            practiceQuesLength = 0;
        };
    }, [refresh])

    return (isCertificate ? (
        <Certificate
            score={Math.ceil(smartScore)}
            timeSpent={timeSpent}
            correctQues={nthCorrectQues}
            numOfQues={practiceQuesLength}
            keepPracticing={() => {}}
        />
    ) : (
        <View style={styles.container}>

            {practiceAgainAlert ? (
                <PracticeAgain practiceAgain={practiceAgain}
                    showWrongBtn={isShowWrongBtn}
                    retryIncorrect={pageRefresh}
                />
            ) : isLoading ? (
                <View style={[styles.loadingContainer, styles.loadingAnimation]}>
                    <ActivityIndicator size={45} color="#74B72E" />
                </View>
            ) : error ? (
                <SomethingWenrWrong refresh={pageRefresh} />
            ) : (!questions.length) ? (
                <NoData reload={pageRefresh} />
            ) : (practiceQues) ? (
                <>
                    <Text style={styles.countText}>Q : {completedQuesCount}/{totalQuesCount}</Text>
                    <ScrollView
                        style={styles.QusAns}
                        horizontal={false}
                        showsVerticalScrollIndicator={false}
                    >
                        {isWrong ? (
                            <WrongAns
                                agreeWrongAns={aagreeWrongAns}
                                answer={practiceQues?.answer}
                                questionType={practiceQues?.questionType}
                            />
                        ) : null}
                        <QuestionAndChoices
                            ques={practiceQues}
                            nthQues={0}
                            choiceSelect={(choiceId, choice) => choiceSelect(choiceId, choice)}
                            selectedChoiceId={selectedChoiceId}
                        />
                        {!isWrong ? (
                            <View style={styles.submitbtnview}>
                                <TouchableWithoutFeedback
                                    style={styles.SubmitBtn}
                                    onPress={() => questionSubmit()}
                                >
                                    <LinearGradient
                                        colors={['#74B72E', '#2E7D32']}
                                        style={styles.SubmitBtn}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 0 }}
                                    >
                                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Submit</Text>
                                    </LinearGradient>
                                </TouchableWithoutFeedback>
                            </View>
                        ) : null}
                    </ScrollView>
                </>
            ) : null
            }
        </View >
    ))
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    countText: {
        color: 'red',
        alignSelf: 'center',
    },
    QusAns: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    SubmitBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 7,
        width: 100,
    },
    submitbtnview: {
        marginRight: 20,
        alignItems: 'flex-end',
        color: '#fff',
    },
    submitBtnText: {
        color: 'white',
        fontWeight: '600'
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    loadingAnimation: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 20,
    },
})

export default PastYearPractice;

