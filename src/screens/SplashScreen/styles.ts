import {Colors, Common} from '@/constants'
import {StyleSheet} from 'react-native'

const {primaryBackground} = Colors

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: primaryBackground,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  logoContainer: {
    width: '100%',
  },
  spinnerContainer: {
    marginTop: 20,
    width: '100%',
  },
})
