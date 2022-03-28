import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { MoodOptionType } from '../types'

const moodOptions: MoodOptionType[] = [
  { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
]

const MoodPicker = () => {
  const [selectedMood, setSelectedMood] = useState<MoodOptionType | null>(null)

  const handleSelectMood = (emoji: MoodOptionType) => {
    return () => setSelectedMood(emoji)
  }

  return (
    <View style={styles.moodList}>
      {moodOptions.map((option) => (
        <View key={option.emoji}>
          <Pressable
            onPress={handleSelectMood(option)}
            style={[
              styles.moodItem,
              option.emoji === selectedMood?.emoji && styles.selectedMoodItem,
            ]}
          >
            <Text style={styles.moodText}>{option.emoji}</Text>
          </Pressable>
          <Text style={styles.descriptionText}>
            {selectedMood?.emoji === option.emoji && option.description}
          </Text>
        </View>
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
  moodItem: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 5,
  },
  selectedMoodItem: {
    borderWidth: 2,
    backgroundColor: '#454c73',
    borderColor: '#fff',
  },
  descriptionText: {
    color: '#454c73',
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
  },
})
