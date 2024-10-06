import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Carousel from 'react-native-reanimated-carousel';
import Card from './Card';
import { planType } from '../../hooks/useFetchPlans';

interface params {
    plans: planType[],
    setValue: (value: planType) => void
}
const width = Dimensions.get('window').width;

const Cards = ({plans, setValue}: params) => {

    useEffect(() => {
        setValue(plans[0])
    }, [plans])
    
    return (
        <View style={{ flex: 1 }}>
            <Carousel
                loop
                mode='parallax'
                width={width}
                height={520}
                // autoPlay={true}
                data={plans}
                // data={[...new Array(6).keys()]}
                scrollAnimationDuration={300}
                onSnapToItem={(index) => setValue(plans[index])}
                renderItem={({item}) => {
                    return (<Card plan={item}/>)
                }}
            />
        </View>
    );
}

export default Cards

const styles = StyleSheet.create({
    
})