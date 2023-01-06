import {Colors} from '@/constants'
import {StyleSheet} from 'react-native'
const {
  buttonShadow,
  primaryButtonBackground,
  secondaryButtonBackground,
  buttonText,
} = Colors
export const styles = StyleSheet.create({
  button: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: primaryButtonBackground,
    borderRadius: 8,
    padding: 12,
    shadowColor: buttonShadow,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowOffset: {width: 0, height: 0},
    elevation: 5,
  },
  text: {
    color: buttonText,
    fontSize: 16,
    lineHeight: 22,
    textTransform: 'capitalize',
  },

  // outline styles
  outlinedButton: {
    backgroundColor: secondaryButtonBackground,
  },
  outlinedText: {
    color: buttonText,
  },
})
