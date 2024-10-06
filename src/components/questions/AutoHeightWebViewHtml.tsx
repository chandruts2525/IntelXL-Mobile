import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import AutoWebviewHeight from 'react-native-autoheight-webview'

interface SourceType {
    source: string,
    width: number
}

const AutoHeightWebViewHtml = ({ source, width }: SourceType) => {
    return (
        <AutoWebviewHeight
            source={{ html: '<meta name="viewport" content="width=device-width, initial-scale=1.0" />' + source }}
            style={{
                width: Dimensions.get('window').width - width
            }}
        />
    )
}

export default AutoHeightWebViewHtml