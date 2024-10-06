import React, { useEffect, useState } from 'react'
import axios from 'axios'

type CourseClassType = {
    courseId: string,
    courseName: string,
    classMasters: {
        classId: string,
        className: string
    }[]
}

const useCoursesWithClasses = (refresh : boolean) => {

    const [coursesWithClasses, setCoursesWithClasses] = useState<CourseClassType[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true)
        setIsError(false)
        axios.get<CourseClassType[]>('https://intelxlapi.azurewebsites.net/api/Courses/CoursesWithClasses/1')
            .then((response) => {

                const selectedData = response?.data?.map(({ courseId, courseName, classMasters }) => ({
                    courseId,
                    courseName,
                    classMasters: classMasters?.map(({ classId, className }) => ({
                        classId,
                        className
                    }))
                }))
                setCoursesWithClasses(selectedData);
            })
            .catch((error) => {
                console.log('Error : ', error);
                setIsError(true)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [refresh])

    return {isLoading, isError, coursesWithClasses};
}

export default useCoursesWithClasses;
