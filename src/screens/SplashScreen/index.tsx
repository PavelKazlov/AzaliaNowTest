import {Logotype} from '@/components'
import {Colors, Screens} from '@/constants'
import {useNavigation} from '@react-navigation/native'
import React, {useEffect} from 'react'
import {ActivityIndicator, View} from 'react-native'
import {styles} from './styles'

export const SplashScreen = () => {
  const navigation = useNavigation()
  useEffect(() => {
    const onFocus = navigation.addListener('focus', () => {
      setTimeout(() => navigation.navigate(Screens.tasksListScreen), 2000)
    })
    return onFocus
  }, [navigation])

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logotype />
      </View>
      <ActivityIndicator
        style={styles.spinnerContainer}
        size="large"
        color={Colors.logo}
      />
    </View>
  )
}
