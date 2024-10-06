import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import useCouponCheck from '../../hooks/useCouponCheck';

interface CouponProps {
    onSetValue : (value:string) => void
}

const Coupon = ({onSetValue} : CouponProps) => {
    const [couponInput, setCouponInput] = useState<string>();
    const [couponCode, setCouponCode] = useState<string>()

    const { isCouponLoading, isCouponError, percentage } = useCouponCheck(couponCode);

    useEffect(() => {
        if(percentage)
            onSetValue(percentage)
    }, [percentage])
    return (
        <>
            {isCouponError ? <Text style={{color: '#000'}}>Something went wrong</Text> : null}
            <View style={styles.couponContainer}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Coupon code"
                    placeholderTextColor="darkgray"
                    autoCapitalize='characters'
                    value={couponInput}
                    onChangeText={(text) => setCouponInput(text.toUpperCase())}
                />
                <TouchableOpacity style={styles.button} onPress={() => setCouponCode(couponInput)}>
                    {isCouponLoading ? 'Loading...' : 'Apply'}
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Coupon

const styles = StyleSheet.create({
    couponContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 80,
    },
    inputText: {
        color: '#000',
        flex: 1,
        height: 40,
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
        borderColor: '#52b700',
        borderWidth: 1,
        borderRadius: 5,
    },
    button: {
        marginLeft: 10,
        color: '#fff',
        paddingHorizontal: 20,
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 5,
        height: 40,
        borderRadius: 5,
        backgroundColor: '#52b700',
        textAlign: 'center'
    }
})