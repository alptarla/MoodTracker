import { StyleSheet, View } from 'react-native'
import React from 'react'
import MoodPicker from '../components/MoodPicker'
import useMood from '../hooks/useMood'

const HomeScreen = () => {
  const { addMood } = useMood()

  return (
    <View style={styles.screen}>
      <MoodPicker onSelectMood={addMood} />
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
