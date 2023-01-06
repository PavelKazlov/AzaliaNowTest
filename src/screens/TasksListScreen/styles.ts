import {Colors, Common} from '@/constants'
import {StyleSheet} from 'react-native'

const {primaryBackground} = Colors

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: Common.ios ? 6 : 10,
    backgroundColor: primaryBackground,
    alignItems: 'flex-start',
  },
})
