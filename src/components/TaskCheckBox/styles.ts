import {Colors} from '@/constants'
import {StyleSheet} from 'react-native'

const {primaryBackground, primaryButtonBackground} = Colors

export const styles = StyleSheet.create({
  checkBoxContainer: {
    backgroundColor: primaryBackground,
    margin: 0,
    padding: 0,
  },
  checkedIcon: {
    height: 21,
    width: 21,
    top: 0,
    left: 0,
  },
  wrapperStyle: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: primaryButtonBackground,
    backgroundColor: primaryBackground,
  },
})
