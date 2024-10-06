import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface params {
    message: string
}
const Message = ({ message }: params) => {
    return (
        <View style={styles.messageContainer}>
            <Text style={styles.errorMessage}>{message}</Text>
        </View>
    )
}

export default Message

const styles = StyleSheet.create({
    messageContainer: {
        height: 220,
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorMessage: {
        color: 'darkgray',
        fontSize: 20,
        fontWeight: 'bold'
    }
})