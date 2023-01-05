import {TextPropsTypes} from '@/components'
import {Colors} from '@/constants'
import React from 'react'
import {Text as RNText} from 'react-native'
import {styles} from './styles'

const {headerTitle} = Colors

export const TitleText: React.FC<TextPropsTypes> = ({
  children,
  style,
  color,
  size = 28,
  lineH = 32.8,
  textAlign = 'auto',
  ...rest
}) => {
  return (
    <RNText
      style={[
        styles.text,
        {
          color: color || headerTitle,
          fontSize: size,
          lineHeight: lineH,
          textAlign: textAlign,
        },
        style,
      ]}
      {...rest}>
      {children}
    </RNText>
  )
}
