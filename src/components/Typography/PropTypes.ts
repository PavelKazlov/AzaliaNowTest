import {StyleProp, TextProps as RNTextProps, TextStyle} from 'react-native'

export type TextPropsTypes = {
  style?: StyleProp<TextStyle>
  color?: StyleProp<string>
  size?: StyleProp<number>
  lineH?: StyleProp<number>
  textAlign?: StyleProp<string>
  fontFamily?: StyleProp<string>
  fontWeight?: StyleProp<string>
  underline?: StyleProp<boolean>
  isChecked?: boolean
  pa?: StyleProp<number>
  pv?: StyleProp<number>
  ph?: StyleProp<number>
  pt?: StyleProp<number>
  pr?: StyleProp<number>
  pb?: StyleProp<number>
  pl?: StyleProp<number>
  ma?: StyleProp<number>
  mv?: StyleProp<number>
  mh?: StyleProp<number>
  mt?: StyleProp<number>
  mr?: StyleProp<number>
  mb?: StyleProp<number>
  ml?: StyleProp<number>
} & RNTextProps
