import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const moodOptions = [
  { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
]

const MoodPicker = () => {
  return (
    <View style={styles.moodList}>
      {moodOptions.map((option) => (
        <Text
          key={option.emoji}
          style={styles.moodText}
        >
          {option.emoji}
        </Text>
      ))}
    </View>
  )
}

export default MoodPicker

const styles = StyleSheet.create({
  moodList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  moodText: {
    fontSize: 32,
  },
})
