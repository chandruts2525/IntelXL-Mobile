import React, { useContext, useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, TouchableWithoutFeedback } from 'react-native';
import WrongAns from './WrongAns';
import Appriciation from './Appriciation';
import Challenge from './Challenge';
import Certificate from './Certificate';
import { AuthContext } from '../context/AuthContext';
import SomethingWenrWrong from '../alertMessages/SomethingWentWrong';
import NoData from '../alertMessages/NoData';
import NoSubscription from '../alertMessages/NoSubscription';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/Router';
import PracticeAgain from './PracticeAgain';
import QuestionAndChoices from './QuestionAndChoices';
import GuestLimit from '../alertMessages/GuestLimit';

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
let nthGuestQues = 0;
let maxTrialQues = 0;
let smartScore = 0, minutes = 0, seconds = 0;
let timerHolder: any;
let quesLength = 0;
let scoreIncrement = 0;
let practiceQuesLength = 0;

type Props = NativeStackScreenProps<RootStackParamList, 'Questions'>

const Questions = ({ route }: Props): JSX.Element => {

    const { subTopicId, subjectId } = route.params

    const { isGuest, nthPracQues, setNthPracQues, setGuestQuesCount, authData, hasSubscription } = useContext(AuthContext)
    const [questions, setquestions] = useState<QuestionType[]>([])
    const [practiceQues, setPracticeQues] = useState<QuestionType>()
    const [practiceAgainAlert, setPracticeAgainAlert] = useState<boolean>(false)

    const [refresh, setRefresh] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<any>(null)
    const [isWrong, setIsWrong] = useState<boolean>(false)
    const [isAppriciate, setIsAppriciate] = useState<boolean>(false)
    const [isChallenge, setIsChallenge] = useState<boolean>(false)
    const [isCertificate, setIsCertificate] = useState<boolean>(false)
    const [selectedChoice, setSelectedChoice] = useState<string>('')
    const [selectedChoiceId, setSelectedChoiceId] = useState<number>(0)
    const [countImage, setCountImage] = useState<number>(0);
    const [isGuestLimitOver, setIsGuestLimitOver] = useState<boolean>(false);

    const questionSubmit = () => {
        if (verifyAns()) {
            smartScore += scoreIncrement;
            nthCorrectQues++;
            console.log('Smart score : ' + smartScore)
            decisionMaking();
            postAttendedQuestion(practiceQues?.questionId, 1)
        }
        else {
            console.log('Smart score : ' + smartScore)
            setIsWrong(true)
            postAttendedQuestion(practiceQues?.questionId, 3)
        }
    }

    const aagreeWrongAns = (): void => {
        decisionMaking();
    };

    const nextQuestion = () => {
        console.log('nthGuestQues : ' + nthGuestQues)
        if (nthGuestQues < maxTrialQues || hasSubscription) {
            const selectedQues = questions[nthQues];
            selectedAns = selectedQues?.answer?.answer;
            console.log(selectedAns);
            nthQues++;
            setPracticeQues(selectedQues);
            setIsAppriciate(false);
            setIsWrong(false);
            setIsChallenge(false);
            nthGuestQues++;
        }
        else {
            console.log('Subscribe to continue.')
            setIsGuestLimitOver(true)
        }
        updateGuest()
    }

    const verifyAns = () => {
        return selectedAns === selectedChoice;
    }

    const decisionMaking = () => {
        if (nthQues == practiceQuesLength) {
            startChallenge();
        }
        else if (nthQues == quesLength) {
            hasSubscription ? createCertificate() : setIsGuestLimitOver(true)
        }
        else if (!isWrong)
            appriciation();
        else
            nextQuestion();
    }

    const appriciation = () => {
        setIsAppriciate(true);

        setTimeout(() => {
            nextQuestion();
        }, 1000)
    }

    const startChallenge = () => {
        setIsChallenge(true);

        setTimeout(() => {
            setCountImage(1);
            setTimeout(() => {
                setCountImage(2);
                setTimeout(() => {
                    nextQuestion();
                }, 1000)
            }, 1000)
        }, 1000)
    }

    const choiceSelect = (choiceId: number, choice: string) => {
        setSelectedChoice(choice)
        setSelectedChoiceId(choiceId)
    }

    const createCertificate = () => {
        setIsCertificate(true)
        timeSpent = minutes + ' : ' + seconds;
        clearInterval(timerHolder)
        //console.log('Time spent : ' + timeSpent)
        //console.log('Smart score : ' + smartScore)
    }

    const startTimer = () => {
        timerHolder = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            //console.log('Timer : ' + minutes + ' : ' + seconds);
        }, 1000);
    }

    const postAttendedQuestion = async (que_id: number | undefined, ans_status: number) => {
        if (hasSubscription) {
            let url = `https://intelxlapi.azurewebsites.net/api/UserExams/IsQuestionExists/${authData?.appUserId}?questionId=${que_id}&type=practice`;

            fetch(url, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
                .then((res) => {
                    if (!res.ok) {
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
            subtopicId: subTopicId,
            answeredStatus: ans_status,
            // subjectId: subjectId,
            practiceType: 'practice',
            createdDttm: createdAt,
            updatedDttm: new Date
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

        let url = `https://intelxlapi.azurewebsites.net/api/UserExams/DeleteRange/${subTopicId}?userId=${authData?.appUserId}`;

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

    const updateGuest = () => isGuest && setGuestQuesCount(nthGuestQues)

    const pageRefresh = () => setRefresh(!refresh)

    const resetValues = () => {
        nthQues = 1, nthCorrectQues = 0, timeSpent = '';
        smartScore = 0, minutes = 0, seconds = 0;
        clearInterval(timerHolder);
    }

    const nextSetOfQuestions = () => {
        setIsCertificate(false);
        pageRefresh();
        resetValues();
    }

    useEffect(() => {
        console.log('Is subscribed : ', hasSubscription);
        setIsLoading(true);
        console.log('SubTopic Id : ', subTopicId);
        fetch('https://intelxlapi.azurewebsites.net/api/Questions/GetPracticeQuestions/' +
            subTopicId +
            '?userId=' + (authData?.appUserId ?? 0) +
            '&isSignedIn=' + (authData ? 'true' : 'false'))
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                setError('');
                return response.json();
            })
            .then(data => {
                // console.log('Ques : ', data);

                quesLength = data?.questions?.length;
                maxTrialQues = data?.trialCount;
                // quesLength = 4;
                // maxTrialQues = 4;

                console.log('Ques length : ', quesLength);
                console.log('Total Ques length : ', data?.totalCount);
                console.log('Max trial : ', maxTrialQues);
                console.log('current guest count : ', nthPracQues);

                if (data?.totalCount > 3 && quesLength <= 3) {
                    setPracticeAgainAlert(true)
                    console.log('Practice again');
                }
                else if (quesLength <= 3) {
                    setquestions([])
                }
                else {
                    setquestions(data.questions);
                    nthGuestQues = nthPracQues;
                    if (nthGuestQues < maxTrialQues || hasSubscription) {
                        selectedAns = data.questions[0]?.answer?.answer;
                        console.log(selectedAns);
                        nthGuestQues++;
                        setPracticeQues(data.questions[0]);
                    }
                    else {
                        console.log('Subscribe to continue.')
                        setIsGuestLimitOver(true)
                    }
                    startTimer();
                    setError(null);
                    scoreIncrement = 100 / quesLength;
                    practiceQuesLength = quesLength - Math.floor(quesLength / 3);
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
            resetValues()
        };
    }, [refresh])

    return (isCertificate ? (
        <Certificate
            score={Math.ceil(smartScore)}
            timeSpent={timeSpent}
            correctQues={nthCorrectQues}
            numOfQues={quesLength}
            keepPracticing={nextSetOfQuestions}
        />
    ) : (
        <View style={styles.container}>

            {practiceAgainAlert ? (
                <PracticeAgain practiceAgain={practiceAgain} />
            ) : isGuestLimitOver ? (
                isGuest ? <GuestLimit /> : <NoSubscription />
            ) : isAppriciate ? (
                <Appriciation />
            ) : isChallenge ? (
                <Challenge countImage={countImage} />
            ) : isLoading ? (
                <View style={[styles.loadingContainer, styles.loadingAnimation]}>
                    <ActivityIndicator size={45} color="#74B72E" />
                </View>
            ) : error ? (
                <SomethingWenrWrong refresh={pageRefresh} />
            ) : (!questions.length) ? (
                <NoData reload={pageRefresh} />
            ) : (practiceQues) ? (
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
                        nthQues={nthQues}
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
            ) : null
            }
        </View >
    ))
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    QusAns: {
        flex: 1,
        marginVertical: 2,
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

export default Questions;

