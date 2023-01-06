import {Logo} from '@/assets'
import {Colors} from '@/constants'
import React, {ReactNode} from 'react'
import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import {Typography} from '../Typography'
import {styles} from './styles'

export const Logotype: React.FC = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.textContainer}>
        <Typography.Default color={Colors.logo} size={36} lineH={42}>
          AzaliaNow
        </Typography.Default>
      </View>
    </View>
  )
}
