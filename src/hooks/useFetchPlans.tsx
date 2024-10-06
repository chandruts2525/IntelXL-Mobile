import React, { useEffect, useState } from 'react'
import axios from 'axios'

export type planType = {
    subscriptionId: string,
    subscriptionName: string,
    subscriptionAmount: string,
    currencyType: string,
    subscriptionDuration: string,
    courseMaster: {
        courseId: string,
        courseName: string
    },
    classMaster: {
        classId: string,
        className: string,
        subjectMasters: {
            subjectId: string,
            subjectName: string
        }[]
    }
}

const useFetchPlans = (classId: string) => {

    const [plans, setPlans] = useState<planType[]>([])
    const [isPlanLoading, setIsPlanLoading] = useState<boolean>(false);
    const [isPlanError, setIsPlanError] = useState<boolean>(false);

    useEffect(() => {
        if (!classId) {
            setPlans([])
            return;
        }
        setIsPlanLoading(true)
        setIsPlanError(false)
        axios.get<planType[]>('https://intelxlapi.azurewebsites.net/api/Subscription/Subscriptions/' + classId)
            .then((response) => {
                setPlans(response.data);
            })
            .catch((error) => {
                console.log('Error : ', error);
                setIsPlanError(true)
            })
            .finally(() => {
                setIsPlanLoading(false)
            })
    }, [classId])

    return { isPlanLoading, isPlanError, plans };
}

export default useFetchPlans;
