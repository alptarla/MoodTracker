import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MoodPicker from '../components/MoodPicker'

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <MoodPicker />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
})
