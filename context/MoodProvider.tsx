import React, { createContext, useEffect, useState } from 'react'
import { MoodOptionType, MoodOptionWithTimestamp } from '../types'
import AsyncStorage from '@react-native-async-storage/async-storage'

const storageKey = '@myAppData'

type AppData = {
  moods: MoodOptionWithTimestamp[]
}

const getAppData = async (): Promise<AppData | null> => {
  try {
    const data = await AsyncStorage.getItem(storageKey)
    if (!data) return null
    return JSON.parse(data)
  } catch (error) {
    console.error(error)
    return null
  }
}

const setAppData = async (newData: AppData) => {
  try {
    await AsyncStorage.setItem(storageKey, JSON.stringify(newData))
  } catch (error) {
    console.error(error)
  }
}

type MoodContextType = {
  moodList: MoodOptionWithTimestamp[]
  addMood: (mood: MoodOptionType) => void
  removeMood: (mood: MoodOptionWithTimestamp) => void
}

const defaultValue = {
  moodList: [],
  addMood: () => {},
  removeMood: () => {},
}

export const MoodContext = createContext<MoodContextType>(defaultValue)

const MoodProvider: React.FC = ({ children }) => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([])

  useEffect(() => {
    const getDataFromStorage = async () => {
      const data = await getAppData()
      if (data) {
        setMoodList(data.moods)
      }
    }

    getDataFromStorage()
  }, [])

  const addMood = (mood: MoodOptionType) => {
    setMoodList((prev) => {
      const newValue = [...prev, { mood, timestamp: Date.now() }]
      setAppData({ moods: newValue })
      return newValue
    })
  }

  const removeMood = (mood: MoodOptionWithTimestamp) => {
    setMoodList((prev) => {
      const newValue = prev.filter((item) => item.timestamp !== mood.timestamp)
      setAppData({ moods: newValue })
      return newValue
    })
  }

  return (
    <MoodContext.Provider value={{ moodList, addMood, removeMood }}>
      {children}
    </MoodContext.Provider>
  )
}

export default MoodProvider
