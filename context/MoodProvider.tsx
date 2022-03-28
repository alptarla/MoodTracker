import React, { createContext, useState } from 'react'
import { MoodOptionType, MoodOptionWithTimestamp } from '../types'

type MoodContextType = {
  moodList: MoodOptionWithTimestamp[]
  addMood: (mood: MoodOptionType) => void
}

const defaultValue = {
  moodList: [],
  addMood: () => {},
}

export const MoodContext = createContext<MoodContextType>(defaultValue)

const MoodProvider: React.FC = ({ children }) => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([])

  const addMood = (mood: MoodOptionType) =>
    setMoodList((prev) => [...prev, { mood, timestamp: Date.now() }])

  return (
    <MoodContext.Provider value={{ moodList, addMood }}>
      {children}
    </MoodContext.Provider>
  )
}

export default MoodProvider
