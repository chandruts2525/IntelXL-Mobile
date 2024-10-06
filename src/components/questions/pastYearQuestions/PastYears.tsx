import { ActivityIndicator, FlatList, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SomethingWenrWrong from '../../alertMessages/SomethingWentWrong';
import NoData from '../../alertMessages/NoData';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/Router';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

type Props = NativeStackScreenProps<RootStackParamList, 'PastYears'>

const PastYears = ({ route, navigation }: Props) => {

    const { classId, subjects } = route.params;

    const [years, setYears] = useState<string[]>([])
    const [refresh, setRefresh] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<any>(null)
    const [expandedYears, setExpandedYears] = useState<Set<string>>(new Set());

    const colorsArray = ['#00B971', '#8D33AA', '#00A1DE', '#D74726', '#0B863C', '#F39317', '#10A0B6'];
    const dynamicColor = (index: number) => colorsArray[index % colorsArray.length];

    const pageRefresh = () => setRefresh(!refresh)

    const subjectPress = (year: string, subjectId: number) => {
        navigation.navigate('PastYearPractice', { subjectId, year })
    };

    const toggleYear = (year: string) => {
        const expandedSet = new Set(expandedYears);
        if (expandedSet.has(year)) {
            expandedSet.delete(year);
        } else {
            expandedSet.add(year);
        }
        setExpandedYears(expandedSet);
    };

    useEffect(() => {
        setIsLoading(true);

        fetch('https://intelxlapi.azurewebsites.net/api/Questions/Years/' + classId)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setYears(data);
                setError(null);
            })
            .catch(error => {
                setError(error);
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [refresh])

    return (
        <View style={styles.container}>
            {isLoading ? (
                <View style={[styles.loadingContainer, styles.loadingAnimation]}>
                    <ActivityIndicator size={45} color="#74B72E" />
                </View>
            ) : error ? (
                <SomethingWenrWrong refresh={pageRefresh} />
            ) : (!years.length) ? (
                <NoData reload={pageRefresh} />
            ) : (
                <ScrollView
                    style={styles.scrollContainer}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                >
                    {
                        years?.map((year, index) => {
                            const colorValue = dynamicColor(index);
                            const isExpanded = expandedYears.has(year);
                            return (
                                <View key={index}>
                                    <TouchableOpacity
                                        onPress={() => toggleYear(year)}
                                        style={[styles.yearContainer, { borderColor: colorValue }]}
                                    >
                                        <View>
                                            <MaterialCommunityIcon name={isExpanded ? 'chevron-up' : 'chevron-down'} size={32} color={colorValue} />
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text
                                                style={[styles.yearText, { color: colorValue }]}
                                            >
                                                {'Year - ' + year}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                    {isExpanded && (
                                        subjects?.map((subject, index) => {
                                            return (
                                                <TouchableOpacity
                                                    key={subject?.subjectId}
                                                    onPress={() => subjectPress(year, subject?.subjectId)}
                                                    style={{ paddingStart: 10 }}
                                                >
                                                    <Text
                                                        style={[styles.subjectText, { color: colorValue, borderColor: colorValue }]}
                                                    >
                                                        {subject?.subjectName}
                                                    </Text>
                                                </TouchableOpacity>
                                            )
                                        }))}
                                </View>
                            )
                        })
                    }
                </ScrollView>)
            }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        flex: 1,
        backgroundColor: '#f6f6f6',
        paddingHorizontal: '5%',
    },
    subjectText: {
        backgroundColor: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        elevation: 5,
        borderRadius: 5,
        borderWidth: 1,
        marginVertical: 10,
    },
    yearText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    yearContainer: {
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 10,
        elevation: 5,
        borderRadius: 5,
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
    },
    Loadingcontainer: {
        flex: 1,
        justifyContent: 'center',
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
});

export default PastYears;