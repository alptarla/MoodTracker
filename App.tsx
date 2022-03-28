import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import HistoryScreen from './screens/HistoryScreen'
import AnalyticsScreen from './screens/AnalyticsScreen'
import HomeScreen from './screens/HomeScreen'
import MoodProvider from './context/MoodProvider'

const BottomTabs = createBottomTabNavigator()

const App = () => {
  return (
    <MoodProvider>
      <NavigationContainer>
        <BottomTabs.Navigator>
          <BottomTabs.Screen
            name="HomeScreen"
            component={HomeScreen}
          />
          <BottomTabs.Screen
            name="HistoryScreen"
            component={HistoryScreen}
          />
          <BottomTabs.Screen
            name="AnalyticsScreen"
            component={AnalyticsScreen}
          />
        </BottomTabs.Navigator>
      </NavigationContainer>
    </MoodProvider>
  )
}

export default App

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
