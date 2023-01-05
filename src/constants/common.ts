import {Platform} from 'react-native'

export const Common = {
  ios: Platform.OS === 'ios' ? true : false,
  android: Platform.OS === 'android' ? true : false,
}
