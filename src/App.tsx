import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native'
import {ApplicationStackNavigator} from '@/navigation/ApplicationStackNavigator'
import {Colors} from '@/constants'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {persistor, store} from '@/store'

const {statusbarBackground} = Colors

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <SafeAreaView style={styles.sectionContainer}>
          <StatusBar
            barStyle={'dark-content'}
            backgroundColor={statusbarBackground}
          />
          <NavigationContainer>
            <ApplicationStackNavigator />
          </NavigationContainer>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
})

export default App
