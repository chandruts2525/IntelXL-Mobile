import { View, useWindowDimensions, } from 'react-native'
import React from 'react'
import HTMLView, { HTMLContentModel, HTMLElementModel } from 'react-native-render-html'
import { baseStyle, marginZero } from '../../constants/HtmlStyles'
import { imatheqCss, imatheqJs } from './imatheq'
import WebView from 'react-native-webview'

interface SourceType {
  source: string
}

const RenderHtml = ({ source }: SourceType): JSX.Element => {

  const { width } = useWindowDimensions();

  let head = '<html lang="en"> <head> <meta name="viewport" content="width=device-width, initial-scale=0.95" /> ' + imatheqJs + imatheqCss + ' </head><body>'

  let tail = '</body></html>'

  const TotalHtml = head + source + tail

  const mathQues = source;
  // const mathQues = imatheqJs + imatheqCss + source;

  const customHTMLElementModels = {
    'math': HTMLElementModel.fromNativeModel({
      tagName: 'math',
      category: 'embedded',
      isVoid: false,
      isOpaque: true,
      // contentModel: HTMLContentModel.textual
    })
  };


  // const customHTMLElementModels : any = {
  //   math: {
  //     // contentModel: 'block',
  //     category: 'embedded',
  //     tagName: 'math',
  //     isVoid: false,
  //     isOpaque: true,
  //   },
  // };

  return (
    <HTMLView
      source={{ html: source }}
      contentWidth={width}
      enableExperimentalBRCollapsing={true}
      enableExperimentalGhostLinesPrevention={true}
      customHTMLElementModels={customHTMLElementModels}
      baseStyle={baseStyle}
      tagsStyles={marginZero}
    />
  )
}

export default RenderHtml;