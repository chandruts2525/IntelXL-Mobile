import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface couponType {
    
}

const useCouponCheck = (couponode: string | undefined) => {

    const [percentage, setPercentage] = useState<string>()
    const [isCouponLoading, setIsCouponLoading] = useState<boolean>(false);
    const [isCouponError, setIsCouponError] = useState<boolean>(false);

    useEffect(() => {
        if (!couponode) {
            setPercentage(undefined)
            return;
        }
        setIsCouponLoading(true)
        setIsCouponError(false)
        axios.get('https://intelxlapi.azurewebsites.net/api/Coupons/GetByCouponCode/' + couponode)
            .then((response) => {
                console.log('Coupon data: ', response.data);
                
                setPercentage(response.data?.offerPercentage || undefined);
            })
            .catch((error) => {
                console.log('Error : ', error);
                setIsCouponError(true)
            })
            .finally(() => {
                setIsCouponLoading(false)
            })
    }, [couponode])

    return { isCouponLoading, isCouponError, percentage };
}

export default useCouponCheck;
