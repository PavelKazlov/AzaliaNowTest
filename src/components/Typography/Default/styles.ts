import {Colors, Fonts} from '@/constants'
import {StyleSheet} from 'react-native'

const {robotoRegular} = Fonts

export const styles = StyleSheet.create({
  text: {
    fontFamily: robotoRegular,
    fontWeight: '400',
  },
  checkedTask: {
    textDecorationLine: 'line-through',
    color: Colors.checkedText,
  },
})
