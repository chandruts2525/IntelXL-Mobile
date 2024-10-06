// import { View, Text, useWindowDimensions } from 'react-native'
// import React, { useState } from 'react'
// import { WebView } from 'react-native-webview';
// import { baseStyle, marginZero } from '../../constants/HtmlStyles';

// interface SourceType {
//   source: string
// }
// let head = '<html lang="en"> <head> <meta name="viewport" content="width=device-width, initial-scale=0.95" /> </head><body>'

// let tail = '</body></html>'


// const WebViewHtml = ({ source }: SourceType) => {

//   const { width } = useWindowDimensions();

//   const[webViewHeight, setWebViewHeight] = useState(0);

//   const onMessage = (event : any) => {
//       setWebViewHeight(() => Number(event.nativeEvent.data));
//   };

//   return (
//     <View style={{ flex: 1, }}>
//       <WebView
//         // source={{ html: source }}
//         // source={{ html: '<meta name="viewport" content="width=device-width, initial-scale=1.0" />' + source }}
//         source = {{html: head + source + tail}}
//         // source={{html : '<math xmlns="http://www.w3.org/1998/Math/MathML"><mn>5</mn><mfrac><mn>5</mn><mn>7</mn></mfrac></math> நாட்கள்'}} 
//         onMessage={onMessage}
//         javaScriptEnabled={true}
//         injectedJavaScript="window.ReactNativeWebView.postMessage(Math.max(document.body.offsetHeight, document.body.scrollHeight));"
//         style={{ fontSize: 20, marginTop: -8, marginBottom: -8, height: webViewHeight }}
//         contentWidth={width}
//         scalesPageToFit={true}
//         baseStyle={baseStyle}
//         tagsStyles={marginZero}
//         enableExperimentalBRCollapsing={true}
//         enableExperimentalGhostLinesPrevention={true}
//         scrollEnabled={false}
//       />
//     </View>
//   )
// }

// export default WebViewHtml;