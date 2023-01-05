import {Colors} from '@/constants'
import {StyleSheet} from 'react-native'

const {primaryBackground} = Colors

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
