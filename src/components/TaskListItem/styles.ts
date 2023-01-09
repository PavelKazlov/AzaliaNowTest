import {Colors, Common, Fonts} from '@/constants'
import {StyleSheet} from 'react-native'

const {buttonShadow, primaryBackground, secondaryButtonBackground, buttonText} =
  Colors

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 44,
    marginHorizontal: 5,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Common.ios ? primaryBackground : buttonShadow,
    backgroundColor: primaryBackground,
    borderWidth: 2,
    borderRadius: 8,
    shadowColor: buttonShadow,
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowOffset: {width: 0, height: 0},
    elevation: 5,
  },
  description: {
    flex: 1,
    marginLeft: 10,
  },
  animatedContainer: {
    width: '100%',
    justifyContent: 'center',
  },
})
