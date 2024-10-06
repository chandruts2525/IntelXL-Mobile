import { View, Text, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Alert } from 'react-native'
import React from 'react'
import RenderHtml from './questions/RenderHtml';
import AutoHeightWebViewHtml from './questions/AutoHeightWebViewHtml';

const Just = () => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                {/* <View><Text style={{ color: '#000' }}>23</Text></View> */}
                {/* <View style={{ flex: 1}}> */}
                <View style={{ flex: 1, backgroundColor: 'red'
                , marginHorizontal: 10 
                }}>
                    <AutoHeightWebViewHtml
                        source='<math xmlns="http://www.w3.org/1998/Math/MathML"><mn>5</mn><mfrac><mn>5</mn><mn>7</mn></mfrac></math> நாட்கள்
                            ExplicitlyExplicitlyExplicitlyExplicitlyExplicitlyExplicitly Set Width and Height: If the HTML content contains elements with dynamic or unspecified widths and heights, it might cause alignment issues. Try explicitly setting widths and heights for elements to ensure consistent layout.
                            Platform-Specific Styling: Consider applying platform-specific styles using platform-specific CSS classes or inline styles to account for differences in rendering between iOS and Android platforms.
                            Test on Different Devices and Screen Sizes: Ensure that the alignment issues are not specific to a particular device or screen size. Test your app on different devices and screen sizes to identify any inconsistencies in alignment.
                            Platform-Specific Styling: Consider applying platform-specific styles using platform-specific CSS classes or inline styles to account for differences in rendering between iOS and Android platforms.
                            Test on Different Devices and Screen Sizes: Ensure that the alignment issues are not specific to a particular device or screen size. Test your app on different devices and screen sizes to identify any inconsistencies in alignment.
                            By following these steps and carefully inspecting the HTML content, CSS styles, and React Native code, you should be able to identify and resolve alignment issues in your WebView component. If youre still having trouble, providing more specific details or code examples would be helpful for further assistance.'
                        width={20}
                    />
                    {/* <AutoHeightWebViewHtml
                        source={`<math xmlns="http://www.w3.org/1998/Math/MathML"><mn>5</mn><mfrac><mn>5</mn><mn>7</mn></mfrac></math>`}
                    /> */}
                </View>
                {/* </View> */}
            </View>
        </ScrollView>
    )
}

export default Just