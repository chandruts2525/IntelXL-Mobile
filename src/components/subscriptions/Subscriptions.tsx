import { ActivityIndicator, Button, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState, version } from 'react'
import DropdownComponent from '../../utils/DropdownComponent'
import useCoursesWithClasses from '../../hooks/useCoursesWithClasses';
import SomethingWenrWrong from '../alertMessages/SomethingWentWrong';
import NoData from '../alertMessages/NoData';
import Cards from './Cards';
import Coupon from './Coupon';
import useFetchPlans, { planType } from '../../hooks/useFetchPlans';
import Message from './Message';
import useCouponCheck from '../../hooks/useCouponCheck';

const Subscriptions = () => {
    const [selectedCourse, setSelectedCourse] = useState<string>('');
    const [selectedClass, setSelectedClass] = useState<string>('');
    const [selectedPlan, setSelectedPlan] = useState<planType>();
    const [percentage, setPercentage] = useState<string>();
    const [refresh, setRefresh] = useState<boolean>(false)

    // console.log('selected plan : ', selectedPlan);

    const { isLoading, isError, coursesWithClasses } = useCoursesWithClasses(refresh);
    const { isPlanLoading, isPlanError, plans } = useFetchPlans(selectedClass);

    const pageRefresh = () => setRefresh(!refresh);

    useEffect(() => {
        setSelectedClass('')
        setSelectedPlan(undefined);
    }, [selectedCourse])

    useEffect(() => {
        setSelectedPlan(undefined);
    }, [selectedClass])

    return (
        <View style={styles.container}>
            {isLoading ? (
                <View style={[styles.loadingContainer, styles.loadingAnimation]}>
                    <ActivityIndicator size={45} color="#74B72E" />
                </View>
            ) : isError ? (
                <SomethingWenrWrong refresh={pageRefresh} />
            ) : (!coursesWithClasses?.length) ? (
                <NoData reload={pageRefresh} />
            ) : (
                <ScrollView style={styles.scrollContainer}>
                    <StatusBar backgroundColor={'#52b700'} barStyle="light-content"></StatusBar>
                    <View style={styles.dropdownCon}>
                        <View style={styles.dropdown}>
                            <Text style={styles.dropdownLabel}>Course</Text>
                            <DropdownComponent
                                data={coursesWithClasses?.map(({ courseId, courseName }) => ({
                                    label: courseName,
                                    value: courseId.toString()
                                }))}
                                selected={selectedCourse}
                                onSelect={(value: string) => setSelectedCourse(value)}
                            />
                        </View>
                        <View style={styles.dropdown}>
                            <Text style={styles.dropdownLabel}>Class</Text>
                            <DropdownComponent
                                data={coursesWithClasses
                                    ?.find(({ courseId }) => courseId == selectedCourse)
                                    ?.classMasters
                                    ?.map(({ classId, className }) => ({
                                        label: className,
                                        value: classId.toString()
                                    })) || []}
                                selected={selectedClass}
                                onSelect={(value: string) => setSelectedClass(value)}
                            />
                        </View>
                    </View>

                    {
                        !selectedCourse ? (
                            <Message message={'Select a course.'} />
                        ) : !selectedClass ? (
                            <Message message={'Select a class.'} />
                        ) : isPlanError ? (
                            <Message message={'Something went wrong.'} />
                        ) : isPlanLoading ? (
                            <Message message={'Please wait...'} />
                        ) : (plans && plans.length) ? (
                            <Cards plans={plans} setValue={(value: planType) => setSelectedPlan(value)} />
                        ) : (
                            <Message message={'No plans available'} />
                        )
                    }
                    
                    {
                        percentage ? <Text style={{color: '#000', alignSelf: 'center'}}>{percentage}</Text> : null
                    }
                    <Coupon onSetValue={(value: string) => setPercentage(value)}/>

                    <View style={styles.joinButton}>
                        <Button
                            title="Join Now"
                            color='#52b700'
                        />
                    </View>
                </ScrollView>
            )}
        </View>
    )
}

export default Subscriptions

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {

    },
    dropdownCon: {
        display: 'flex',
        flexDirection: 'row',
    },
    dropdown: {
        flex: 1,
        padding: 10,
    },
    dropdownLabel: {
        color: '#000',
        fontSize: 17,
        fontWeight: 'bold',
        padding: 8,
        alignSelf: 'center'
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
    joinButton: {
        marginBottom: 10,
        marginTop: 50,
        justifyContent: 'center',
        backgroundColor: 'red',
        marginHorizontal: 100,
        borderRadius: 5,
        overflow: 'hidden'
    }
})