import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { MoodOptionType } from '../types'
import { theme } from '../theme'

const imageSrc = require('../assets/butterflies.png')

const moodOptions: MoodOptionType[] = [
  { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
]

interface Props {
  onSelectMood: (mood: MoodOptionType) => void
}

const MoodPicker: React.FC<Props> = ({ onSelectMood }) => {
  const [selectedMood, setSelectedMood] = useState<MoodOptionType | null>(null)
  const [hasSelected, setHasSelected] = useState(false)

  const handleSelectMood = (emoji: MoodOptionType) => {
    return () => setSelectedMood(emoji)
  }

  const handleChoose = () => {
    onSelectMood(selectedMood!)
    setSelectedMood(null)
    setHasSelected(true)
  }

  const handleBack = () => setHasSelected(false)

  if (hasSelected) {
    return (
      <View style={styles.container}>
        <Image
          source={imageSrc}
          style={styles.image}
        />
        <Pressable
          style={styles.button}
          onPress={handleBack}
        >
          <Text style={styles.buttonText}>Back</Text>
        </Pressable>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>How are you right now?</Text>
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
      <Pressable
        style={styles.button}
        onPress={handleChoose}
        disabled={!selectedMood}
      >
        <Text style={styles.buttonText}>Choose</Text>
      </Pressable>
    </View>
  )
}

export default MoodPicker

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: 230,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderWidth: 2,
    borderColor: theme.colorPurple,
    margin: 10,
    borderRadius: 10,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 20,
    color: theme.colorWhite,
  },
  image: {
    height: 100,
    aspectRatio: 2,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  moodList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    backgroundColor: theme.colorPurple,
    borderColor: theme.colorWhite,
  },
  descriptionText: {
    color: theme.colorPurple,
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: theme.colorPurple,
    width: 150,
    borderRadius: 20,
    marginTop: 20,
    alignSelf: 'center',
    padding: 10,
  },
  buttonText: {
    color: theme.colorWhite,
    textAlign: 'center',
    fontWeight: 'bold',
  },
})
