import {Colors} from '@/constants'
import {StyleSheet} from 'react-native'

const {primaryBackground} = Colors

export const styles = StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: primaryBackground,
  },
  headerContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    backgroundColor: primaryBackground,
  },
  back: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 8,
    width: 32,
    height: 32,
  },
})
