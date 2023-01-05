import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {StatusBar, StyleSheet} from 'react-native'
import {ApplicationStackNavigator} from '@/navigation/ApplicationStackNavigator'
import {Colors} from '@/constants'

const {primaryBackground} = Colors

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={primaryBackground}
      />
      <NavigationContainer>
        <ApplicationStackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  buttonContainer: {
    paddingHorizontal: 24,
  },
})

export default App
