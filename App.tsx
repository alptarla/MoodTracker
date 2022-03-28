import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import HistoryScreen from './screens/HistoryScreen'
import AnalyticsScreen from './screens/AnalyticsScreen'
import HomeScreen from './screens/HomeScreen'
import MoodProvider from './context/MoodProvider'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { theme } from './theme'

const BottomTabs = createBottomTabNavigator()

const App = () => {
  return (
    <MoodProvider>
      <NavigationContainer>
        <BottomTabs.Navigator
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: theme.colorBlue,
            tabBarInactiveTintColor: theme.colorGrey,
            tabBarShowLabel: false,
            tabBarIcon: ({ size, color }) => {
              if (route.name === 'HomeScreen') {
                return (
                  <Icon
                    name="home"
                    size={size}
                    color={color}
                  />
                )
              }

              if (route.name === 'HistoryScreen') {
                return (
                  <Icon
                    name="history"
                    size={size}
                    color={color}
                  />
                )
              }

              if (route.name === 'AnalyticsScreen') {
                return (
                  <Icon
                    name="google-analytics"
                    size={size}
                    color={color}
                  />
                )
              }
            },
          })}
        >
          <BottomTabs.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ title: "Today's Mood" }}
          />
          <BottomTabs.Screen
            name="HistoryScreen"
            component={HistoryScreen}
            options={{ title: 'Past Moods' }}
          />
          <BottomTabs.Screen
            name="AnalyticsScreen"
            component={AnalyticsScreen}
            options={{ title: 'Fancy Charts' }}
          />
        </BottomTabs.Navigator>
      </NavigationContainer>
    </MoodProvider>
  )
}

export default App
