import {Colors} from '@/constants'
import React, {ReactNode} from 'react'
import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleProp,
  Text,
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
  outlined?: boolean
  buttonStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  outlined,
  buttonStyle,
  textStyle,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[
        {...styles.button},
        outlined && {...styles.outlinedButton},
        disabled && {...styles.outlinedButton},
        buttonStyle,
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Typography.Default
        color={Colors.buttonText}
        style={[
          // {...styles.text},
          outlined && {...styles.outlinedText},
          textStyle,
        ]}>
        {children}
      </Typography.Default>
    </TouchableOpacity>
  )
}
