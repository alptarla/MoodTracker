import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MoodPicker from '../components/MoodPicker'
import { MoodOptionType, MoodOptionWithTimestamp } from '../types'

const HomeScreen = () => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([])

  const handleSelectMood = (mood: MoodOptionType) =>
    setMoodList((prev) => [...prev, { mood, timestamp: Date.now() }])

  return (
    <View style={styles.screen}>
      <MoodPicker onSelectMood={handleSelectMood} />
      {moodList.map((item) => (
        <Text key={item.timestamp}>
          {item.mood.emoji} {new Date(item.timestamp).toString()}
        </Text>
      ))}
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
