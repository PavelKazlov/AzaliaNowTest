import {IconArrowLeft} from '@/assets'
import {Colors, Screens} from '@/constants'
import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {TouchableOpacity, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Typography} from '../Typography'
import {styles} from './styles'

const ArrowLeftIcon = () => {
  const navigation = useNavigation()
  const handleGoBack = () => {
    navigation.goBack()
  }

  return (
    <TouchableOpacity onPress={handleGoBack} style={styles.back}>
      <IconArrowLeft fill={Colors.primaryText} />
    </TouchableOpacity>
  )
}

export const Header = (props: any) => {
  const headerTitle = props?.route?.params?.headerTitle
  return (
    <SafeAreaView edges={['top']} style={styles.safeAreaContainer}>
      <View style={styles.headerContainer}>
        <ArrowLeftIcon />
        <Typography.TitleText>{headerTitle}</Typography.TitleText>
      </View>
    </SafeAreaView>
  )
}
