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
  logoContainer: {
    width: '100%',
    paddingTop: 85,
    paddingBottom: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  listContainer: {
    flex: 1,
    width: '100%',
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginBottom: 25,
    marginRight: 25,
  },
})
