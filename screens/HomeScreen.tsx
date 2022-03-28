import { ImageBackground, StyleSheet, View } from 'react-native'
import React from 'react'
import MoodPicker from '../components/MoodPicker'
import useMood from '../hooks/useMood'

const imageUrl =
  'https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1766&q=80'

const HomeScreen = () => {
  const { addMood } = useMood()

  return (
    <ImageBackground
      source={{ uri: imageUrl }}
      style={styles.screen}
    >
      <MoodPicker onSelectMood={addMood} />
    </ImageBackground>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
})
