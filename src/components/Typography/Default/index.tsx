import {TextPropsTypes} from '@/components'
import {Colors} from '@/constants'
import React from 'react'
import {Text as RNText} from 'react-native'
import {styles} from './styles'

const {primaryText} = Colors

export const Default: React.FC<TextPropsTypes> = ({
  isChecked = false,
  children,
  style,
  color,
  size = 24,
  lineH = 28,
  textAlign = 'auto',
  ...rest
}) => {
  return (
    <RNText
      style={[
        styles.text,
        {
          color: color || primaryText,
          fontSize: size,
          lineHeight: lineH,
          textAlign: textAlign,
        },
        style,
        isChecked && styles.checkedTask,
      ]}
      {...rest}>
      {children}
    </RNText>
  )
}
