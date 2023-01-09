import {Colors} from '@/constants'
import React, {ReactNode} from 'react'
import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native'
import {Typography} from '../Typography'
import {styles} from './styles'

export type ButtonProps = {
  children: ReactNode
  onPress?: (event: GestureResponderEvent) => void
  disabled?: boolean
  buttonStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  buttonStyle,
  textStyle,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[
        {...styles.button},
        disabled && {...styles.disabledButton},
        buttonStyle,
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Typography.Default color={Colors.buttonText} style={textStyle}>
        {children}
      </Typography.Default>
    </TouchableOpacity>
  )
}
