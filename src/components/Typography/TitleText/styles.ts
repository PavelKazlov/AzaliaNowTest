// import { Fonts } from '@/constants'
import {Common, Fonts} from '@/constants'
import {StyleSheet} from 'react-native'

const {robotoRegular} = Fonts

export const styles = StyleSheet.create({
  text: {
    fontFamily: robotoRegular,
    fontWeight: Common.ios ? '600' : 'bold',
  },
})
